const benefits = [
  { title: "Industry-Specific Logic", description: "Deep understanding of visa, education, and migration workflows." },
  { title: "SEO-First Architecture", description: "Professional, trust-building websites engineered for search visibility." },
  { title: "Lead Conversion Focus", description: "Strategic placement of CTAs, forms, and direct messaging channels." },
  { title: "Scalable Infrastructure", description: "Modular CRM and client portal upgrades as your agency grows." },
  { title: "Qatar-Centric Support", description: "Bespoke service planning with regional operational awareness." },
  { title: "Future-Ready Automation", description: "From basic web presence to full document tracking and dashboards." },
];

export default function WhyChoose() {
  return (
    <section id="why" className="bg-white py-20" aria-labelledby="why-choose-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0F766E]">
            Our Methodology
          </p>
          <h2 id="why-choose-heading" className="mt-4 text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
            Digital infrastructure for growing consultancies
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title} 
              className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-8 transition hover:border-[#0F766E]"
            >
              <div className="mb-6 text-[10px] font-bold text-[#0F766E]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-bold text-[#1E293B]">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#64748B]">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Closing Thought */}
        <div className="mt-16 rounded-lg border border-[#1E293B] bg-[#1E293B] p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <h3 className="text-2xl font-bold text-white">
              Moving from manual processes to professional digital workflows.
            </h3>
            <p className="text-[#94A3B8] text-sm leading-6 border-l border-[#334155] pl-8">
              We eliminate the friction of scattered leads and document management. Our systems provide a centralized source of truth for your immigration consultancy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}