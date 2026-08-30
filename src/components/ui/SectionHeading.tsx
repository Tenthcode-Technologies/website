type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  inverted?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverted = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow ? (
        <p
          className={`mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] ${
            inverted ? "text-blue-300" : "text-tech-blue"
          }`}
        >
          <span className="h-px w-7 bg-current" />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-4xl font-bold leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl ${
          inverted ? "text-white" : "text-deep-navy"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${
            inverted ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
