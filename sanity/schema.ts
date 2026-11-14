import { defineArrayMember, defineField, defineType } from "sanity";
import { copyFields, copySections } from "../lib/sanity/copy.ts";
import { youtubeId } from "../lib/sanity/validation.ts";
import { youtubeChannel, defaultLinks } from "../lib/sanity/links.ts";
import { sources, topics, categories } from "../lib/library/catalog";

export const schemaTypes = [
  defineType({
    name: "siteLinks",
    title: "YouTubeリンク",
    type: "document",
    initialValue: defaultLinks,
    fields: [
      defineField({
        name: "youtubeChannelUrl",
        title: "ShigeのYouTubeチャンネル",
        type: "url",
        validation: (rule) =>
          rule
            .required()
            .custom((value) =>
              !value || youtubeChannel(value)
                ? true
                : "HTTPSのYouTubeチャンネルURLを入力してください"
            )
      }),
      defineField({
        name: "homeVideoUrl",
        title: "ケニアの家の紹介動画",
        type: "url",
        validation: (rule) =>
          rule
            .required()
            .custom((value) =>
              !value || youtubeId(value)
                ? true
                : "HTTPSのYouTube動画URLを入力してください"
            )
      })
    ]
  }),
  defineType({
    name: "siteText",
    title: "サイトの文言",
    type: "document",
    fields: [
      defineField({
        name: "section",
        title: "セクション",
        type: "string",
        readOnly: true,
        options: {
          list: copySections.map((section) => ({
            title: section.title,
            value: section.id
          }))
        },
        validation: (rule) => rule.required()
      }),
      defineField({
        name: "entries",
        title: "日本語・英語",
        type: "array",
        of: [
          defineArrayMember({
            type: "object",
            name: "copyEntry",
            fields: [
              defineField({
                name: "key",
                title: "編集する文言",
                type: "string",
                options: {
                  list: copyFields.map((field) => ({
                    title: `${copySections.find((section) => section.id === field.section)?.title} / ${field.title}`,
                    value: field.key
                  }))
                },
                validation: (rule) => rule.required()
              }),
              defineField({
                name: "ja",
                title: "日本語",
                type: "text",
                rows: 3,
                validation: (rule) => rule.required().max(10000)
              }),
              defineField({
                name: "en",
                title: "English",
                type: "text",
                rows: 3,
                validation: (rule) => rule.required().max(10000)
              })
            ],
            preview: { select: { title: "ja", subtitle: "en" } }
          })
        ],
        validation: (rule) =>
          rule.custom((entries, context) => {
            if (!Array.isArray(entries)) return "文言が必要です";
            const section = context.document?.section;
            const keys = entries.map(
              (entry) => (entry as { key?: string }).key
            );
            return (
              (new Set(keys).size === keys.length &&
                keys.every((key) =>
                  copyFields.some(
                    (field) => field.key === key && field.section === section
                  )
                )) ||
              "このセクションの文言を重複せず選んでください"
            );
          })
      })
    ],
    preview: {
      select: { section: "section" },
      prepare: ({ section }) => ({
        title:
          copySections.find((item) => item.id === section)?.title ??
          "サイトの文言"
      })
    }
  }),
  defineType({
    name: "libraryVideo",
    title: "YouTube動画",
    type: "document",
    fields: [
      defineField({
        name: "title",
        title: "動画タイトル",
        type: "string",
        validation: (rule) => rule.required().max(500)
      }),
      defineField({
        name: "url",
        title: "YouTube URL",
        type: "url",
        validation: (rule) =>
          rule
            .required()
            .custom((value) =>
              !value || youtubeId(value)
                ? true
                : "HTTPSのYouTube動画URLを入力してください"
            )
      }),
      defineField({
        name: "sourceId",
        title: "発信元",
        type: "string",
        options: {
          list: sources.map((source) => ({
            title: source.name,
            value: source.id
          }))
        },
        validation: (rule) => rule.required()
      }),
      defineField({
        name: "topicIds",
        title: "テーマ",
        type: "array",
        of: [{ type: "string" }],
        options: {
          list: topics.map((topic) => ({
            title: `${categories.find((item) => item.id === topic.categoryId)?.title} / ${topic.title}`,
            value: topic.id
          }))
        },
        validation: (rule) => rule.required().min(1).unique()
      }),
      defineField({
        name: "metadataCheckedAt",
        title: "タイトル・発信元の確認日",
        type: "date",
        initialValue: () => new Date().toISOString().slice(0, 10),
        validation: (rule) => rule.required()
      })
    ],
    preview: { select: { title: "title", subtitle: "url" } }
  }),
  defineType({
    name: "libraryConfig",
    title: "動画データの切り替え",
    type: "document",
    fields: [
      defineField({
        name: "enabled",
        title: "CMSの動画を表示",
        type: "boolean",
        initialValue: true
      })
    ]
  })
];
