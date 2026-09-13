import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1216px] items-center gap-10 px-4 md:grid-cols-2 md:px-6 lg:px-0">

        {/* Hero Content */}
        <div>
          <h1 className="text-[40px] font-extrabold leading-[46px] tracking-[-1px] text-slate-900 sm:text-5xl sm:leading-[54px] lg:text-[60px] lg:leading-[60px]">
            Build Your Ideal

            <span className="gradient-text mt-1 block">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-[576px] text-[16px] leading-7 text-slate-600 lg:text-lg lg:leading-[29px]">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          <div className="mt-8 flex items-center gap-3 lg:mt-10">
            <a
              href="#technologies"
              className="brand-gradient rounded-lg px-4 py-3 text-[13px] font-semibold text-white sm:px-5 sm:text-sm"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-[13px] font-medium text-slate-700 sm:px-6 sm:text-sm"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Development technology stack"
            className="w-full max-w-[290px] sm:max-w-[340px] lg:max-w-[420px]"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;