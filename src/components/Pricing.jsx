const plans = [
{
  name: "Immigration CRM Development",
  price: "QAR 18,000",
  badge: "Complete Consultancy System",
  description:
    "A complete immigration CRM and visa management platform built to manage clients, visitors, consultants, applications, visa services, follow-ups, tasks, attendance, and business performance from one centralized dashboard.",
  features: [
    "Client and visitor management",
    "Visa application and service management",
    "Lead, follow-up, and To-Do management",
    "Consultant performance and revenue reports",
    "Work, visit, student, and business visa modules",
    "Schengen and non-Schengen visa management",
    "Attendance and staff activity tracking",
    "Role-based admin and consultant access",
  ],
  note:
    "Starting price depends on users, visa modules, client portals, automation, reporting, integrations, and custom workflow requirements.",
  highlighted: true,
},
  {
    name: "Lead Management System",
    price: "QAR 9,000",
    badge: "For Sales Teams",
    description:
      "A centralized lead and visitor management system that helps immigration consultancies distribute enquiries, organize follow-ups, monitor consultants, and improve conversion performance.",
    features: [
      "Lead and visitor management",
      "Smart assignment and reassignment",
      "Follow-up reminders and overdue tracking",
      "Lead status, notes, and acknowledgement",
      "Consultant performance reports",
      "Duplicate lead detection",
      "Conversion tracking and forecasting",
    ],
    note:
      "Suitable for consultancies managing multiple consultants, campaigns, and daily enquiries.",
  },
  {
    name: "Immigration Website Development",
    price: "QAR 3,500",
    badge: "Professional Online Presence",
    description:
      "A responsive, SEO-friendly immigration consultancy website designed to build trust, explain your visa services, and convert visitors into qualified enquiries.",
    features: [
      "Responsive mobile-first design",
      "Immigration service and visa pages",
      "SEO-friendly website structure",
      "WhatsApp and click-to-call integration",
      "Lead enquiry and contact forms",
      "Fast-loading page development",
      "Analytics and conversion tracking",
    ],
    note:
      "Final price depends on page count, content, language, integrations, and custom functionality.",
  },
];

