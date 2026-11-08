export function LibraryHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl pb-10 md:pb-14">
      <p className="section-eyebrow">{eyebrow}</p>
      <h1 className="break-words text-3xl font-semibold leading-snug md:text-5xl md:leading-snug">
        {title}
      </h1>
      <p className="mt-5 text-base leading-8 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
