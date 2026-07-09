"use client";

import Link from "next/link";
import * as React from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight whitespace-nowrap transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-foreground text-background hover:brand-gradient hover:text-white hover:brand-glow",
  secondary:
    "bg-transparent text-foreground hairline hover:bg-muted",
  ghost: "bg-transparent text-foreground hover:bg-muted",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

const MotionLink = motion.create(Link);

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

export function PillLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & { href: string } & Omit<
    HTMLMotionProps<"a">,
    "children" | "ref"
  >) {
  const reduce = useReducedMotion();
  return (
    <MotionLink
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      whileHover={reduce ? undefined : { scale: 1.035, y: -1 }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 420, damping: 26 }}
      {...props}
    >
      {children}
    </MotionLink>
  );
}

export function PillButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps &
  Omit<HTMLMotionProps<"button">, "children" | "ref">) {
  const reduce = useReducedMotion();
  return (
    <motion.button
      className={cn(base, variants[variant], sizes[size], className)}
      whileHover={reduce ? undefined : { scale: 1.035, y: -1 }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 420, damping: 26 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
