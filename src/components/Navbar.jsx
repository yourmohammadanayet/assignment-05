function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <nav className="mx-auto flex h-20 max-w-[1216px] items-center justify-between px-4 lg:px-0">
        
        <a href="#" className="flex items-center gap-2">
          <div className="brand-gradient flex h-9 w-9 items-center justify-center rounded-lg text-lg font-bold text-white">
            D
          </div>

          <span className="gradient-text text-xl font-bold">
            Dev Stack
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium text-slate-900">
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

        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-slate-700">
            Sign In
          </button>

          <button className="brand-gradient rounded-full px-5 py-2.5 text-sm font-semibold text-white">
            Sign Up
          </button>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;