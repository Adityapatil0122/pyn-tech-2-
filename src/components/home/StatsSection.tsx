import Counter from "@/components/Counter";

const StatsSection = () => {
  const stats = [
    { value: 150, suffix: "+", label: "Projects shipped" },
    { value: 96, suffix: "%", label: "Client satisfaction" },
    { value: 5, suffix: "+", label: "Years building" },
    { value: 100, suffix: "+", label: "Businesses supported" },
  ];

  return (
    <section className="bg-pyn-dark py-20 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <div className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-pyn-lightBlue">
              Proof in Operation
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">Built for outcomes clients can measure</h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
            From launch-ready products to automated customer flows, we track progress through delivered work, adoption, and business impact.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="mb-2 text-4xl font-bold text-pyn-amber">
                <Counter end={stat.value} suffix={stat.suffix} duration={2000} />
              </p>
              <p className="text-sm font-medium text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
