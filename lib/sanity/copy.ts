import { localizedContent } from "../content.ts";

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Widen<U>[]
    : T extends object
      ? { readonly [K in keyof T]: Widen<T[K]> }
      : T;
export type SiteCopy = Widen<typeof localizedContent>;

const sectionNames: Record<string, string> = {
  site: "サイト情報",
  navItems: "ナビゲーション",
  hero: "トップ",
  homeDigest: "発信と講演への入口",
  pathways: "3つの入口",
  mission: "Kipepeo",
  about: "プロフィール",
  career: "経歴",
  qualifications: "資格",
  activities: "活動",
  speaking: "講演",
  gallery: "ギャラリー",
  contact: "お問い合わせ",
  education: "教育・国際協力",
  publications: "発信",
  latestNote: "note",
  latestYoutube: "YouTube",
  footer: "フッター"
};

function leaves(
  value: unknown,
  path: string[] = []
): { key: string; value: string }[] {
  if (typeof value === "string")
    return path.at(-1) === "href" ? [] : [{ key: path.join("."), value }];
  if (!value || typeof value !== "object") return [];
  return Object.entries(value).flatMap(([key, child]) =>
    leaves(child, [...path, key])
  );
}

function read(value: unknown, path: string): unknown {
  return path
    .split(".")
    .reduce<unknown>(
      (item, key) =>
        item && typeof item === "object"
          ? (item as Record<string, unknown>)[key]
          : undefined,
      value
    );
}

const visibleHeroFields = new Set([
  "currentRole",
  "eyebrow",
  "titleLines",
  "imageAlt",
  "primaryCta",
  "secondaryCta",
  "kipepeoMessage",
  "kipepeoSubLabel"
]);
function isVisibleField(key: string) {
  const [section, field, index, detail] = key.split(".");
  if (["latestNote", "latestYoutube", "publications"].includes(section))
    return false;
  if (section === "site") return ["name", "tagline"].includes(field);
  if (section === "hero") return visibleHeroFields.has(field);
  if (section === "mission") return field === "title";
  if (section === "pathways" && field === "items")
    return ["title", "credentials", "imageAlt"].includes(detail);
  if (section === "activities" && field === "items")
    return ["2", "3", "4", "5"].includes(index);
  return true;
}

export const copyFields = leaves(localizedContent.ja)
  .filter(({ key }) => isVisibleField(key))
  .map(({ key, value }) => ({
    key,
    section: key.split(".")[0],
    title: value.slice(0, 65),
    ja: value,
    en: String(read(localizedContent.en, key) ?? "")
  }));
export const copySections = [
  ...new Set(copyFields.map((field) => field.section))
].map((id) => ({ id, title: sectionNames[id] ?? id }));

export function copyDocumentId(section: string) {
  return `siteText-${section}`;
}

export function initialCopy(section: string) {
  return {
    _id: copyDocumentId(section),
    _type: "siteText",
    section,
    entries: copyFields
      .filter((field) => field.section === section)
      .map((field, index) => ({
        _key: `text${index}`,
        key: field.key,
        ja: field.ja,
        en: field.en
      }))
  };
}

export function applyCopy(documents: unknown): SiteCopy {
  const result: SiteCopy = structuredClone(localizedContent);
  if (!Array.isArray(documents)) throw new Error("Invalid site text response");
  for (const doc of documents) {
    if (
      !doc ||
      typeof doc !== "object" ||
      !Array.isArray(doc.entries) ||
      typeof doc.section !== "string"
    )
      throw new Error("Invalid site text document");
    for (const entry of doc.entries) {
      if (!entry || typeof entry !== "object")
        throw new Error("Invalid text entry");
      const candidate = entry as Record<string, unknown>;
      const field = copyFields.find(
        (item) => item.key === candidate.key && item.section === doc.section
      );
      if (!field) throw new Error("Unknown site text field");
      for (const locale of ["ja", "en"] as const) {
        const value = entry[locale];
        if (value === undefined) continue;
        if (typeof value !== "string" || value.length > 10000)
          throw new Error("Invalid site text value");
        const path = field.key.split(".");
        const leaf = path.pop()!;
        const parent = path.reduce<unknown>(
          (item, key) => (item as Record<string, unknown>)[key],
          result[locale]
        );
        (parent as Record<string, unknown>)[leaf] = value;
      }
    }
  }
  return result;
}
