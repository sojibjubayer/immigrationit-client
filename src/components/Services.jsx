const services = [
{
  title: "Immigration CRM Development",
  description:
    "A complete immigration CRM and visa management platform for consultancies to manage clients, visitors, consultants, applications, follow-ups, staff activity, revenue, and daily operations from one centralized dashboard.",
  points: [
    "Client, visitor, and consultant management",
    "Visa application and service management",
    "Lead, follow-up, and To-Do management",
    "Consultant, revenue, and activity reports",
    "Role-based access and visa modules",
  ],
},
  {
    title: "Lead Management System",
    description:
      "Manage leads, visitors, follow-ups, consultant performance, and conversion activity from one centralized lead management system built to improve response time, team accountability, and enquiry conversion.",
    points: [
      "Lead and visitor management",
      "Smart lead assignment and reassignment",
      "Follow-up reminders and overdue tracking",
      "Consultant performance reports",
      "Conversion tracking and forecasting",
    ],
  },
  {
    title: "Immigration Website Development",
    description:
      "Professional immigration consultancy website development for visa agencies and education consultants to improve online visibility, generate enquiries, and build client trust.",
    points: [
      "Responsive immigration website",
      "SEO-friendly website structure",
      "Visa and service pages",
      "WhatsApp and enquiry forms",
      "CRM and lead integration",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F7F9FC] py-16 sm:py-20 lg:py-24"
    >
      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(#E7EDF3 1px, transparent 1px), linear-gradient(90deg, #E7EDF3 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-20 h-80 w-80 rounded-full bg-[#0F766E]/5 blur-3xl sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-0 h-80 w-80 rounded-full bg-[#334155]/5 blur-3xl sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-7 bg-[#0F766E]/40 sm:w-10" />

            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#0F766E] sm:text-xs sm:tracking-[0.3em]">
              Our Services
            </p>

            <span className="h-px w-7 bg-[#0F766E]/40 sm:w-10" />
          </div>

          <h2 className="mt-5 wrap-break-word text-[2rem] font-extrabold leading-tight tracking-tight text-[#1E293B] sm:text-4xl lg:text-5xl">
            Digital Solutions for
            <span className="block text-[#0F766E]">
              Immigration Consultancies
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8">
            We develop immigration CRM software, lead management systems, and
            professional immigration websites to help visa consultancies manage
            clients, automate operations, generate enquiries, and grow their
            business.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-10 grid items-stretch gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_10px_35px_rgba(71,85,105,0.08)] transition-all duration-300 sm:p-8 lg:hover:-translate-y-1.5 lg:hover:border-[#0F766E]/40 lg:hover:shadow-[0_20px_45px_rgba(71,85,105,0.12)]"
            >
              {/* Top accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-[#0F766E]" />

              {/* Number */}
              <div className="mb-6 flex items-center justify-between sm:mb-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#CCFBF1] bg-[#F0FDFA] text-xs font-extrabold text-[#0F766E] sm:h-12 sm:w-12 sm:text-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <span className="text-3xl font-extrabold text-[#E8EEF3] transition-colors duration-300 sm:text-4xl lg:group-hover:text-[#D7E8E5]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h3 className="wrap-break-word text-xl font-bold leading-snug text-[#1E293B] sm:text-2xl">
                {service.title}
              </h3>

              <div className="mt-4 h-px w-14 bg-[#0F766E]/50 sm:w-16" />

              {/* Description */}
              <p className="mt-5 grow text-sm leading-7 text-[#64748B] sm:text-[15px]">
                {service.description}
              </p>

              {/* Features */}
              <ul className="mt-6 space-y-3 border-t border-dashed border-[#CBD5E1] pt-5 sm:mt-7 sm:space-y-3.5 sm:pt-6">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm font-medium leading-6 text-[#475569]"
                  >
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E6FFFA] text-[#0F766E]">
                      <svg
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-2.5 w-2.5"
                        aria-hidden="true"
                      >
                        <path d="m2 6 2.5 2.5L10 3" />
                      </svg>
                    </span>

                    <span className="min-w-0 wrap-break-word">{point}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-7 inline-flex min-h-11 w-fit items-center gap-2 rounded-lg px-1 text-sm font-bold text-[#334155] transition-all duration-300 hover:text-[#0F766E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-4 sm:mt-8 lg:hover:gap-3"
              >
                Get Started
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
