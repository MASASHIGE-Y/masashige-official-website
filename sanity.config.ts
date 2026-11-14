"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schema";
import { copySections, initialCopy, copyDocumentId } from "./lib/sanity/copy.ts";
import { SeedTool } from "./sanity/seed-tool";

export default defineConfig({
  name: "wagaya",
  title: "WAGAYA. 編集室",
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "unconfigured",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("WAGAYA.")
          .items([
            ...copySections.map((section) =>
              S.listItem()
                .id(section.id)
                .title(section.title)
                .child(
                  S.document()
                    .schemaType("siteText")
                    .documentId(copyDocumentId(section.id))
                    .initialValueTemplate("siteText-section", {
                      section: section.id
                    })
                )
            ),
            S.divider(),
            S.listItem()
              .id("siteLinks")
              .title("YouTubeリンク")
              .child(
                S.document().schemaType("siteLinks").documentId("siteLinks")
              ),
            S.documentTypeListItem("libraryVideo").title("YouTube動画"),
            S.listItem()
              .id("libraryConfig")
              .title("動画データの切り替え")
              .child(
                S.document()
                  .schemaType("libraryConfig")
                  .documentId("libraryConfig")
              )
          ])
    })
  ],
  tools: (tools) => [
    ...tools,
    { name: "initial-data", title: "初期データ", component: SeedTool }
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) => [
      ...templates.filter(
        (template) =>
          !["siteText", "siteLinks", "libraryConfig"].includes(
            template.schemaType
          )
      ),
      {
        id: "siteText-section",
        title: "セクションの文言",
        schemaType: "siteText",
        parameters: [{ name: "section", type: "string" }],
        value: ({ section }: { section: string }) => initialCopy(section)
      }
    ]
  },
  document: {
    newDocumentOptions: (options) =>
      options.filter(
        (option) =>
          !option.templateId.startsWith("siteText") &&
          !["siteLinks", "libraryConfig"].includes(option.templateId)
      ),
    actions: (actions, context) =>
      ["siteText", "siteLinks", "libraryConfig"].includes(context.schemaType)
        ? actions.filter(
            (action) =>
              !["duplicate", "delete", "unpublish"].includes(
                action.action ?? ""
              )
          )
        : actions
  }
});
