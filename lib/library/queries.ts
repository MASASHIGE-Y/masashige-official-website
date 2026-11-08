import { categories, domains, sources, topics } from "./catalog";
import { resources } from "./resources";
import type { DomainId, Resource } from "./types";

export const getDomain = (slug: string) =>
  domains.find((item) => item.id === slug);
export const getCategories = (domainId: DomainId) =>
  categories.filter((item) => item.domainId === domainId);
export const getCategory = (domainId: string, slug: string) =>
  categories.find((item) => item.domainId === domainId && item.slug === slug);
export const getTopics = (categoryId: string) =>
  topics.filter(
    (item) =>
      item.categoryId === categoryId &&
      item.published &&
      resources.some(
        (resource) => resource.published && resource.topicIds.includes(item.id)
      )
  );
export const getResources = (topicId: string) =>
  resources.filter((item) => item.published && item.topicIds.includes(topicId));
export const getSource = (id: string) => sources.find((item) => item.id === id);
export const getSources = (domainId: DomainId) =>
  sources.filter((item) => item.domainId === domainId);
export const getTopic = (categoryId: string, slug: string) =>
  getTopics(categoryId).find((item) => item.slug === slug);

export function topicPath(topicId: string) {
  const topic = topics.find(
    (item) =>
      item.id === topicId && item.published && getResources(item.id).length > 0
  );
  const category =
    topic && categories.find((item) => item.id === topic.categoryId);
  return topic && category
    ? `/library/${category.domainId}/${category.slug}/${topic.slug}`
    : undefined;
}

export function getRelatedTopics(ids: string[]) {
  return topics.filter(
    (item) =>
      item.published &&
      ids.includes(item.id) &&
      getResources(item.id).length > 0
  );
}

export function getRelatedResources(resource: Resource) {
  return resources.filter(
    (item) => item.published && resource.relatedResourceIds.includes(item.id)
  );
}

export function youtubeUrl(videoId: string, seconds?: number) {
  const url = new URL("https://www.youtube.com/watch");
  url.searchParams.set("v", videoId);
  if (seconds !== undefined && Number.isFinite(seconds) && seconds >= 0) {
    url.searchParams.set("t", `${Math.floor(seconds)}s`);
  }
  return url.toString();
}

export function formatTimestamp(seconds: number) {
  const value = Math.max(0, Math.floor(seconds));
  const hours = Math.floor(value / 3600);
  const minutes = Math.floor((value % 3600) / 60);
  const tail = String(value % 60).padStart(2, "0");
  return hours
    ? `${hours}:${String(minutes).padStart(2, "0")}:${tail}`
    : `${minutes}:${tail}`;
}

export function publicLibraryPaths() {
  return [
    "/library",
    ...domains.map((item) => `/library/${item.id}`),
    ...categories
      .filter((item) => getTopics(item.id).length > 0)
      .map((item) => `/library/${item.domainId}/${item.slug}`),
    ...topics
      .filter((item) => item.published && getResources(item.id).length > 0)
      .map((item) => topicPath(item.id)!)
  ];
}
