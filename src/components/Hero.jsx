export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-20">
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#CCFBF1] bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#475569]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0F766E]" />
            CRM • Website • Lead Management
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-[#1E293B] sm:text-5xl lg:text-6xl">
            Digital solutions for immigration consultancies
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#64748B]">
            We build immigration CRM systems, professional consultancy websites,
            and lead management tools to help visa agencies manage enquiries,
            clients, consultants, follow-ups, and daily operations.
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
              className="rounded-lg border border-[#CCFBF1] bg-white px-8 py-4 text-center text-sm font-bold text-[#1E293B] transition hover:border-[#0F766E]"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* UI Preview Area */}
        <div className="relative">
          <div className="relative rounded-xl border border-[#CCFBF1] bg-white p-4 shadow-xl">
            <div className="rounded-lg bg-[#1E293B] p-6 text-white">
              <div className="mb-6">
                <p className="text-[10px] uppercase tracking-widest text-[#5EEAD4]">
                  CRM Preview
                </p>
                <h2 className="text-xl font-bold">
                  Immigration Business Dashboard
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["New Leads", "248"],
                  ["Active Clients", "86"],
                  ["Follow-ups", "31"],
                  ["Consultants", "08"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-lg border border-[#334155] bg-[#334155]/30 p-4"
                  >
                    <p className="text-[10px] uppercase text-[#94A3B8]">
                      {label}
                    </p>
                    <p className="mt-1 text-2xl font-bold text-white">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-lg bg-white p-5 text-[#1E293B]">
                <p className="text-xs font-bold uppercase tracking-widest text-[#475569]">
                  Today's CRM Tasks
                </p>

                <div className="mt-4 space-y-2 text-xs font-medium">
                  <div className="flex justify-between rounded bg-[#F8FAFC] p-2">
                    <span>Lead follow-ups</span>
                    <span className="font-bold text-[#0F766E]">12</span>
                  </div>

                  <div className="flex justify-between rounded bg-[#F8FAFC] p-2">
                    <span>Visitor entries</span>
                    <span className="font-bold text-[#0F766E]">18</span>
                  </div>

                  <div className="flex justify-between rounded bg-[#F8FAFC] p-2">
                    <span>Sales report pending</span>
                    <span className="font-bold text-[#0F766E]">04</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-3 -top-3 h-16 w-16 rounded-full bg-[#CCFBF1] blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}