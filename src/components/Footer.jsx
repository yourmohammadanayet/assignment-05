function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-slate-100 bg-white pt-16 pb-12"
    >
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          
          {/* Brand */}
          <div className="sm:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <div className="brand-gradient flex h-6 w-6 items-center justify-center rounded-md text-[10px] font-bold text-white">
                DS
              </div>

              <span className="text-lg font-bold text-slate-900">
                Dev{" "}
                <span className="text-pink-600">
                  Stack
                </span>
              </span>
            </a>

            <p className="mt-3 max-w-sm text-xs leading-5 text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex items-center gap-4 text-xs font-semibold text-slate-600">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-bold tracking-wide text-slate-900">
              PRODUCT
            </h4>

            <div className="mt-4 flex flex-col gap-2.5 text-xs text-slate-500">
              <a href="#" className="hover:text-slate-900">
                Home
              </a>

              <a
                href="#technologies"
                className="hover:text-slate-900"
              >
                Technologies
              </a>

              <a
                href="#projects"
                className="hover:text-slate-900"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold tracking-wide text-slate-900">
              COMPANY
            </h4>

            <div className="mt-4 flex flex-col gap-2.5 text-xs text-slate-500">
              <a
                href="#about"
                className="hover:text-slate-900"
              >
                About
              </a>

              <a
                href="#contact"
                className="hover:text-slate-900"
              >
                Contact
              </a>

              <a href="#" className="hover:text-slate-900">
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold tracking-wide text-slate-900">
              LEGAL
            </h4>

            <div className="mt-4 flex flex-col gap-2.5 text-xs text-slate-500">
              <a href="#" className="hover:text-slate-900">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-slate-900">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-slate-100 pt-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-600">
              Privacy
            </a>

            <a href="#" className="hover:text-slate-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;