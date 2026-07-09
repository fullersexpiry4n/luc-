import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function Section({
  id,
  className,
  children,
  tone = "white",
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  tone?: "white" | "gray" | "dark";
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-20 sm:py-28",
        tone === "gray" && "bg-surface",
        tone === "dark" && "bg-foreground text-background",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({
  tag,
  title,
  subtitle,
  align = "center",
  dark = false,
}: {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-4 sm:mb-16",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
      )}
    >
      {tag ? (
        <Badge
          variant="outline"
          className={cn(
            "rounded-full border-border/80 px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider",
            dark && "border-white/20 text-white/70",
          )}
        >
          {tag}
        </Badge>
      ) : null}
      <h2
        className={cn(
          "font-display max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl",
          dark && "text-white",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "max-w-2xl text-lg text-balance text-muted-foreground",
            dark && "text-white/60",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
