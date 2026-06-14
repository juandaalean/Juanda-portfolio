"use client";

import { useActionState, useEffect, useRef } from "react";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";
import {
  type ContactFormState,
  submitContact,
} from "../actions/contact";

const initialContactState: ContactFormState = { status: "idle" };

export type ContactFormCopy = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  subjectLabel: string;
  subjectPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitButton: string;
  submittingButton: string;
  sending: string;
};

type ContactFormProps = {
  copy: ContactFormCopy;
  locale: string;
};

export function ContactForm({ copy, locale }: ContactFormProps) {
  const [state, formAction, pending] = useActionState<ContactFormState, FormData>(
    submitContact,
    initialContactState
  );

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  const errors = state.errors;
  const values = state.values;

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
    >
      <input type="hidden" name="locale" value={locale} />
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-name"
          className="font-mono text-xs uppercase tracking-widest text-[color:var(--accent)]"
        >
          {copy.nameLabel}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          maxLength={100}
          defaultValue={values?.name}
          placeholder={copy.namePlaceholder}
          aria-invalid={Boolean(errors?.name)}
          aria-describedby={errors?.name ? "contact-name-error" : undefined}
          disabled={pending}
          className="theme-surface rounded-xl border border-[color:var(--border-strong)] bg-[color:var(--surface-2)] px-3.5 py-2.5 text-sm text-[color:var(--foreground)] outline-none transition focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)]/20 disabled:opacity-60"
        />
        {errors?.name ? (
          <p
            id="contact-name-error"
            className="text-xs font-medium text-[color:var(--accent-2)]"
          >
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-email"
          className="font-mono text-xs uppercase tracking-widest text-[color:var(--accent)]"
        >
          {copy.emailLabel}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          maxLength={200}
          defaultValue={values?.email}
          placeholder={copy.emailPlaceholder}
          aria-invalid={Boolean(errors?.email)}
          aria-describedby={errors?.email ? "contact-email-error" : undefined}
          disabled={pending}
          className="theme-surface rounded-xl border border-[color:var(--border-strong)] bg-[color:var(--surface-2)] px-3.5 py-2.5 text-sm text-[color:var(--foreground)] outline-none transition focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)]/20 disabled:opacity-60"
        />
        {errors?.email ? (
          <p
            id="contact-email-error"
            className="text-xs font-medium text-[color:var(--accent-2)]"
          >
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label
          htmlFor="contact-subject"
          className="font-mono text-xs uppercase tracking-widest text-[color:var(--accent)]"
        >
          {copy.subjectLabel}
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          maxLength={150}
          defaultValue={values?.subject}
          placeholder={copy.subjectPlaceholder}
          aria-invalid={Boolean(errors?.subject)}
          aria-describedby={errors?.subject ? "contact-subject-error" : undefined}
          disabled={pending}
          className="theme-surface rounded-xl border border-[color:var(--border-strong)] bg-[color:var(--surface-2)] px-3.5 py-2.5 text-sm text-[color:var(--foreground)] outline-none transition focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)]/20 disabled:opacity-60"
        />
        {errors?.subject ? (
          <p
            id="contact-subject-error"
            className="text-xs font-medium text-[color:var(--accent-2)]"
          >
            {errors.subject}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label
          htmlFor="contact-message"
          className="font-mono text-xs uppercase tracking-widest text-[color:var(--accent)]"
        >
          {copy.messageLabel}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          defaultValue={values?.message}
          placeholder={copy.messagePlaceholder}
          aria-invalid={Boolean(errors?.message)}
          aria-describedby={errors?.message ? "contact-message-error" : undefined}
          disabled={pending}
          className="theme-surface resize-y rounded-xl border border-[color:var(--border-strong)] bg-[color:var(--surface-2)] px-3.5 py-2.5 text-sm text-[color:var(--foreground)] outline-none transition focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)]/20 disabled:opacity-60"
        />
        {errors?.message ? (
          <p
            id="contact-message-error"
            className="text-xs font-medium text-[color:var(--accent-2)]"
          >
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--accent)] px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {pending ? (
            <>
              <span
                className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                aria-hidden="true"
              />
              {copy.submittingButton}
            </>
          ) : (
            <>
              <FaPaperPlane size={16} aria-hidden="true" />
              {copy.submitButton}
            </>
          )}
        </button>
      </div>

      {state.status !== "idle" && state.message ? (
        <div
          role={state.status === "error" ? "alert" : "status"}
          aria-live="polite"
          className={[
            "sm:col-span-2 rounded-xl border px-4 py-3 text-sm",
            state.status === "success"
              ? "border-[color:var(--accent)]/40 bg-[color:var(--accent)]/10 text-[color:var(--foreground)]"
              : "border-[color:var(--accent-2)]/40 bg-[color:var(--accent-2)]/10 text-[color:var(--foreground)]",
          ].join(" ")}
        >
          <p className="flex items-center gap-2">
            <FaEnvelope size={14} aria-hidden="true" />
            {state.message}
          </p>
        </div>
      ) : null}

      <span className="sr-only" aria-live="polite">
        {pending ? copy.sending : ""}
      </span>
    </form>
  );
}
