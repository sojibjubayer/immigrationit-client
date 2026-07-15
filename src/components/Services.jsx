const services = [
  {
    title: "Immigration CRM Development",
    description:
      "A complete CRM solution built exclusively for immigration consultancies to streamline client management, consultant workflow, visa processing, and business operations.",
    points: [
      "Client & consultant management",
      "Visa case tracking",
      "Dashboard & reports",
    ],
  },
  {
    title: "Immigration Website Development",
    description:
      "Professional, SEO-optimized websites for immigration consultants, visa agencies, and education consultancies to generate more enquiries and build trust.",
    points: [
      "Responsive website",
      "SEO optimization",
      "WhatsApp integration",
    ],
  },
  {
    title: "Lead Management System",
    description:
      "Capture, organize, assign, and track leads from enquiry to conversion with an efficient lead management system built for immigration consultancies.",
    points: [
      "Lead & visitor management",
      "Follow-up reminders",
      "Sales pipeline",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#475569]">
            Our Services
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1E293B] sm:text-4xl lg:text-5xl">
            Digital Solutions for Immigration Consultancies
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#64748B]">
            We help immigration consultants and visa agencies grow with custom
            CRM software, professional websites, and powerful lead management
            solutions designed specifically for the immigration industry.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
            >
              {/* Number */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-700">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-4 grow leading-7 text-slate-600">
                {service.description}
              </p>

              {/* Features */}
              <ul className="mt-6 space-y-3">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-sm font-medium text-slate-700"
                  >
                    <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-8 inline-flex items-center font-semibold text-slate-900 transition hover:gap-2"
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