function CheckIcon({ highlighted }) {
  return (
    <span
      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
        highlighted
          ? "bg-white/10 text-[#5EEAD4]"
          : "bg-[#E6FFFA] text-[#0F766E] group-hover:bg-[#F1F5F9] group-hover:text-[#334155]"
      }`}
    >
      <svg
        viewBox="0 0 12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-3 w-3"
        aria-hidden="true"
      >
        <path d="m2 6 2.5 2.5L10 3" />
      </svg>
    </span>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
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
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-7 bg-[#0F766E]/40 sm:w-10" />

            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#0F766E] sm:text-xs sm:tracking-[0.3em]">
              Service Pricing
            </p>

            <span className="h-px w-7 bg-[#0F766E]/40 sm:w-10" />
          </div>

          <h2 className="mt-5 wrap-break-word text-[2rem] font-extrabold leading-tight tracking-tight text-[#1E293B] sm:text-4xl lg:text-5xl">
            Choose the right solution for
            <span className="block text-[#0F766E]">
              your immigration business
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8">
            Transparent starting prices for our three core services. Every
            project can be customized according to your consultancy, team,
            workflow, and growth plans.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-10 grid items-stretch gap-6 sm:mt-14 sm:gap-8 lg:mt-16 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const number = String(index + 1).padStart(2, "0");

            return (
              <article
                key={plan.name}
                className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 ease-out sm:p-8 lg:hover:-translate-y-1.5 ${
                  plan.highlighted
                    ? "border-[#334155] bg-[#334155] shadow-[0_20px_50px_rgba(71,85,105,0.18)]"
                    : "border-[#E2E8F0] bg-white shadow-[0_10px_35px_rgba(71,85,105,0.08)] lg:hover:border-[#334155]/40 lg:hover:shadow-[0_20px_45px_rgba(71,85,105,0.12)]"
                }`}
              >
                {/* Top accent */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 transition-colors duration-300 ${
                    plan.highlighted
                      ? "bg-[#14B8A6]"
                      : "bg-[#0F766E] group-hover:bg-[#334155]"
                  }`}
                />

                {/* Badge and number */}
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`inline-flex min-h-7 max-w-[75%] items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase leading-5 tracking-[0.12em] ${
                      plan.highlighted
                        ? "bg-white/10 text-[#CCFBF1]"
                        : "border border-[#CCFBF1] bg-[#F0FDFA] text-[#0F766E]"
                    }`}
                  >
                    {plan.badge}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-3xl font-extrabold transition-colors duration-300 sm:text-4xl ${
                      plan.highlighted
                        ? "text-white/10"
                        : "text-[#E8EEF3] group-hover:text-[#CBD5E1]"
                    }`}
                  >
                    {number}
                  </span>
                </div>

                {/* Service name */}
                <h3
                  className={`mt-7 wrap-break-word text-xl font-bold leading-snug sm:text-2xl ${
                    plan.highlighted ? "text-white" : "text-[#1E293B]"
                  }`}
                >
                  {plan.name}
                </h3>

                {/* Description */}
                <p
                  className={`mt-4 text-sm leading-7 sm:text-[15px] ${
                    plan.highlighted ? "text-[#CBD5E1]" : "text-[#64748B]"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div
                  className={`mt-7 border-y py-6 ${
                    plan.highlighted
                      ? "border-white/10"
                      : "border-[#E2E8F0]"
                  }`}
                >
                  <p
                    className={`text-xs font-bold uppercase tracking-[0.16em] ${
                      plan.highlighted
                        ? "text-[#94A3B8]"
                        : "text-[#64748B]"
                    }`}
                  >
                    Starting from
                  </p>

                  <p
                    className={`mt-2 wrap-break-word text-3xl font-extrabold tracking-tight sm:text-4xl ${
                      plan.highlighted ? "text-white" : "text-[#334155]"
                    }`}
                  >
                    {plan.price}
                  </p>

                  <p
                    className={`mt-2 text-xs leading-5 ${
                      plan.highlighted
                        ? "text-[#94A3B8]"
                        : "text-[#64748B]"
                    }`}
                  >
                    One-time project investment
                  </p>
                </div>

                {/* Features */}
                <ul className="mt-7 grow space-y-3.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-3 text-sm font-medium leading-6 ${
                        plan.highlighted
                          ? "text-[#E2E8F0]"
                          : "text-[#475569]"
                      }`}
                    >
                      <CheckIcon highlighted={plan.highlighted} />

                      <span className="min-w-0 wrap-break-word">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  aria-label={`Request a quote for ${plan.name}`}
                  className={`mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-center text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 ${
                    plan.highlighted
                      ? "bg-[#0F766E] text-white hover:bg-white hover:text-[#334155] focus-visible:ring-white focus-visible:ring-offset-[#334155]"
                      : "border border-[#CBD5E1] bg-white text-[#334155] hover:border-[#334155] hover:bg-[#334155] hover:text-white focus-visible:ring-[#334155]"
                  }`}
                >
                  Request a Quote

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>

                {/* Note */}
                <p
                  className={`mt-5 text-xs leading-5 ${
                    plan.highlighted
                      ? "text-[#94A3B8]"
                      : "text-[#64748B]"
                  }`}
                >
                  {plan.note}
                </p>
              </article>
            );
          })}
        </div>

        {/* Pricing disclaimer */}
        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-[#64748B]">
          Prices are starting estimates. Final quotations depend on project
          scope, number of users, pages, modules, integrations, automation,
          content, hosting, and ongoing support requirements.
        </p>

        {/* Custom solution */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_10px_35px_rgba(71,85,105,0.06)] sm:p-8 lg:mt-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0F766E]">
                Combined Solutions
              </p>

              <h3 className="mt-3 text-xl font-bold text-[#334155] sm:text-2xl">
                Need more than one service?
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#64748B] sm:text-base">
                Combine your immigration website, lead management system, and
                CRM into one connected digital platform tailored to your
                consultancy.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#334155] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#0F766E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#334155] focus-visible:ring-offset-4 md:w-auto"
            >
              Discuss Your Project
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}