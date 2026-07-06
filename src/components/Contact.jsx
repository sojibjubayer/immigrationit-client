export default function Contact() {
  return (
    <section id="contact" className="bg-[#F8FAFC] py-20" aria-labelledby="contact-heading">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        
        {/* Left: Branding & Contact Details */}
        <div className="flex flex-col">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0F766E]">
            Get in touch
          </p>
          <h2 id="contact-heading" className="mt-4 text-3xl font-extrabold tracking-tight text-[#1E293B] sm:text-4xl">
            Let’s discuss your project
          </h2>
          <p className="mt-5 text-base leading-7 text-[#64748B]">
            We provide bespoke development for immigration consultancies. Reach out for a consultation on your CRM, client portal, or automation requirements.
          </p>

          <div className="mt-10 space-y-4">
            <a href="https://wa.me/97471294020" className="flex items-center gap-4 rounded-lg border border-[#E2E8F0] bg-white p-4 transition hover:border-[#0F766E]">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-[#F8FAFC] font-bold text-[#0F766E]">W</div>
              <p className="text-sm font-bold text-[#1E293B]">+974 7129 4020</p>
            </a>
            <a href="mailto:contact@immigrationit.com" className="flex items-center gap-4 rounded-lg border border-[#E2E8F0] bg-white p-4 transition hover:border-[#0F766E]">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-[#F8FAFC] font-bold text-[#0F766E]">@</div>
              <p className="text-sm font-bold text-[#1E293B]">contact@immigrationit.com</p>
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <form className="rounded-xl border border-[#E2E8F0] bg-white p-8 shadow-sm">
          <div className="grid gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#475569]">Full Name</label>
                <input type="text" className="w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm text-[#1E293B] outline-none focus:border-[#0F766E]" />
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#475569]">Company</label>
                <input type="text" className="w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm text-[#1E293B] outline-none focus:border-[#0F766E]" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#475569]">Service Required</label>
              <select className="w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm text-[#1E293B] outline-none focus:border-[#0F766E]">
                <option>Website Development</option>
                <option>Immigration CRM</option>
                <option>Case Management System</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#475569]">Message</label>
              <textarea rows="4" className="w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm text-[#1E293B] outline-none focus:border-[#0F766E]" />
            </div>

            <button type="button" className="w-full rounded-lg bg-[#1E293B] py-4 text-center text-sm font-bold text-white transition hover:bg-[#0F766E]">
              Submit Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}