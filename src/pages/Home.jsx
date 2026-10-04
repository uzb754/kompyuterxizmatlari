import React from 'react';
import { Link } from 'react-router-dom';
import ContactSection from './ContactSection';

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="min-h-[90vh] py-20 flex items-center">
        <div className="max-w-[1180px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-extrabold tracking-wider mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#26e98a]"></span>
              PROFESSIONAL IT XIZMATLAR
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
              Texnologiya <br />
              <span className="bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text text-transparent">siz uchun ishlasin.</span>
            </h1>
            
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              Kompyuter, Windows, dasturlar, ma'lumotlarni tiklash, viruslardan himoya, web-sayt, Telegram bot va boshqa zamonaviy IT xizmatlari.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="tel:+998951903181" className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-tr from-blue-600 to-blue-500 text-white font-extrabold text-xs shadow-xl shadow-blue-500/25 hover:-translate-y-0.5 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.6 2.7 9 2.2c.55-.12 1.1.17 1.32.69l1.3 3.03c.2.46.08 1-.3 1.33L9.8 8.68a15.6 15.6 0 0 0 5.52 5.52l1.43-1.52c.33-.38.87-.5 1.33-.3l3.03 1.3c.52.22.81.77.69 1.32l-.5 2.4c-.15.72-.8 1.24-1.53 1.2C10.24 18.15 5.85 13.76 5.4 4.03c-.04-.73.48-1.38 1.2-1.53Z"/></svg>
                Qo'ng'iroq qilish
              </a>
              <a href="https://t.me/dev_uz_pro" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl border border-white/10 bg-white/5 font-extrabold text-xs hover:border-cyan-500 hover:-translate-y-0.5 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m21 3-7.1 18-3.7-7.2L3 10.1 21 3Z"/></svg>
                Telegram orqali yozish
              </a>
            </div>
          </div>

          {/* Apple Glassmorphism Tech Card */}
          <div className="relative p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[#101d2c] to-[#050a10] shadow-2xl overflow-hidden min-h-[440px] flex items-center justify-center">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-cyan-500/20 blur-[70px] pointer-events-none"></div>
            
            <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-2 rounded-xl bg-[#08111c]/90 border border-white/10 text-xs font-bold shadow-lg animate-bounce">
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2"/><path strokeLinecap="round" d="M8 20h8M12 16v4"/></svg>
              Windows & PC
            </div>

            <div className="absolute bottom-6 right-6 flex items-center gap-2 px-3 py-2 rounded-xl bg-[#08111c]/90 border border-white/10 text-xs font-bold shadow-lg">
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3 20 6v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3Z"/></svg>
              SECURITY
            </div>

            <div className="w-full p-5 rounded-2xl bg-[#07101a] border border-cyan-500/30 shadow-inner font-mono text-xs text-cyan-300 space-y-1.5">
              <div className="flex gap-1.5 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              </div>
              <div><span className="text-purple-400">const</span> developer = &#123;</div>
              <div className="pl-4">name: <span className="text-emerald-400">"Xojimurodov"</span>,</div>
              <div className="pl-4">brand: <span className="text-emerald-400">"IT TECH"</span>,</div>
              <div className="pl-4">windows: <span className="text-yellow-400">true</span>,</div>
              <div className="pl-4">websites: <span className="text-yellow-400">true</span>,</div>
              <div className="pl-4">telegramBots: <span className="text-yellow-400">true</span>,</div>
              <div className="pl-4">support: <span className="text-emerald-400">"24/7"</span></div>
              <div>&#125;;</div>
              <br />
              <div><span className="text-purple-400">console</span>.log(<span className="text-emerald-400">"Your IT problem → Solved!"</span>);</div>
            </div>
          </div>

        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-12">
        <div className="max-w-[1180px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 text-center hover:border-cyan-500/40 transition">
            <strong className="block text-3xl font-extrabold text-cyan-400 mb-1">20+</strong>
            <span className="text-xs text-gray-400 font-bold">IT xizmatlar</span>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 text-center hover:border-cyan-500/40 transition">
            <strong className="block text-3xl font-extrabold text-cyan-400 mb-1">7+</strong>
            <span className="text-xs text-gray-400 font-bold">IT yo'nalishlar</span>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 text-center hover:border-cyan-500/40 transition">
            <strong className="block text-3xl font-extrabold text-cyan-400 mb-1">100%</strong>
            <span className="text-xs text-gray-400 font-bold">Individual yondashuv</span>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 text-center hover:border-cyan-500/40 transition">
            <strong className="block text-3xl font-extrabold text-cyan-400 mb-1">24/7</strong>
            <span className="text-xs text-gray-400 font-bold">Murojaat qilish</span>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <ContactSection />
    </div>
  );
}