export default function Hero() {
  const highlights = [
    "Immigration CRM",
    "Lead Management",
    "Consultancy Websites",
  ];

  const dashboardStats = [
    { label: "Active Leads", value: "248" },
    { label: "Visa Applications", value: "86" },
    { label: "Today Follow-ups", value: "31" },
    { label: "Active Clients", value: "108" },
  ];

  const tasks = [
    { label: "Lead follow-ups", value: "12" },
    { label: "Visa applications", value: "18" },
    { label: "Client documents", value: "06" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F7F9FC]">
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
        className="pointer-events-none absolute -left-44 top-20 h-80 w-80 rounded-full bg-[#0F766E]/8 blur-3xl sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-44 top-10 h-80 w-80 rounded-full bg-[#475569]/8 blur-3xl sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto grid min-h-[calc(100svh-77px)] w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-24">
        {/* Left content */}
        <div className="max-w-3xl">
          {/* Small label */}
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#BFE7E1] bg-white/90 px-3 py-2 shadow-sm backdrop-blur sm:px-4">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#14B8A6]" />

            <span className="truncate text-[10px] font-bold uppercase tracking-[0.14em] text-[#334155] sm:text-xs sm:tracking-[0.18em]">
              CRM • Websites • Lead Management
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 max-w-3xl wrap-break-word text-[2.45rem] font-extrabold leading-[1.08] tracking-tight text-[#1E293B] sm:text-5xl lg:text-[3.65rem]">
            Digital solutions for
            <span className="block text-[#0F766E]">
              immigration consultancies
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8">
            We develop immigration CRM systems, lead management platforms, and
            professional consultancy websites that help you manage enquiries,
            clients, consultants, visa applications, follow-ups, documents,
            and daily business operations.
          </p>

          {/* Highlight tags */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            {highlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-3 py-2 text-xs font-bold text-[#475569] shadow-sm"
              >
                <svg
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3 text-[#0F766E]"
                  aria-hidden="true"
                >
                  <path d="m2 6 2.5 2.5L10 3" />
                </svg>

                {item}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#334155] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_25px_rgba(71,85,105,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0F766E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#334155] focus-visible:ring-offset-4 sm:w-auto"
            >
              Request Free Demo

              <span aria-hidden="true">→</span>
            </a>

            <a
              href="#services"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-6 py-3 text-sm font-bold text-[#334155] transition-all duration-300 hover:border-[#334155] hover:bg-[#F1F5F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#334155] focus-visible:ring-offset-4 sm:w-auto"
            >
              Explore Services
            </a>
          </div>

          {/* Trust line */}
          <div className="mt-8 flex flex-col gap-3 border-t border-[#E2E8F0] pt-6 text-sm text-[#64748B] sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E6FFFA] text-[#0F766E]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M12 3 4 6v5c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V6l-8-3Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>

              <span>Secure role-based access</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F5F9] text-[#475569]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M4 4h16v16H4z" />
                  <path d="M8 9h8M8 13h5M8 17h7" />
                </svg>
              </span>

              <span>Custom-built for your workflow</span>
            </div>
          </div>
        </div>

        {/* Right dashboard mockup */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          {/* Outer glow */}
          <div
            aria-hidden="true"
            className="absolute inset-6 rounded-4xl bg-[#0F766E]/10 blur-3xl"
          />

          <div className="relative rounded-[1.75rem] border border-[#D9E2EC] bg-white p-3 shadow-[0_30px_80px_rgba(71,85,105,0.18)] sm:p-4">
            {/* Browser top bar */}
            <div className="flex items-center justify-between rounded-t-[1.35rem] border-b border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#CBD5E1]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#94A3B8]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#0F766E]" />
              </div>

              <div className="max-w-40 truncate rounded-full border border-[#E2E8F0] bg-white px-3 py-1 text-[10px] font-semibold text-[#64748B] sm:max-w-none sm:text-xs">
                immigrationit.com/dashboard
              </div>

              <span className="h-5 w-5 rounded-md bg-[#E2E8F0]" />
            </div>

            {/* Dashboard */}
            <div className="rounded-b-[1.35rem] bg-[#F8FAFC] p-3 sm:p-5">
              <div className="overflow-hidden rounded-2xl bg-[#243247] p-4 shadow-xl sm:p-5">
                {/* Dashboard header */}
                <div className="flex flex-col gap-4 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#2DD4BF]" />

                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#5EEAD4]">
                        Live Operations
                      </p>
                    </div>

                    <h2 className="mt-2 text-base font-bold text-white sm:text-lg">
                      Immigration Business Dashboard
                    </h2>
                  </div>

                  <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold text-[#CBD5E1]">
                    Updated now
                  </span>
                </div>

                {/* Stats */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {dashboardStats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-white/10 bg-white/5 p-3"
                    >
                      <p className="text-[9px] font-semibold uppercase tracking-wide text-[#94A3B8] sm:text-[10px]">
                        {item.label}
                      </p>

                      <p className="mt-2 text-lg font-extrabold text-white sm:text-xl">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tasks */}
                <div className="mt-4 rounded-xl bg-white p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#334155] sm:text-xs">
                      Today&apos;s CRM Tasks
                    </h3>

                    <span className="rounded-full bg-[#E6FFFA] px-2 py-1 text-[9px] font-bold text-[#0F766E]">
                      Live
                    </span>
                  </div>

                  <div className="mt-3 space-y-2">
                    {tasks.map((task) => (
                      <div
                        key={task.label}
                        className="flex items-center justify-between rounded-lg bg-[#F8FAFC] px-3 py-2"
                      >
                        <div className="flex min-w-0 items-center gap-2">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#14B8A6]" />

                          <span className="truncate text-[10px] font-semibold text-[#475569] sm:text-xs">
                            {task.label}
                          </span>
                        </div>

                        <span className="ml-3 text-[10px] font-extrabold text-[#0F766E] sm:text-xs">
                          {task.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom mini cards */}
              <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  ["Consultants", "06"],
                  ["Due Today", "12"],
                  ["Overdue", "04"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-[#E2E8F0] bg-white p-3 text-center shadow-sm"
                  >
                    <p className="text-[9px] font-semibold text-[#94A3B8] sm:text-[10px]">
                      {label}
                    </p>

                    <p className="mt-1 text-sm font-extrabold text-[#334155] sm:text-base">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating performance card */}
          <div className="absolute -bottom-6 -left-2 hidden w-48 rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-[0_18px_45px_rgba(71,85,105,0.16)] sm:block lg:-left-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#94A3B8]">
                  Performance
                </p>

                <p className="mt-1 text-lg font-extrabold text-[#334155]">
                  +24%
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6FFFA] text-[#0F766E]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M4 19V9M10 19V5M16 19v-7M22 19V3" />
                </svg>
              </div>
            </div>

            <p className="mt-2 text-[11px] leading-5 text-[#64748B]">
              Improved consultant follow-up activity
            </p>
          </div>

          {/* Floating secure card */}
          <div className="absolute -right-2 -top-5 hidden rounded-xl border border-[#D9E2EC] bg-white px-4 py-3 shadow-[0_14px_35px_rgba(71,85,105,0.14)] sm:flex sm:items-center sm:gap-2 lg:-right-6">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F0FDFA] text-[#0F766E]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M12 3 4 6v5c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V6l-8-3Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </span>

            <div>
              <p className="text-[10px] font-bold text-[#334155]">
                Secure System
              </p>

              <p className="text-[9px] text-[#94A3B8]">
                Role-based protection
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}