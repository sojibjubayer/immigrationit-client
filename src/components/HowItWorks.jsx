const steps = [
  {
    number: "01",
    title: "Discovery Call",
    subtitle: "Understand your business",
    description:
      "We discuss your immigration consultancy services, target clients, current workflow, problems, and required digital solution.",
    points: ["Business goals", "Services offered", "Current workflow"],
  },
  {
    number: "02",
    title: "Strategy & Planning",
    subtitle: "Create the right solution plan",
    description:
      "We prepare a clear plan for your website, CRM, client portal, visa case management system, or custom software.",
    points: ["Feature planning", "Page structure", "Project quotation"],
  },
  {
    number: "03",
    title: "Design & Development",
    subtitle: "Build premium digital experience",
    description:
      "We design and develop a professional, mobile-friendly, SEO-focused system using modern technologies and clean UI.",
    points: ["Premium UI design", "Responsive layout", "SEO structure"],
  },
  {
    number: "04",
    title: "Launch & Support",
    subtitle: "Go live with confidence",
    description:
      "After testing, we launch your website or software and provide support for improvements, updates, and future features.",
    points: ["Testing", "Deployment", "Ongoing support"],
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
              A disciplined path to launch
            </h2>
          </div>

          <p className="text-lg leading-8 text-[#64748B]">
            We follow a structured methodology to ensure your digital solution 
            is built for stability, data integrity, and operational clarity.
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

        {/* Footer CTA */}
        <div className="mt-16 rounded-xl bg-[#1E293B] p-8 text-white shadow-xl">
          <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <h3 className="text-2xl font-bold">
                Have a specific software requirement?
              </h3>
              <p className="mt-2 text-[#94A3B8] leading-7">
                Custom development for lead management, visa tracking, and automated workflows.
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