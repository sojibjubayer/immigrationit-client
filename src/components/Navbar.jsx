export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E2E8F0] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <a href="#" aria-label="ImmigrationIT Home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded bg-[#1E293B] font-bold text-white">
            IT
          </div>
          <div>
            <p className="text-lg font-extrabold tracking-tight text-[#1E293B]">
              Immigration<span className="text-[#0F766E]">IT</span>
            </p>
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {['Services', 'Methodology', 'Pricing'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#64748B] transition hover:text-[#0F766E]"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="rounded-lg border border-[#1E293B] bg-[#1E293B] px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white transition hover:bg-[#0F766E] hover:border-[#0F766E]"
        >
          Request Demo
        </a>
      </div>
    </header>
  );
}