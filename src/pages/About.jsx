import React from 'react';

export default function About() {
  return (
    <section className="py-20">
      <div className="max-w-[1180px] mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-black tracking-[2.5px] text-cyan-400 mb-3">NIMA UCHUN BIZ?</div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">Muammoingizga texnik yechim</h2>
          <p className="text-gray-400 text-sm leading-relaxed">Har bir qurilma va vaziyat alohida ko‘rib chiqiladi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-500/40 transition">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 grid place-items-center mb-6">⚡</div>
            <h3 className="text-lg font-bold mb-3">Tezkor xizmat</h3>
            <p className="text-gray-400 text-xs leading-relaxed">Vazifaga qarab imkon qadar tez va tartibli xizmat ko‘rsatish.</p>
          </div>

          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-500/40 transition">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 grid place-items-center mb-6">🛠</div>
            <h3 className="text-lg font-bold mb-3">Professional yondashuv</h3>
            <p className="text-gray-400 text-xs leading-relaxed">Kompyuter va dasturiy muammolarni bosqichma-bosqich aniqlash.</p>
          </div>

          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-500/40 transition">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 grid place-items-center mb-6">🛡</div>
            <h3 className="text-lg font-bold mb-3">Ma'lumotlarga ehtiyotkorlik</h3>
            <p className="text-gray-400 text-xs leading-relaxed">Muhim fayllar bilan ishlashda xavfsizlik va ehtiyotkorlikka e'tibor.</p>
          </div>
        </div>

      </div>
    </section>
  );
}