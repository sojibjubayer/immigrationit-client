const steps = [
  {
    number: "01",
    title: "Requirement & Workflow Review",
    subtitle: "Understand your daily operations",
    description:
      "We review how your consultancy currently manages enquiries, visitors, clients, consultants, visa services, follow-ups, documents, attendance, and reporting.",
    points: [
      "Current workflow review",
      "User roles and permissions",
      "Required modules and reports",
    ],
  },
  {
    number: "02",
    title: "System Planning & Prototype",
    subtitle: "Plan before development",
    description:
      "We define the CRM modules, lead-management workflow, website structure, dashboards, forms, statuses, reports, and automation required for your business.",
    points: [
      "Module and database planning",
      "Dashboard and page structure",
      "Prototype and feature approval",
    ],
  },
  {
    number: "03",
    title: "Development & Configuration",
    subtitle: "Build around your consultancy",
    description:
      "We develop and configure your CRM, lead management system, or website using your services, staff structure, visa categories, workflow rules, and branding.",
    points: [
      "CRM and website development",
      "Workflow and role configuration",
      "Forms, reports, and integrations",
    ],
  },
  {
    number: "04",
    title: "Testing, Launch & Training",
    subtitle: "Prepare your team to go live",
    description:
      "We test the complete system, fix workflow issues, configure users, import available data, launch the project, and train your team on daily operations.",
    points: [
      "System and mobile testing",
      "User setup and data migration",
      "Team training and support",
    ],
  },
];

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E6FFFA] text-[#0F766E] transition-colors duration-300 group-hover:bg-[#F1F5F9] group-hover:text-[#334155]">
      <svg
        viewBox="0 0 12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-2.5 w-2.5"
        aria-hidden="true"
      >
        <path d="m2 6 2.5 2.5L10 3" />
      </svg>
    </span>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="process"
      aria-labelledby="how-it-works-heading"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* Background pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-35"
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
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#0F766E]/50 sm:w-10" />

              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#0F766E] sm:text-xs sm:tracking-[0.3em]">
                Our Process
              </p>
            </div>

            <h2
              id="how-it-works-heading"
              className="mt-5 max-w-2xl wrap-break-word text-[2rem] font-extrabold leading-tight tracking-tight text-[#1E293B] sm:text-4xl lg:text-5xl"
            >
              From your current workflow to a
              <span className="block text-[#0F766E]">
                complete digital system
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8 lg:justify-self-end">
            We do not use a one-size-fits-all setup. Every CRM, lead management
            system, and consultancy website is planned around your services,
            consultants, visa workflow, reporting needs, and daily business
            process.
          </p>
        </div>

        {/* Process timeline */}
        <div className="relative mt-12 sm:mt-16">
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-[#CBD5E1] lg:block"
          />

          <div className="grid items-stretch gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_10px_35px_rgba(71,85,105,0.07)] transition-all duration-300 ease-out sm:p-7 lg:hover:-translate-y-1.5 lg:hover:border-[#334155]/40 lg:hover:shadow-[0_20px_45px_rgba(71,85,105,0.11)]"
              >
                {/* Top accent */}
                <div className="absolute inset-x-0 top-0 h-1 bg-[#0F766E] transition-colors duration-300 group-hover:bg-[#334155]" />

                {/* Step number */}
                <div className="relative z-10 mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#CCFBF1] bg-[#F0FDFA] text-sm font-extrabold text-[#0F766E] transition-colors duration-300 group-hover:border-[#CBD5E1] group-hover:bg-[#F1F5F9] group-hover:text-[#334155]">
                    {step.number}
                  </div>

                  <span
                    aria-hidden="true"
                    className="text-3xl font-extrabold text-[#E8EEF3] transition-colors duration-300 group-hover:text-[#CBD5E1]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Subtitle */}
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0F766E] transition-colors duration-300 group-hover:text-[#334155] sm:text-[11px]">
                  {step.subtitle}
                </p>

                {/* Title */}
                <h3 className="mt-3 wrap-break-word text-xl font-bold leading-snug text-[#1E293B]">
                  {step.title}
                </h3>

                {/* Divider */}
                <div className="mt-4 h-px w-14 bg-[#0F766E]/50 transition-colors duration-300 group-hover:bg-[#334155]/60" />

                {/* Description */}
                <p className="mt-5 grow text-sm leading-7 text-[#64748B]">
                  {step.description}
                </p>

                {/* Points */}
                <ul className="mt-6 space-y-3 border-t border-dashed border-[#CBD5E1] pt-5">
                  {step.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm font-medium leading-6 text-[#475569]"
                    >
                      <CheckIcon />

                      <span className="min-w-0 wrap-break-word">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* Practical delivery summary */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {[
            {
              label: "Discovery",
              value: "Requirements confirmed",
            },
            {
              label: "Planning",
              value: "Modules and workflow approved",
            },
            {
              label: "Development",
              value: "System built and tested",
            },
            {
              label: "Delivery",
              value: "Launch, training, and support",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]/90 px-5 py-4"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0F766E]">
                {item.label}
              </p>

              <p className="mt-2 text-sm font-bold leading-6 text-[#334155]">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-[#475569] bg-[#334155] p-6 shadow-[0_20px_50px_rgba(71,85,105,0.18)] sm:p-8 lg:mt-16 lg:p-10">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5EEAD4]">
                Start Your Project
              </p>

              <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                Tell us how your consultancy currently works
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#CBD5E1] sm:text-base">
                We will review your workflow and recommend the right CRM
                modules, lead management features, website structure, reports,
                access roles, and implementation plan.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0F766E] px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#334155] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#334155] md:w-auto"
            >
              Discuss Your Requirements

              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}