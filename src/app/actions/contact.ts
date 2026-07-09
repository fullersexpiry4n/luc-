"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z
    .string()
    .trim()
    .min(6)
    .max(30)
    .regex(/^[+\d][\d\s./-]{5,}$/),
  service: z.enum([
    "schoenreparaties",
    "sleutelservice",
    "graveerwerk",
    "stempels",
    "anders",
  ]),
  message: z.string().trim().min(10).max(4000),
});

export type ContactPayload = z.infer<typeof contactSchema>;

export interface ContactResult {
  ok: boolean;
}

/**
 * Handles the appointment/quote request.
 *
 * TODO: hook up real delivery — e.g. send an email via Resend/Nodemailer to
 * info@slotenmakerluc.be, or store the request in a database/CRM. For now the
 * submission is validated server-side and success is simulated.
 */
export async function submitContactRequest(
  payload: ContactPayload,
): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return { ok: false };
  }

  // Simulate processing latency so the pending UI is visible.
  await new Promise((resolve) => setTimeout(resolve, 600));

  console.info("[contact] new request", {
    service: parsed.data.service,
    email: parsed.data.email,
  });

  return { ok: true };
}
