"use client";

import { useState } from "react";

const services = [
  "Immigration CRM Development",
  "Lead Management System",
  "Immigration Website Development",
  "Combined Digital Solution",
  "Other Requirement",
];

const initialForm = {
  name: "",
  company: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappNumber = "97471294020";

    const whatsappMessage = [
      "Hello ImmigrationIT,",
      "",
      "I would like to discuss a project.",
      "",
      `Name: ${formData.name}`,
      `Company: ${formData.company || "Not provided"}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email || "Not provided"}`,
      `Service: ${formData.service}`,
      "",
      "Project details:",
      formData.message,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    setSubmitted(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-[#F7F9FC] py-16 sm:py-20 lg:py-24"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(#E7EDF3 1px, transparent 1px), linear-gradient(90deg, #E7EDF3 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Decorative glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-20 h-80 w-80 rounded-full bg-[#0F766E]/5 blur-3xl sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-0 h-80 w-80 rounded-full bg-[#475569]/5 blur-3xl sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-14">
          {/* Contact information */}
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#0F766E]/50 sm:w-10" />

              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#0F766E] sm:text-xs sm:tracking-[0.3em]">
                Get in Touch
              </p>
            </div>

            <h2
              id="contact-heading"
              className="mt-5 max-w-xl wrap-break-word text-[2rem] font-extrabold leading-tight tracking-tight text-[#1E293B] sm:text-4xl lg:text-5xl"
            >
              Let&apos;s build the right system for
              <span className="block text-[#0F766E]">
                your consultancy
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8">
              Tell us about your workflow, team, current challenges, and the
              solution you need. We will review your requirements and recommend
              the right CRM, lead management system, website, or combined
              platform.
            </p>

            {/* Contact methods */}
            <div className="mt-8 space-y-4">
              <a
                href="https://wa.me/97471294020"
                target="_blank"
                rel="noreferrer"
                className="group flex min-w-0 items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-[0_8px_25px_rgba(71,85,105,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#334155]/40 hover:shadow-[0_14px_35px_rgba(71,85,105,0.10)] sm:p-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E6FFFA] text-[#0F766E] transition-colors duration-300 group-hover:bg-[#F1F5F9] group-hover:text-[#334155]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.6 9.6 0 0 1-4.2-1L3 20l1.2-4.1A8.1 8.1 0 0 1 3 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5Z" />
                    <path d="M8.5 8.5c.5 3 2 4.5 5 5" />
                  </svg>
                </span>

                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#94A3B8]">
                    WhatsApp
                  </p>

                  <p className="mt-1 break-all text-sm font-bold text-[#334155] sm:text-base">
                    +974 7129 4020
                  </p>

                  <p className="mt-1 text-xs text-[#64748B]">
                    Message us about your project
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="ml-auto shrink-0 text-[#94A3B8] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#334155]"
                >
                  →
                </span>
              </a>

              <a
                href="mailto:contact@immigrationit.com"
                className="group flex min-w-0 items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-[0_8px_25px_rgba(71,85,105,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#334155]/40 hover:shadow-[0_14px_35px_rgba(71,85,105,0.10)] sm:p-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F1F5F9] text-[#475569] transition-colors duration-300 group-hover:bg-[#E6FFFA] group-hover:text-[#0F766E]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </span>

                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#94A3B8]">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm font-bold text-[#334155] sm:text-base">
                    contact@immigrationit.com
                  </p>

                  <p className="mt-1 text-xs text-[#64748B]">
                    Send your detailed requirements
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="ml-auto shrink-0 text-[#94A3B8] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#334155]"
                >
                  →
                </span>
              </a>
            </div>

            {/* Consultation information */}
            <div className="mt-6 rounded-2xl border border-[#CCFBF1] bg-[#F0FDFA]/80 p-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#0F766E] shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </span>

                <div>
                  <p className="text-sm font-bold text-[#334155]">
                    Free initial consultation
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#64748B]">
                    We will discuss your requirements, recommended modules,
                    implementation approach, estimated timeline, and starting
                    investment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_20px_55px_rgba(71,85,105,0.10)] sm:p-8 lg:p-10"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-[#0F766E]" />

            <div className="flex flex-col gap-3 border-b border-[#E2E8F0] pb-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0F766E]">
                  Project Enquiry
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#334155] sm:text-2xl">
                  Tell us what you need
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#64748B]">
                  Complete the form and continue the conversation on WhatsApp.
                </p>
              </div>

              <span className="w-fit rounded-full border border-[#CCFBF1] bg-[#F0FDFA] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0F766E]">
                No obligation
              </span>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2 sm:gap-6">
              <FormField
                id="name"
                label="Full Name"
                required
              >
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                  placeholder="Your full name"
                  className="contact-input"
                />
              </FormField>

              <FormField id="company" label="Company">
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  autoComplete="organization"
                  placeholder="Consultancy name"
                  className="contact-input"
                />
              </FormField>

              <FormField
                id="phone"
                label="Phone / WhatsApp"
                required
              >
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  placeholder="+974 0000 0000"
                  className="contact-input"
                />
              </FormField>

              <FormField id="email" label="Email Address">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="name@company.com"
                  className="contact-input"
                />
              </FormField>
            </div>

            <div className="mt-5 sm:mt-6">
              <FormField
                id="service"
                label="Service Required"
                required
              >
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="contact-input appearance-none"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </FormField>
            </div>

            <div className="mt-5 sm:mt-6">
              <FormField
                id="message"
                label="Project Requirements"
                required
              >
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  placeholder="Tell us about your current workflow, team size, required modules, website pages, or any challenges you want to solve..."
                  className="contact-input min-h-36 resize-y"
                />
              </FormField>
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#334155] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(71,85,105,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0F766E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#334155] focus-visible:ring-offset-4"
            >
              Send Enquiry on WhatsApp

              <span aria-hidden="true">→</span>
            </button>

            {submitted && (
              <p
                role="status"
                className="mt-4 rounded-xl border border-[#CCFBF1] bg-[#F0FDFA] px-4 py-3 text-center text-xs font-semibold leading-5 text-[#0F766E]"
              >
                WhatsApp has been opened with your enquiry. Review the message
                and press send.
              </p>
            )}

            <p className="mt-4 text-center text-[11px] leading-5 text-[#94A3B8]">
              Your details are used only to respond to your project enquiry.
            </p>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid #cbd5e1;
          background: #f8fafc;
          padding: 0.875rem 1rem;
          font-size: 0.875rem;
          line-height: 1.5rem;
          color: #334155;
          outline: none;
          transition:
            border-color 200ms ease,
            box-shadow 200ms ease,
            background-color 200ms ease;
        }

        .contact-input::placeholder {
          color: #94a3b8;
        }

        .contact-input:hover {
          border-color: #94a3b8;
        }

        .contact-input:focus {
          border-color: #0f766e;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.1);
        }
      `}</style>
    </section>
  );
}

function FormField({ id, label, required = false, children }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#475569]"
      >
        {label}

        {required && (
          <span className="ml-1 text-[#0F766E]" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {children}
    </div>
  );
}