import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#f1f5f9] bg-white">
      <nav className="mx-auto max-w-[1216px] px-4 md:px-6 xl:px-0">
        
        {/* Desktop Navbar */}
        <div className="hidden h-20 items-center justify-between md:flex">
          <a href="#" className="flex items-center gap-2">
            <div className="brand-gradient flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold text-white">
              DS
            </div>

            <span className="gradient-text text-xl font-bold">
              Dev Stack
            </span>
          </a>

          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-medium text-slate-900"
            >
              Home
            </a>

            <a
              href="#technologies"
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              Technologies
            </a>

            <a
              href="#projects"
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              Projects
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-slate-700">
              Sign In
            </button>

            <button className="brand-gradient rounded-full px-5 py-2.5 text-sm font-semibold text-white">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="grid h-16 grid-cols-[40px_1fr_auto] items-center gap-2 md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center"
            aria-label="Toggle navigation menu"
          >
            <div className="space-y-[5px]">
              <span className="block h-[2px] w-5 rounded-full bg-[#706a6a]"></span>
              <span className="block h-[2px] w-5 rounded-full bg-[#706a6a]"></span>
              <span className="block h-[2px] w-5 rounded-full bg-[#706a6a]"></span>
            </div>
          </button>

          <a
            href="#"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2"
          >
            <div className="brand-gradient flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold text-white">
              DS
            </div>

            <span className="whitespace-nowrap text-base font-bold">
              <span className="text-slate-900">Dev</span>
              <span className="text-[#d63384]">Stack</span>
            </span>
          </a>

          <div className="flex items-center justify-end gap-2">
            <button className="whitespace-nowrap text-[11px] font-semibold text-slate-600">
              Sign In
            </button>

            <button className="whitespace-nowrap rounded-full bg-[#d63384] px-3.5 py-2 text-[11px] font-semibold text-white">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-slate-100 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              <a
                href="#"
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Home
              </a>

              <a
                href="#technologies"
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Technologies
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Projects
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;