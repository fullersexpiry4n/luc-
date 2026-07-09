"use client";

import { useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { toast } from "sonner";
import { CheckCircle2, Send } from "lucide-react";
import type { Dictionary } from "@/dictionaries";
import { submitContactRequest } from "@/app/actions/contact";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionHeader } from "@/components/site/section";
import { PillButton } from "@/components/site/pill-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const serviceValues = [
  "schoenreparaties",
  "sleutelservice",
  "graveerwerk",
  "stempels",
  "anders",
] as const;

function buildSchema(errors: Dictionary["form"]["errors"]) {
  return z.object({
    name: z.string().trim().min(2, errors.name).max(120, errors.name),
    email: z.string().trim().email(errors.email).max(200, errors.email),
    phone: z
      .string()
      .trim()
      .min(6, errors.phone)
      .max(30, errors.phone)
      .regex(/^[+\d][\d\s./-]{5,}$/, errors.phone),
    service: z.enum(serviceValues, { message: errors.service }),
    message: z.string().trim().min(10, errors.message).max(4000, errors.message),
  });
}

type FormValues = z.infer<ReturnType<typeof buildSchema>>;

export function ContactForm({ dict }: { dict: Dictionary }) {
  const [submitted, setSubmitted] = useState(false);
  const reduce = useReducedMotion();
  const schema = useMemo(() => buildSchema(dict.form.errors), [dict]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const result = await submitContactRequest(values);
      if (result.ok) {
        setSubmitted(true);
        toast.success(dict.form.success.title);
      } else {
        toast.error(dict.form.errorToast);
      }
    } catch {
      toast.error(dict.form.errorToast);
    }
  };

  const fieldError = (id: keyof FormValues) =>
    errors[id] ? (
      <p id={`${id}-error`} role="alert" className="text-sm text-destructive">
        {errors[id]?.message}
      </p>
    ) : null;

  return (
    <Section id="contact" tone="gray">
      <SectionHeader
        tag={dict.form.tag}
        title={dict.form.title}
        subtitle={dict.form.subtitle}
      />
      <Reveal className="mx-auto max-w-2xl">
        <div className="hairline soft-shadow rounded-3xl bg-white p-7 sm:p-10">
          <AnimatePresence mode="wait" initial={false}>
            {submitted ? (
              <motion.div
                key="success"
                initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 py-10 text-center"
                role="status"
              >
                <span className="brand-gradient flex size-16 items-center justify-center rounded-full text-white">
                  <CheckCircle2 className="size-8" aria-hidden="true" />
                </span>
                <h3 className="font-display text-2xl font-bold tracking-tight">
                  {dict.form.success.title}
                </h3>
                <p className="max-w-md text-muted-foreground">
                  {dict.form.success.message}
                </p>
                <PillButton
                  type="button"
                  variant="secondary"
                  className="mt-2"
                  onClick={() => {
                    reset();
                    setSubmitted(false);
                  }}
                >
                  {dict.form.success.again}
                </PillButton>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={false}
                exit={reduce ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex flex-col gap-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">{dict.form.name}</Label>
                    <Input
                      id="name"
                      autoComplete="name"
                      placeholder={dict.form.namePlaceholder}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className="h-11 rounded-xl"
                      {...register("name")}
                    />
                    {fieldError("name")}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">{dict.form.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder={dict.form.emailPlaceholder}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className="h-11 rounded-xl"
                      {...register("email")}
                    />
                    {fieldError("email")}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone">{dict.form.phone}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder={dict.form.phonePlaceholder}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className="h-11 rounded-xl"
                      {...register("phone")}
                    />
                    {fieldError("phone")}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="service">{dict.form.service}</Label>
                    <Controller
                      control={control}
                      name="service"
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger
                            id="service"
                            aria-invalid={!!errors.service}
                            aria-describedby={
                              errors.service ? "service-error" : undefined
                            }
                            className="h-11 w-full rounded-xl"
                          >
                            <SelectValue
                              placeholder={dict.form.servicePlaceholder}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {dict.form.serviceOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {fieldError("service")}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">{dict.form.message}</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder={dict.form.messagePlaceholder}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className="min-h-28 rounded-xl"
                    {...register("message")}
                  />
                  {fieldError("message")}
                </div>

                <div className="mt-2 flex flex-col items-start gap-4">
                  <PillButton
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? dict.form.submitting : dict.form.submit}
                    <Send className="size-4" aria-hidden="true" />
                  </PillButton>
                  <p className="text-xs text-muted-foreground">
                    {dict.form.privacy}
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </Reveal>
    </Section>
  );
}
