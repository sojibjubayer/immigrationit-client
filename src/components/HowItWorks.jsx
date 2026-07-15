const steps = [
  {
    number: "01",
    title: "Business & Workflow Analysis",
    subtitle: "Understand your consultancy",
    description:
      "We study how your immigration consultancy handles enquiries, leads, clients, consultants, follow-ups, and visa processing.",
    points: ["Lead process", "Client workflow", "Consultant roles"],
  },
  {
    number: "02",
    title: "CRM & Website Planning",
    subtitle: "Define the right structure",
    description:
      "We plan the CRM modules, website pages, lead forms, dashboard, reports, and management features based on your business model.",
    points: ["CRM modules", "Website structure", "Lead system"],
  },
  {
    number: "03",
    title: "Design & Development",
    subtitle: "Build your digital system",
    description:
      "We develop your immigration CRM, consultancy website, and lead management system with a clean interface and practical workflow.",
    points: ["CRM development", "Website design", "Lead tracking"],
  },
  {
    number: "04",
    title: "Launch, Training & Support",
    subtitle: "Go live professionally",
    description:
      "We launch your system, test all features, guide your team, and provide support for updates, improvements, and future modules.",
    points: ["Testing", "Team training", "Support"],
  },
];

export default function HowItWorks() {
  return (
    <section
      id="process"
      className="relative bg-[#F8FAFC] py-20"
      aria-labelledby="how-it-works-heading"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0F766E]">
              Our Process
            </p>

            <h2
              id="how-it-works-heading"
              className="mt-4 text-3xl font-extrabold tracking-tight text-[#1E293B] sm:text-4xl lg:text-5xl"
            >
              How we build your consultancy system
            </h2>
          </div>

          <p className="text-lg leading-8 text-[#64748B]">
            From enquiry handling to CRM development, website launch, and lead
            tracking, we follow a clear process designed for immigration
            consultancy businesses.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group flex flex-col rounded-xl border border-[#E2E8F0] bg-white p-8 transition-all duration-300 hover:border-[#334155] hover:shadow-lg"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-lg border border-[#E2E8F0] text-sm font-bold text-[#0F766E]">
                {step.number}
              </div>

              <p className="text-xs font-bold uppercase tracking-wider text-[#0F766E]">
                {step.subtitle}
              </p>

              <h3 className="mt-2 text-xl font-bold leading-snug text-[#1E293B]">
                {step.title}
              </h3>

              <p className="mt-3 grow leading-7 text-[#64748B]">
                {step.description}
              </p>

              <ul className="mt-6 space-y-3">
                {step.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-sm font-medium text-[#475569]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0F766E]" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-xl bg-[#1E293B] p-8 text-white shadow-xl">
          <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <h3 className="text-2xl font-bold">
                Need a CRM, website, or lead management system?
              </h3>
              <p className="mt-2 leading-7 text-[#94A3B8]">
                We build complete digital solutions for immigration
                consultancies, including CRM modules, lead tracking, consultant
                reports, dashboards, and professional websites.
              </p>
            </div>

            <div className="flex md:justify-end">
              <a
                href="#contact"
                className="rounded-lg bg-[#0F766E] px-8 py-3 text-sm font-bold text-white transition hover:bg-[#0d6962]"
              >
                Start Discussion
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}