const plans = [
  {
    name: "Starter Website",
    price: "From QAR 2,500",
    badge: "Best for new offices",
    description:
      "A premium business website for immigration consultancies that need a professional online presence.",
    features: [
      "Responsive website design",
      "Home, services, about, and contact sections",
      "SEO-friendly structure",
      "WhatsApp contact button",
      "Basic contact form",
      "Google-ready business content",
    ],
    note: "Good for small visa agencies and new consultancy offices.",
  },
  {
    name: "Professional Growth",
    price: "From QAR 6,500",
    badge: "Most popular",
    description:
      "A complete marketing website with lead capture tools for growing immigration and visa businesses.",
    features: [
      "Premium multi-section website",
      "Service pages for visa categories",
      "Lead enquiry form",
      "Request demo/contact form",
      "Basic admin lead viewing setup",
      "SEO-focused content structure",
      "WhatsApp call-to-action setup",
    ],
    note: "Best for agencies running Facebook, Google, or WhatsApp campaigns.",
    highlighted: true,
  },
  {
    name: "Custom CRM / Portal",
    price: "From QAR 12,000",
    badge: "Custom solution",
    description:
      "Custom immigration software for consultancies that need CRM, client portal, case tracking, or document workflow.",
    features: [
      "Immigration CRM development",
      "Visa case management",
      "Client document upload portal",
      "Follow-up and reminder system",
      "Payment and invoice tracking",
      "Consultant/staff role management",
      "Custom workflow based on your office",
    ],
    note: "Final price depends on features, users, automation, and integrations.",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0F766E]">
            Service Packages
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1E293B] sm:text-4xl lg:text-5xl">
            Flexible IT investment
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#64748B]">
            Transparent pricing tailored to the requirements of your consultancy.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col rounded-xl border p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "border-[#1E293B] bg-[#1E293B] text-white"
                  : "border-[#E2E8F0] bg-white text-[#1E293B]"
              }`}
            >
              {/* Badge */}
              <div
                className={`mb-6 inline-flex w-fit rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${
                  plan.highlighted
                    ? "bg-[#0F766E] text-white"
                    : "bg-[#E2E8F0] text-[#475569]"
                }`}
              >
                {plan.badge}
              </div>

              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className={`mt-3 text-sm ${plan.highlighted ? "text-[#94A3B8]" : "text-[#64748B]"}`}>
                {plan.description}
              </p>

              <div className="mt-8 mb-6">
                <p className="text-3xl font-extrabold">{plan.price}</p>
                <p className={`mt-1 text-xs ${plan.highlighted ? "text-[#94A3B8]" : "text-[#475569]"}`}>
                  Starting project investment
                </p>
              </div>

              <ul className="mt-4 grow space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm font-medium">
                    <span className={`mt-0.5 shrink-0 h-1.5 w-1.5 rounded-full ${plan.highlighted ? "bg-[#0F766E]" : "bg-[#94A3B8]"}`} />
                    <span className={plan.highlighted ? "text-[#E2E8F0]" : "text-[#475569]"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-10 block w-full rounded-lg py-4 text-center text-sm font-bold transition ${
                  plan.highlighted
                    ? "bg-[#0F766E] text-white hover:bg-[#0d6962]"
                    : "border border-[#1E293B] hover:bg-[#1E293B] hover:text-white"
                }`}
              >
                Request Quote
              </a>
            </article>
          ))}
        </div>

        {/* Custom Solution Footer */}
        <div className="mt-16 rounded-xl border border-[#E2E8F0] bg-white p-8">
          <div className="grid gap-6 md:grid-cols-[2fr_1fr] md:items-center">
            <div>
              <h3 className="text-lg font-bold text-[#1E293B]">Need a custom solution?</h3>
              <p className="mt-2 text-sm text-[#64748B]">
                We offer bespoke development for CRM, visa case management, document automation, and staff workflow systems. Let's discuss your specific requirements.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a href="#contact" className="text-sm font-bold text-[#0F766E] underline underline-offset-4 hover:text-[#0d6962]">
                Start a Discussion →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}