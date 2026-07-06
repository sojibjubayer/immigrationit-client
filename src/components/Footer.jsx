export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E293B] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-[#0F766E] font-bold">
                IT
              </div>
              <span className="text-xl font-extrabold tracking-tight">ImmigrationIT</span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-6 text-[#94A3B8]">
              Bespoke digital infrastructure for immigration consultancies. 
              We build professional websites, CRM systems, and client portals 
              to automate your agency workflow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#64748B]">Navigation</h3>
            <ul className="mt-6 space-y-4 text-sm text-[#CBD5E1]">
              {['Services', 'Methodology', 'Request Demo'].map((item) => (
                <li key={item}>
                  <a href="#" className="transition hover:text-[#0F766E]">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#64748B]">Expertise</h3>
            <ul className="mt-6 space-y-4 text-sm text-[#CBD5E1]">
              <li>Website Development</li>
              <li>Immigration CRM</li>
              <li>Case Management</li>
              <li>Client Portals</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-[#334155] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-[#64748B] uppercase tracking-widest">
          <p>© {currentYear} ImmigrationIT. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}