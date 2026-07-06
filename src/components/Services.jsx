const services = [
  {
    title: "Immigration Website Development",
    description:
      "Premium, SEO-focused websites for immigration consultancies, visa agencies, education consultants, and migration service providers.",
    points: ["SEO-ready pages", "Mobile responsive", "WhatsApp CTA"],
  },
  {
    title: "Immigration CRM Development",
    description:
      "Custom CRM systems to manage leads, clients, consultants, follow-ups, visa enquiries, and office workflow.",
    points: ["Lead management", "Client records", "Follow-up tracking"],
  },
  {
    title: "Visa Case Management System",
    description:
      "Track every visa application from enquiry to document collection, submission, appointment, and final decision.",
    points: ["Case stages", "Status tracking", "Consultant notes"],
  },
  {
    title: "Client Portal Development",
    description:
      "Give clients a secure portal to upload documents, view missing files, check case progress, and receive updates.",
    points: ["Document upload", "Progress tracking", "Client login"],
  },
  {
    title: "Document Checklist System",
    description:
      "Create country-wise and visa-type-wise document checklists for work visa, visit visa, student visa, and skilled migration.",
    points: ["Visa-wise checklist", "Country-wise setup", "Missing docs alerts"],
  },
  {
    title: "WhatsApp & Automation Integration",
    description:
      "Send reminders, document lists, payment alerts, appointment updates, and follow-up messages directly to clients.",
    points: ["WhatsApp messages", "Auto reminders", "Client updates"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#475569]">
            Professional Services
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1E293B] sm:text-4xl lg:text-5xl">
            Integrated IT solutions
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#64748B]">
            Engineered for stability, data integrity, and operational efficiency.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-xl border border-[#E2E8F0] bg-white p-8 transition-all duration-300 hover:border-[#94A3B8] hover:shadow-lg"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-lg border border-[#E2E8F0] text-sm font-semibold text-[#475569]">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-xl font-bold leading-snug text-[#1E293B]">
                {service.title}
              </h3>
              <p className="mt-3 grow leading-7 text-[#64748B]">
                {service.description}
              </p>

              <ul className="mt-6 space-y-3">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm font-medium text-[#475569]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#94A3B8]" />
                    {point}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center text-sm font-bold text-[#1E293B] underline decoration-[#94A3B8] decoration-2 underline-offset-4 hover:decoration-[#1E293B]"
              >
                Learn more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}