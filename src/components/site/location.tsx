import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import type { Dictionary } from "@/dictionaries";
import { contact, osmEmbedSrc, osmLinkHref } from "@/lib/contact";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionHeader } from "@/components/site/section";
import { cn } from "@/lib/utils";

export function Location({ dict }: { dict: Dictionary }) {
  return (
    <Section id="locatie">
      <SectionHeader
        tag={dict.location.tag}
        title={dict.location.title}
        subtitle={dict.location.subtitle}
      />
      <Reveal className="grid gap-5 lg:grid-cols-5" stagger={0.15}>
        {/* Map */}
        <div className="hairline soft-shadow overflow-hidden rounded-3xl bg-surface lg:col-span-3">
          <iframe
            src={osmEmbedSrc}
            title={dict.location.mapTitle}
            className="h-80 w-full border-0 lg:h-full lg:min-h-[26rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Address + hours card */}
        <div className="flex flex-col gap-5 lg:col-span-2">
          <div className="hairline soft-shadow rounded-3xl bg-white p-7">
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-muted-foreground uppercase">
              {dict.location.addressTitle}
            </h3>
            <address className="flex flex-col gap-3 text-base not-italic">
              <span className="flex items-start gap-3">
                <MapPin
                  className="mt-1 size-4.5 shrink-0 text-brand"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold">{contact.name}</strong>
                  <br />
                  {contact.street}
                  <br />
                  {contact.postalCode} {contact.city}, {contact.country}
                </span>
              </span>
              <a
                href={contact.phoneHref}
                className="flex items-center gap-3 rounded transition-colors outline-none hover:text-brand focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <Phone className="size-4.5 shrink-0 text-brand" aria-hidden="true" />
                {contact.phone}
              </a>
              <a
                href={contact.emailHref}
                className="flex items-center gap-3 rounded transition-colors outline-none hover:text-brand focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <Mail className="size-4.5 shrink-0 text-brand" aria-hidden="true" />
                {contact.email}
              </a>
              <a
                href={osmLinkHref}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-1 inline-flex items-center gap-2 rounded text-sm font-semibold text-brand outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {dict.location.directions}
                <ExternalLink className="size-3.5" aria-hidden="true" />
              </a>
            </address>
          </div>

          <div className="hairline soft-shadow flex-1 rounded-3xl bg-white p-7">
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-muted-foreground uppercase">
              {dict.location.hoursTitle}
            </h3>
            <table className="w-full text-sm">
              <caption className="sr-only">{dict.location.hoursTitle}</caption>
              <tbody>
                {dict.location.days.map((day, i) => {
                  const closed = dict.location.hours[i] === dict.location.closedLabel;
                  return (
                    <tr key={day} className={cn(i > 0 && "border-t border-border/60")}>
                      <th scope="row" className="py-2.5 text-left font-medium">
                        {day}
                      </th>
                      <td
                        className={cn(
                          "py-2.5 text-right tabular-nums",
                          closed ? "text-muted-foreground" : "font-semibold",
                        )}
                      >
                        {dict.location.hours[i]}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
