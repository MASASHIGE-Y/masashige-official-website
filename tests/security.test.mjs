import assert from "node:assert/strict";
import test from "node:test";
import { ESLint } from "eslint";
import { securityHeaders } from "../lib/security-headers.mts";

function headers(development) {
  return Object.fromEntries(
    securityHeaders(development).map(({ key, value }) => [key, value])
  );
}

test("production CSP restricts sources without disabling static hydration or Google Forms", () => {
  const h = headers(false);
  const csp = h["Content-Security-Policy"];
  assert.match(csp, /default-src 'self'/);
  assert.match(csp, /script-src 'self' 'unsafe-inline'/);
  assert.match(csp, /script-src-attr 'none'/);
  assert.doesNotMatch(csp, /unsafe-eval|ws:|wss:/);
  assert.match(csp, /frame-src https:\/\/docs\.google\.com(?:;|$)/);
  assert.match(csp, /frame-ancestors 'none'/);
  assert.match(csp, /object-src 'none'/);
  assert.match(csp, /upgrade-insecure-requests/);
  assert.equal(h["X-Content-Type-Options"], "nosniff");
  assert.equal(h["X-Frame-Options"], "DENY");
  assert.equal(h["Referrer-Policy"], "strict-origin-when-cross-origin");
  assert.match(h["Permissions-Policy"], /camera=\(\)/);
});

test("development-only CSP exceptions do not force local HTTP to HTTPS", () => {
  const csp = headers(true)["Content-Security-Policy"];
  assert.match(csp, /unsafe-eval/);
  assert.match(csp, /connect-src 'self' ws: wss:/);
  assert.doesNotMatch(csp, /upgrade-insecure-requests/);
});

test("ESLint 10 still detects React, accessibility, Hooks, TypeScript and Next.js problems", async () => {
  const eslint = new ESLint();
  const [result] = await eslint.lintText(
    `
    import { useState } from "react";
    export default function Broken({ enabled }: { enabled: boolean }) {
      const value: any = 1;
      if (enabled) useState(value);
      return <div>{[1, 2].map(item => <span>{item}</span>)}<img src="/test.png" /><a href="/">Home</a></div>;
    }
  `,
    { filePath: "components/security-lint-fixture.tsx" }
  );
  const rules = new Set(result.messages.map(({ ruleId }) => ruleId));
  for (const rule of [
    "react/jsx-key",
    "jsx-a11y/alt-text",
    "react-hooks/rules-of-hooks",
    "@typescript-eslint/no-explicit-any",
    "@next/next/no-html-link-for-pages"
  ]) {
    assert.ok(
      rules.has(rule),
      `Expected ${rule}; received ${[...rules].join(", ")}`
    );
  }
  assert.equal(result.fatalErrorCount, 0);
});

test("ESLint accepts an accessible typed component with valid Hooks", async () => {
  const eslint = new ESLint();
  const [result] = await eslint.lintText(
    `
    import { useState } from "react";
    export default function Counter() {
      const [count, setCount] = useState(0);
      return <button type="button" onClick={() => setCount(count + 1)}>Count: {count}</button>;
    }
  `,
    { filePath: "components/security-lint-fixture.tsx" }
  );
  assert.equal(result.errorCount, 0, JSON.stringify(result.messages));
  assert.equal(result.warningCount, 0, JSON.stringify(result.messages));
});
