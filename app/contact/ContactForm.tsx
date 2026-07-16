"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  return (
    <form className="grid md:grid-cols-2 gap-md" onSubmit={handleSubmit}>
      <div className="space-y-base">
        <label className="font-label-md text-label-md text-on-surface-variant">
          FULL NAME
        </label>
        <input
          className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-sm font-body-md outline-none"
          placeholder="John Doe"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="space-y-base">
        <label className="font-label-md text-label-md text-on-surface-variant">
          WORK EMAIL
        </label>
        <input
          className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-sm font-body-md outline-none"
          placeholder="john@enterprise.com"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="space-y-base md:col-span-2">
        <label className="font-label-md text-label-md text-on-surface-variant">
          MESSAGE
        </label>
        <textarea
          className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-sm font-body-md resize-none outline-none"
          placeholder="Briefly describe your requirements..."
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="md:col-span-2 pt-sm flex items-center gap-md">
        <button
          className="shine bg-primary text-on-primary px-xl py-sm font-label-md text-label-md rounded-lg hover:scale-[1.02] transition-transform flex items-center gap-xs disabled:opacity-60 disabled:pointer-events-none"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Submit Inquiry"}
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </button>
        {status === "success" && (
          <span className="font-label-md text-label-md text-primary">
            Message sent — we&apos;ll be in touch soon.
          </span>
        )}
        {status === "error" && (
          <span className="font-label-md text-label-md text-red-500">
            {errorMessage}
          </span>
        )}
      </div>
    </form>
  );
}
