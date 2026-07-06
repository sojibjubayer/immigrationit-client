export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-20">
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#475569]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0F766E]" />
            IT Solutions for Consultancies
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-[#1E293B] sm:text-5xl lg:text-6xl">
            Digital infrastructure for immigration agencies
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#64748B]">
            We build precise, reliable software and websites tailored for immigration consultancies. 
            Automate your client onboarding, case tracking, and document workflows with professional digital tools.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-lg bg-[#1E293B] px-8 py-4 text-center text-sm font-bold text-white transition hover:bg-[#0F766E]"
            >
              Request Free Demo
            </a>
            <a
              href="#services"
              className="rounded-lg border border-[#E2E8F0] bg-white px-8 py-4 text-center text-sm font-bold text-[#1E293B] transition hover:border-[#334155]"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* UI Preview Area */}
        <div className="relative">
          <div className="relative rounded-xl border border-[#E2E8F0] bg-white p-4 shadow-xl">
            <div className="rounded-lg bg-[#1E293B] p-6 text-white">
              <div className="mb-6">
                <p className="text-[10px] uppercase tracking-widest text-[#94A3B8]">System Preview</p>
                <h2 className="text-xl font-bold">Business Control Panel</h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Leads", "248"],
                  ["Active Cases", "86"],
                  ["Follow-ups", "31"],
                  ["Documents", "412"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg border border-[#334155] bg-[#334155]/30 p-4">
                    <p className="text-[10px] uppercase text-[#94A3B8]">{label}</p>
                    <p className="mt-1 text-2xl font-bold text-white">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-lg bg-white p-5 text-[#1E293B]">
                <p className="text-xs font-bold uppercase tracking-widest text-[#475569]">Today's Workflow</p>
                <div className="mt-4 space-y-2 text-xs font-medium">
                  <div className="flex justify-between rounded bg-[#F8FAFC] p-2">
                    <span>Client follow-ups</span>
                    <span className="text-[#0F766E]">12</span>
                  </div>
                  <div className="flex justify-between rounded bg-[#F8FAFC] p-2">
                    <span>Document pending</span>
                    <span className="text-[#0F766E]">18</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}