import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

export const dynamic = "force-static";
export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
    return (
      <main className="container py-16">
        <h1 className="text-2xl font-semibold">編集室は未接続です</h1>
        <p className="mt-4">
          Sanityプロジェクトの接続が完了するとログインできます。
        </p>
      </main>
    );
  return <NextStudio config={config} />;
}
