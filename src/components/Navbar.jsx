import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E2E8F0] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          aria-label="Immigration IT Solutions"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.webp"
            alt="Immigration IT Solutions logo"
            width={44}
            height={44}
            priority
            className="h-11 w-11 rounded-xl object-contain"
          />

          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-[#1E293B]">
              Immigration
              <span className="text-[#0F766E]">IT</span>
            </h1>

            <p className="text-xs text-[#64748B]">
              CRM • Websites • Lead Management
            </p>
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {[
            ["Services", "#services"],
            ["Process", "#process"],
            ["Pricing", "#pricing"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-semibold text-[#475569] transition hover:text-[#0F766E]"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="rounded-lg bg-[#1E293B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0F766E]"
        >
          Book Free Demo
        </a>
      </div>
    </header>
  );
}