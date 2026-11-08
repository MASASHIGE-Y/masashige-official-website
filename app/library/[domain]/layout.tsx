import { notFound } from "next/navigation";
import { getDomain } from "@/lib/library/queries";

export default async function DomainLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ domain: string }>;
}) {
  const { domain: slug } = await params;
  const domain = getDomain(slug);
  if (!domain) notFound();
  return (
    <div className={`library-domain library-domain-${domain.id}`}>
      {children}
    </div>
  );
}
