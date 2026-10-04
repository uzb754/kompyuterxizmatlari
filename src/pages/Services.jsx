import React, { useState } from 'react';

const servicesData = [
  { id: 1, cat: 'computer', title: 'Windows o‘rnatish', desc: 'Windows 7, Windows 10 va Windows 11 o‘rnatish va sozlash.' },
  { id: 2, cat: 'software', title: 'Dasturlar o‘rnatish', desc: 'Kerakli kompyuter dasturlarini o‘rnatish va sozlash.' },
  { id: 3, cat: 'software', title: 'Office dasturlari', desc: 'Word, Excel, PowerPoint va boshqa ofis dasturlarini sozlash.' },
  { id: 4, cat: 'computer', title: 'Windows parolini tiklash', desc: 'Windows hisobiga kirish bilan bog‘liq muammolar bo‘yicha yordam.' },
  { id: 5, cat: 'data', title: 'Fayllarni tiklash', desc: 'O‘chib ketgan ma\'lumot va fayllarni holatiga qarab tiklash.' },
  { id: 6, cat: 'data', title: 'Fleshkadan ma\'lumot tiklash', desc: 'Fleshka va xotira qurilmalaridagi ma\'lumotlarni tiklash.' },
  { id: 7, cat: 'data', title: 'Fleshka xizmatlari', desc: 'Musiqa, kino, dastur va boshqa fayllarni fleshkaga yozish.' },
  { id: 8, cat: 'computer', title: 'Virusdan tozalash', desc: 'Kompyuterni zararli dasturlardan tozalash va himoyani sozlash.' },
  { id: 9, cat: 'computer', title: 'Diskni tozalash', desc: 'Keraksiz fayllarni tozalash va diskni optimallashtirish.' },
  { id: 10, cat: 'computer', title: 'Driver yangilash', desc: 'Audio, video, Wi-Fi, chipset va boshqa drayverlarni sozlash.' },
  { id: 11, cat: 'web', title: 'Web-sayt yaratish', desc: 'Biznes, portfolio, landing page va zamonaviy web-saytlar.' },
  { id: 12, cat: 'web', title: 'Telegram bot', desc: 'Biznes va xizmatlar uchun Telegram botlar yaratish.' },
  { id: 13, cat: 'web', title: 'Mobil ilovalar', desc: 'Mobil ilova g‘oyalarini zamonaviy interfeysga aylantirish.' },
  { id: 14, cat: 'other', title: 'My.gov.uz xizmatlari', desc: 'Elektron davlat xizmatlaridan foydalanishda amaliy yordam.' },
  { id: 15, cat: 'other', title: 'Anti-radar yangilash', desc: 'Mos qurilmalarning dasturiy ta\'minotini yangilash bo‘yicha xizmat.' },
  { id: 16, cat: 'computer', title: 'Printer va skaner', desc: 'Printer, skaner va ularning drayverlarini o‘rnatish va sozlash.' },
  { id: 17, cat: 'computer', title: 'Wi-Fi va internet', desc: 'Router, Wi-Fi va internet ulanishlarini sozlash.' },
  { id: 18, cat: 'computer', title: 'Kompyuter sozlash', desc: 'Kompyuterni formatlash, tizimni sozlash va tayyor holatga keltirish.' },
  { id: 19, cat: 'data', title: 'Ma\'lumot ko‘chirish', desc: 'Fayllarni HDD, SSD, fleshka yoki boshqa qurilmaga ko‘chirish.' },
  { id: 20, cat: 'computer', title: 'Kompyuterni tezlashtirish', desc: 'Tizimni optimallashtirish va ishlash samaradorligini yaxshilash.' },
  { id: 21, cat: 'other', title: 'Masofadan IT yordam', desc: 'Muammo turiga qarab masofadan turib texnik yordam.' },
  { id: 22, cat: 'software', title: 'Internet dasturlarini sozlash', desc: 'Google, Chrome, Telegram va boshqa internet dasturlarini sozlash.' },
];

export default function Services() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  const filtered = servicesData.filter(item => {
    const matchesFilter = activeFilter === 'all' || item.cat === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || item.desc.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="py-20">
      <div className="max-w-[1180px] mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-black tracking-[2.5px] text-cyan-400 mb-3">XIZMATLAR</div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">Barcha IT xizmatlari bir joyda</h2>
          <p className="text-gray-400 text-sm leading-relaxed">Kerakli xizmatni qidiring yoki kategoriyani tanlang. Xizmat ustiga bosib batafsil ma'lumot oling.</p>
        </div>

        {/* QIDIRUV VA FILTRLAR */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path strokeLinecap="round" d="m16 16 5 5"/></svg>
            <input 
              type="text" 
              value={search} 
              onChange={e => setSearch(e.target.value)} 
              placeholder="Xizmat qidirish..." 
              className="w-full py-3.5 pl-12 pr-4 rounded-2xl border border-white/10 bg-white/5 outline-none focus:border-blue-500 text-sm transition"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {[
              { id: 'all', label: 'Barchasi' },
              { id: 'computer', label: 'Kompyuter' },
              { id: 'software', label: 'Dasturlar' },
              { id: 'data', label: "Ma'lumot" },
              { id: 'web', label: 'Web' },
              { id: 'other', label: 'Boshqa' },
            ].map(f => (
              <button 
                key={f.id} 
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-3 rounded-xl border text-xs font-extrabold whitespace-nowrap transition cursor-pointer ${activeFilter === f.id ? 'bg-blue-600 border-blue-600 text-white' : 'border-white/10 bg-white/5 text-gray-400 hover:text-white'}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* XIZMATLAR GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.length > 0 ? (
            filtered.map(service => (
              <div 
                key={service.id} 
                onClick={() => setSelectedService(service)}
                className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] hover:border-cyan-500/40 hover:-translate-y-1.5 transition-all cursor-pointer group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 grid place-items-center mb-4 group-hover:scale-110 transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16"/></svg>
                </div>
                <h3 className="text-base font-bold mb-2">{service.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">{service.desc}</p>
                <div className="flex items-center gap-1.5 text-xs font-black text-cyan-400 group-hover:translate-x-1 transition-transform">
                  Batafsil
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6"/></svg>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full p-12 text-center rounded-2xl border border-white/10 bg-white/5 text-gray-400">
              Xizmat topilmadi.
            </div>
          )}
        </div>

        {/* MODAL WINDOW */}
        {selectedService && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md grid place-items-center p-4">
            <div className="relative w-full max-w-lg p-6 rounded-3xl border border-white/10 bg-[#0c141e] shadow-2xl">
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-xl border border-white/10 bg-white/5 grid place-items-center hover:border-cyan-500 transition cursor-pointer"
              >
                ✕
              </button>
              
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-400 grid place-items-center mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16"/></svg>
              </div>

              <h2 className="text-2xl font-black mb-2">{selectedService.title}</h2>
              <p className="text-gray-400 text-xs leading-relaxed mb-6">{selectedService.desc} Ushbu xizmat bo'yicha to'liq va sifatli yordam oling.</p>

              <div className="flex gap-3">
                <a href="tel:+998951903181" className="flex-1 py-3.5 rounded-xl bg-blue-600 text-white font-extrabold text-xs text-center shadow-lg shadow-blue-500/25">Qo'ng'iroq qilish</a>
                <a href="https://t.me/dev_uz_pro" target="_blank" rel="noreferrer" className="flex-1 py-3.5 rounded-xl border border-white/10 bg-white/5 font-extrabold text-xs text-center hover:border-cyan-500">Telegram</a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}