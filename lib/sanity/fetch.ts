export const publishedQuery =
  '{"copy": *[_type == "siteText" && _id == "siteText-" + section], "links": *[_id == "siteLinks"][0], "enabled": *[_id == "libraryConfig"][0].enabled, "videos": *[_type == "libraryVideo"] | order(_createdAt asc)}';

export async function readPublished(
  projectId: string,
  dataset: string,
  fetcher: typeof fetch = fetch
): Promise<Record<string, unknown>> {
  if (!/^[a-z0-9]+$/.test(projectId) || !/^[a-z0-9_-]+$/.test(dataset))
    throw new Error("Invalid Sanity public configuration");
  const url = new URL(
    `https://${projectId}.api.sanity.io/v2026-11-01/data/query/${dataset}`
  );
  url.searchParams.set("query", publishedQuery);
  url.searchParams.set("perspective", "published");
  const response = await fetcher(url, {
    next: { revalidate: 60 },
    signal: AbortSignal.timeout(8000)
  });
  if (!response.ok) throw new Error("Sanity public content is unavailable");
  const body: unknown = await response.json();
  if (
    !body ||
    typeof body !== "object" ||
    !("result" in body) ||
    !body.result ||
    typeof body.result !== "object" ||
    Array.isArray(body.result)
  )
    throw new Error("Invalid Sanity response");
  return body.result as Record<string, unknown>;
}
