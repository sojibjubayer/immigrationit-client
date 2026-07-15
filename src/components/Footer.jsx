import Image from "next/image";

const navigationLinks = [
  { label: "Services", href: "#services" },
  { label: "Our Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  {
    label: "Immigration CRM Development",
    href: "#services",
  },
  {
    label: "Lead Management System",
    href: "#services",
  },
  {
    label: "Immigration Website Development",
    href: "#services",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#334155] text-white">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#CBD5E1 1px, transparent 1px), linear-gradient(90deg, #CBD5E1 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#0F766E]/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#64748B]/20 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Main footer */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.75fr_1fr_1fr] lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="/"
              aria-label="ImmigrationIT home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white p-1.5">
                <Image
                  src="/logo.webp"
                  alt="ImmigrationIT logo"
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <p className="text-xl font-extrabold tracking-tight text-white">
                  Immigration
                  <span className="text-[#5EEAD4]">IT</span>
                </p>

                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#94A3B8]">
                  Digital solutions for consultancies
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#CBD5E1]">
              We develop immigration CRM systems, lead management platforms,
              and professional consultancy websites that help immigration
              businesses manage clients, applications, consultants,
              follow-ups, and daily operations.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["CRM Systems", "Lead Management", "Web Development"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-[#CBD5E1]"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#5EEAD4]">
              Navigation
            </h3>

            <ul className="mt-6 space-y-4">
              {navigationLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#CBD5E1] transition-all duration-300 hover:translate-x-1 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5EEAD4] focus-visible:ring-offset-4 focus-visible:ring-offset-[#334155]"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-[#0F766E]"
                    />

                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#5EEAD4]">
              Our Services
            </h3>

            <ul className="mt-6 space-y-4">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm font-medium leading-6 text-[#CBD5E1] transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5EEAD4] focus-visible:ring-offset-4 focus-visible:ring-offset-[#334155]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#5EEAD4]">
              Start a Project
            </h3>

            <p className="mt-6 text-sm leading-7 text-[#CBD5E1]">
              Tell us about your consultancy workflow and the digital system
              you need.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0F766E] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#334155] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#334155] sm:w-auto lg:w-full"
            >
              Request Free Demo

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>

            <p className="mt-4 text-xs leading-5 text-[#94A3B8]">
              Custom CRM, lead management, website development, and workflow
              automation.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 sm:mt-16 sm:pt-8">
          <div className="flex flex-col gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-xs leading-6 text-[#94A3B8]">
              © {currentYear} ImmigrationIT. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:justify-end">
              <a
                href="/privacy"
                className="text-xs font-medium text-[#94A3B8] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5EEAD4]"
              >
                Privacy Policy
              </a>

              <a
                href="/terms"
                className="text-xs font-medium text-[#94A3B8] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5EEAD4]"
              >
                Terms of Service
              </a>

              <a
                href="#"
                aria-label="Back to the top"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#CBD5E1] transition-all duration-300 hover:border-[#5EEAD4]/40 hover:bg-white/10 hover:text-white"
              >
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
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}