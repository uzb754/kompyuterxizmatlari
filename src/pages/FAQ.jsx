import React, { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "Windows o‘rnatish qancha vaqt oladi?", a: "Qurilma holati va kerakli sozlamalarga qarab vaqt farq qiladi. Aniq vaqt murojaat vaqtida aytiladi." },
    { q: "O‘chib ketgan fayllarni tiklash mumkinmi?", a: "Fayl tiklash imkoniyati qurilma va ma'lumot holatiga bog‘liq. Avval qurilma tekshiriladi." },
    { q: "Sayt va Telegram bot ham tayyorlab berasizmi?", a: "Ha. Biznes sayt, landing page, portfolio, katalog va Telegram bot kabi loyihalar tayyorlash mumkin." },
    { q: "Masofadan yordam olish mumkinmi?", a: "Muammo turiga qarab masofadan turib texnik yordam ko‘rsatish imkoniyati mavjud." },
  ];

  return (
    <section className="py-20">
      <div className="max-w-[820px] mx-auto px-4">
        
        <div className="text-center mb-12">
          <div className="text-xs font-black tracking-[2.5px] text-cyan-400 mb-3">FAQ</div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">Ko‘p beriladigan savollar</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-5 flex items-center justify-between text-left font-extrabold text-xs sm:text-sm cursor-pointer"
              >
                {faq.q}
                <span className={`w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 grid place-items-center transition-transform ${openIndex === idx ? 'rotate-45' : ''}`}>+</span>
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-5 text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}