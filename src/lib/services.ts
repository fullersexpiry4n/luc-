import { Footprints, KeyRound, PenTool, Stamp, type LucideIcon } from "lucide-react";

export const serviceSlugs = [
  "schoenreparaties",
  "sleutelservice",
  "graveerwerk",
  "stempels",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export function isServiceSlug(value: string): value is ServiceSlug {
  return (serviceSlugs as readonly string[]).includes(value);
}

export const serviceIcons: Record<ServiceSlug, LucideIcon> = {
  schoenreparaties: Footprints,
  sleutelservice: KeyRound,
  graveerwerk: PenTool,
  stempels: Stamp,
};
