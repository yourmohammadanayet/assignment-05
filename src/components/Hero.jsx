import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1216px] items-center gap-10 px-4 md:grid-cols-2 lg:px-0">
        
        <div>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-[60px] lg:leading-[60px]">
            Build Your Ideal
            <span className="gradient-text block">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-[576px] text-base leading-7 text-slate-600 lg:text-lg">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="brand-gradient rounded-lg px-5 py-3 text-sm font-semibold text-white"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Development technology stack"
            className="w-full max-w-[420px]"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;