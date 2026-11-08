export type DomainId = "baseball" | "english";

export type LibraryDomain = {
  id: DomainId;
  title: string;
  label: string;
  description: string;
};

export type Category = {
  id: string;
  domainId: DomainId;
  slug: string;
  title: string;
  description: string;
  plannedThemes: string[];
};

export type Topic = {
  id: string;
  categoryId: string;
  slug: string;
  title: string;
  introduction: string;
  questions: string[];
  relatedTopicIds: string[];
  published: boolean;
};

export type Source = {
  id: string;
  domainId: DomainId;
  name: string;
  url: string;
  featured?: boolean;
};

export type Timestamp = {
  seconds: number;
  label: string;
  origin: "publisher" | "editor";
};

type ResourceBase = {
  id: string;
  title: string;
  topicIds: string[];
  tags: string[];
  relatedResourceIds: string[];
  published: boolean;
};

export type VideoResource = ResourceBase & {
  kind: "video";
  videoId: string;
  sourceId: string;
  presenters: string[];
  metadataCheckedAt: string;
  // Metadata checks do not establish that the video has been watched.
  review:
    | { status: "unwatched" }
    | {
        status: "reviewed";
        reviewedAt: string;
        reviewer: string;
        sourceNotes: { text: string; seconds: number }[];
        interpretation: string[];
        evidence: { label: string; url: string; note: string }[];
      };
  timestamps: Timestamp[];
};

export type ArticleResource = ResourceBase & {
  kind: "article";
  author: string;
  updatedAt: string;
  paragraphs: string[];
};

export type Resource = VideoResource | ArticleResource;
