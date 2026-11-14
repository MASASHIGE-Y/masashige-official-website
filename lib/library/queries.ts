import { categories, domains, sources, topics } from "./catalog";
import { resources } from "./resources";
import type { DomainId, Resource } from "./types";
import { getPublicContent } from "@/lib/sanity/public-content";

export function createLibraryQueries(resourceList: Resource[] = resources) {
  const getDomain = (slug: string) => domains.find((item) => item.id === slug);
  const getCategories = (domainId: DomainId) =>
    categories.filter((item) => item.domainId === domainId);
  const getCategory = (domainId: string, slug: string) =>
    categories.find((item) => item.domainId === domainId && item.slug === slug);
  const getTopics = (categoryId: string) =>
    topics.filter(
      (item) =>
        item.categoryId === categoryId &&
        item.published &&
        resourceList.some(
          (resource) =>
            resource.published && resource.topicIds.includes(item.id)
        )
    );
  const getResources = (topicId: string) =>
    resourceList.filter(
      (item) => item.published && item.topicIds.includes(topicId)
    );
  const getSource = (id: string) => sources.find((item) => item.id === id);
  const getSources = (domainId: DomainId) =>
    sources.filter((item) => item.domainId === domainId);
  const getTopic = (categoryId: string, slug: string) =>
    getTopics(categoryId).find((item) => item.slug === slug);

  function topicPath(topicId: string) {
    const topic = topics.find(
      (item) =>
        item.id === topicId &&
        item.published &&
        getResources(item.id).length > 0
    );
    const category =
      topic && categories.find((item) => item.id === topic.categoryId);
    return topic && category
      ? `/library/${category.domainId}/${category.slug}/${topic.slug}`
      : undefined;
  }

  function getRelatedTopics(ids: string[]) {
    return topics.filter(
      (item) =>
        item.published &&
        ids.includes(item.id) &&
        getResources(item.id).length > 0
    );
  }

  function getRelatedResources(resource: Resource) {
    return resourceList.filter(
      (item) => item.published && resource.relatedResourceIds.includes(item.id)
    );
  }

  function youtubeUrl(videoId: string, seconds?: number) {
    const url = new URL("https://www.youtube.com/watch");
    url.searchParams.set("v", videoId);
    if (seconds !== undefined && Number.isFinite(seconds) && seconds >= 0) {
      url.searchParams.set("t", `${Math.floor(seconds)}s`);
    }
    return url.toString();
  }

  function formatTimestamp(seconds: number) {
    const value = Math.max(0, Math.floor(seconds));
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const tail = String(value % 60).padStart(2, "0");
    return hours
      ? `${hours}:${String(minutes).padStart(2, "0")}:${tail}`
      : `${minutes}:${tail}`;
  }

  function publicLibraryPaths() {
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

  return {
    getDomain,
    getCategories,
    getCategory,
    getTopics,
    getResources,
    getSource,
    getSources,
    getTopic,
    topicPath,
    getRelatedTopics,
    getRelatedResources,
    youtubeUrl,
    formatTimestamp,
    publicLibraryPaths
  };
}

export const {
  getDomain,
  getCategories,
  getCategory,
  getTopics,
  getResources,
  getSource,
  getSources,
  getTopic,
  topicPath,
  getRelatedTopics,
  getRelatedResources,
  youtubeUrl,
  formatTimestamp,
  publicLibraryPaths
} = createLibraryQueries();

export async function loadLibrary() {
  return createLibraryQueries((await getPublicContent()).resources);
}
