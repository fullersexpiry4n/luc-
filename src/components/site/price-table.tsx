import type { PriceRow } from "@/dictionaries/types";
import { cn } from "@/lib/utils";

export function PriceTable({
  rows,
  fromLabel,
  caption,
  className,
}: {
  rows: PriceRow[];
  fromLabel: string;
  caption: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "hairline soft-shadow overflow-x-auto rounded-3xl bg-white",
        className,
      )}
    >
      <table className="w-full min-w-[20rem] text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.name}
              className={cn(i > 0 && "border-t border-border/70")}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-foreground sm:px-8"
              >
                {row.name}
                {row.note ? (
                  <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                    {row.note}
                  </span>
                ) : null}
              </th>
              <td className="px-6 py-4 text-right whitespace-nowrap sm:px-8">
                <span className="text-xs text-muted-foreground">
                  {fromLabel}{" "}
                </span>
                <span className="font-display text-base font-bold tracking-tight">
                  €{row.price}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
