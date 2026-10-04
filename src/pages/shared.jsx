export function SectionTitle({eyebrow, title, text}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div className="mb-3 text-xs font-black uppercase tracking-[.25em] text-cyan-400">{eyebrow}</div>
      <h2 className="text-3xl font-black tracking-tight sm:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">{text}</p>}
    </div>
  );
}
export function PageHero({eyebrow, title, text}) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-10 pt-24 lg:px-8 lg:pt-32">
      <div className="rounded-[2rem] border border-white/10 bg-white/[.03] p-8 shadow-card backdrop-blur-xl sm:p-12">
        <div className="text-xs font-black uppercase tracking-[.25em] text-cyan-400">{eyebrow}</div>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">{text}</p>
      </div>
    </section>
  );
}
