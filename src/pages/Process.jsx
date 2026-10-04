import React from 'react';

export default function Process() {
  const steps = [
    { num: '01', title: 'Murojaat', desc: 'Telefon yoki Telegram orqali muammoingizni yozasiz.' },
    { num: '02', title: 'Tahlil', desc: 'Muammo va kerakli xizmat aniqlanadi.' },
    { num: '03', title: 'Yechim', desc: 'Kelishilgan xizmat bajariladi va qurilma sozlanadi.' },
    { num: '04', title: 'Natija', desc: 'Qurilma yoki loyiha tayyor holatda topshiriladi.' },
  ];

  return (
    <section className="py-20">
      <div className="max-w-[1180px] mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-black tracking-[2.5px] text-cyan-400 mb-3">ISH JARAYONI</div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">Xizmat qanday amalga oshiriladi?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-white/5 relative overflow-hidden">
              <div className="text-cyan-400/20 font-black text-4xl mb-4">{s.num}</div>
              <h3 className="text-base font-bold mb-2">{s.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}