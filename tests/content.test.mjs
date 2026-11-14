import assert from "node:assert/strict";
import test from "node:test";
import { applyCopy, copySections, initialCopy } from "../lib/sanity/copy.ts";
import {
  parseVideos,
  youtubeId,
  preserveVideoNotes
} from "../lib/sanity/validation.ts";
import { parseLinks } from "../lib/sanity/links.ts";
import { readPublished } from "../lib/sanity/fetch.ts";
import { securityHeaders } from "../lib/security-headers.mts";
import { createRequire } from "node:module";

test("seeded text preserves the existing Japanese and English dictionaries", () => {
  assert.deepEqual(
    applyCopy(copySections.map((section) => initialCopy(section.id))),
    applyCopy([])
  );
});
test("published text IDs use the public root path, not private dotted paths", () => {
  for (const section of copySections) {
    assert.equal(initialCopy(section.id)._id, `siteText-${section.id}`);
    assert.ok(!initialCopy(section.id)._id.includes("."));
  }
});
test("copy changes only allowed text without changing navigation or defaults", () => {
  const before = applyCopy([]);
  const result = applyCopy([
    {
      section: "hero",
      entries: [
        { key: "hero.currentRole", ja: "テストの肩書き", en: "Test role" }
      ]
    }
  ]);
  assert.equal(result.ja.hero.currentRole, "テストの肩書き");
  assert.equal(result.en.hero.currentRole, "Test role");
  assert.deepEqual(result.ja.navItems, before.ja.navItems);
  assert.notEqual(before.ja.hero.currentRole, result.ja.hero.currentRole);
  for (const input of [
    null,
    {},
    [{ section: "hero", entries: [null] }],
    [{ section: "hero", entries: [{ key: "__proto__.x", ja: "x" }] }],
    [{ section: "hero", entries: [{ key: "hero.currentRole", ja: {} }] }]
  ])
    assert.throws(() => applyCopy(input));
});
test("YouTube inputs accept official videos but reject unsafe URLs", () => {
  for (const url of [
    "https://www.youtube.com/watch?v=Qe3EmiFWgGM",
    "https://youtu.be/Qe3EmiFWgGM?t=10",
    "https://youtube.com/shorts/Qe3EmiFWgGM"
  ])
    assert.equal(youtubeId(url), "Qe3EmiFWgGM");
  for (const url of [
    null,
    {},
    "javascript:alert(1)",
    "http://youtu.be/Qe3EmiFWgGM",
    "https://youtube.com.evil.test/watch?v=Qe3EmiFWgGM",
    "https://name:password@youtube.com/watch?v=Qe3EmiFWgGM",
    "https://youtu.be/bad"
  ])
    assert.equal(youtubeId(url), undefined);
  assert.throws(() =>
    parseLinks({
      youtubeChannelUrl: "javascript:alert(1)",
      homeVideoUrl: "https://youtu.be/Qe3EmiFWgGM"
    })
  );
});
test("video input validates metadata, identifiers and category references", () => {
  const doc = {
    _id: "sample-video",
    title: "Test video",
    url: "https://youtu.be/Qe3EmiFWgGM",
    sourceId: "atsu",
    topicIds: ["english-sounds"],
    metadataCheckedAt: "2026-11-14"
  };
  const parsed = parseVideos([doc], ["english-sounds"], ["atsu"]);
  assert.equal(parsed[0].videoId, "Qe3EmiFWgGM");
  assert.equal(parsed[0].review.status, "unwatched");
  assert.deepEqual(parseVideos([], [], []), []);
  for (const input of [
    null,
    [null],
    [doc, doc],
    [{ ...doc, topicIds: ["unknown"] }],
    [{ ...doc, title: {} }],
    [{ ...doc, url: "https://evil.test" }]
  ])
    assert.throws(() => parseVideos(input, ["english-sounds"], ["atsu"]));
});
test("public fetch uses published perspective, timed caching and no credentials", async () => {
  let requested;
  const result = await readPublished(
    "canary123",
    "production",
    async (url, options) => {
      requested = { url, options };
      return Response.json({ result: { copy: [], videos: [] } });
    }
  );
  assert.equal(requested.url.hostname, "canary123.api.sanity.io");
  assert.equal(requested.url.searchParams.get("perspective"), "published");
  assert.equal(requested.options.next.revalidate, 60);
  assert.equal(requested.options.headers, undefined);
  assert.deepEqual(result, { copy: [], videos: [] });
});

test("existing video notes are preserved only while the actual video matches", () => {
  const [video] = parseVideos(
    [
      {
        _id: "sample",
        title: "Canary video",
        url: "https://youtu.be/Qe3EmiFWgGM",
        sourceId: "atsu",
        topicIds: ["english-sounds"],
        metadataCheckedAt: "2026-11-14"
      }
    ],
    ["english-sounds"],
    ["atsu"]
  );
  const original = {
    ...video,
    presenters: ["Canary speaker"],
    relatedResourceIds: ["related-video"]
  };
  assert.deepEqual(preserveVideoNotes([video], [original])[0].presenters, [
    "Canary speaker"
  ]);
  const changed = { ...video, videoId: "SBysNlzLqno" };
  assert.deepEqual(preserveVideoNotes([changed], [original])[0].presenters, []);
  assert.deepEqual(
    preserveVideoNotes([changed], [original])[0].relatedResourceIds,
    []
  );
});
test("upstream outages and malformed payloads remain errors, not empty success", async () => {
  await assert.rejects(
    readPublished("../evil", "production", async () => {
      throw new Error("Must not fetch");
    }),
    /configuration/
  );
  await assert.rejects(
    readPublished(
      "canary123",
      "production",
      async () => new Response(null, { status: 503 })
    ),
    /unavailable/
  );
  for (const payload of [null, {}, { result: null }, { result: [] }])
    await assert.rejects(
      readPublished("canary123", "production", async () =>
        Response.json(payload)
      ),
      /Invalid Sanity response/
    );
  const original = new Error("canary transport failure");
  await assert.rejects(
    readPublished("canary123", "production", async () => {
      throw original;
    }),
    (error) => error === original
  );
});
test("Sanity network permissions are limited to the Studio route", () => {
  const publicPolicy = securityHeaders(false).find(
    (header) => header.key === "Content-Security-Policy"
  ).value;
  const studioPolicy = securityHeaders(false, true).find(
    (header) => header.key === "Content-Security-Policy"
  ).value;
  assert.doesNotMatch(publicPolicy, /sanity/);
  assert.match(studioPolicy, /https:\/\/\*\.api.sanity.io/);
  assert.doesNotMatch(studioPolicy, /unsafe-eval/);
  assert.match(publicPolicy, /frame-src https:\/\/docs.google.com/);
});
test("scoped CLI security overrides preserve YAML and TOML parsing", () => {
  const require = createRequire(import.meta.url);
  const fromFrameworks = createRequire(require.resolve("@vercel/frameworks"));
  const yaml = fromFrameworks("js-yaml").safeLoad("title: canary");
  assert.equal(yaml.title, "canary");
  assert.deepEqual(Object.keys(yaml), ["title"]);
  const toml = fromFrameworks("smol-toml").parse('title = "canary"');
  assert.equal(toml.title, "canary");
  assert.deepEqual(Object.keys(toml), ["title"]);
});
