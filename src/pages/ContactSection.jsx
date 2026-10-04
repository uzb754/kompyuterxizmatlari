import React, { useState } from 'react';

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    const text = `📬 *Portfolio saytdan yangi murojaat!*\n\n` +
                 `👤 *Ism:* ${name}\n` +
                 `📞 *Telefon:* ${phone}\n` +
                 `💬 *Xabar:* ${message}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: 'Markdown'
        }),
      });

      if (response.ok) {
        setFormStatus(true);
        setTimeout(() => setFormStatus(false), 5000);
        e.target.reset();
      } else {
        alert("Xabar yuborilmadi! Chat ID yoki tokenni tekshiring.");
      }
    } catch (error) {
      console.error("Xatolik:", error);
      alert("Tarmoqda xatolik yuz berdi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden" id="contact">
      <div className="max-w-[1180px] mx-auto px-4">
        
        {/* Sarlavha */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-extrabold tracking-wider mb-4">
            ALOQA VA BUYURTMA
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Bog'lanish va <span className="bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text text-transparent">Murojaat</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            IT xizmatlar yoki savollar bo'yicha istalgan vaqtda murojaat qilishingiz mumkin. Qisqa fursatda javob beramiz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Chap tomon: Ma'lumotlar */}
          <div className="space-y-6">
            <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-[#101d2c] to-[#050a10] shadow-2xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-cyan-500/10 blur-[60px] pointer-events-none"></div>
              
              <h3 className="text-xl font-extrabold mb-6 text-white">Bog'lanish ma'lumotlari</h3>
              
              <div className="space-y-6">
                <a href="tel:+998951903181" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.6 2.7 9 2.2c.55-.12 1.1.17 1.32.69l1.3 3.03c.2.46.08 1-.3 1.33L9.8 8.68a15.6 15.6 0 0 0 5.52 5.52l1.43-1.52c.33-.38.87-.5 1.33-.3l3.03 1.3c.52.22.81.77.69 1.32l-.5 2.4c-.15.72-.8 1.24-1.53 1.2C10.24 18.15 5.85 13.76 5.4 4.03c-.04-.73.48-1.38 1.2-1.53Z"/></svg>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-bold">Telefon raqam</span>
                    <strong className="text-white text-base group-hover:text-cyan-400 transition">+998 (95) 190-31-81</strong>
                  </div>
                </a>

                <a href="https://t.me/dev_uz_pro" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m21 3-7.1 18-3.7-7.2L3 10.1 21 3Z"/></svg>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-bold">Telegram kanal / Murojaat</span>
                    <strong className="text-white text-base group-hover:text-cyan-400 transition">@dev_uz_pro</strong>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" d="M12 6v6l4 2"/></svg>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-bold">Ish vaqti</span>
                    <strong className="text-white text-base">Har kuni: 24/7 (Doimiy aloqa)</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* O'ng tomon: Forma */}
          <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-[#101d2c] to-[#050a10] shadow-2xl relative">
            <h3 className="text-xl font-extrabold mb-6 text-white">Xabar yuborish</h3>
            
            {formStatus && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold animate-pulse">
                Xabaringiz botga muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <span className="text-xs text-gray-400 font-bold">Ismingiz</span>
                <input 
                  type="text" 
                  name="name"
                  required 
                  placeholder="Masalan: Aziz" 
                  className="w-full mt-1 px-4 py-3.5 rounded-2xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

              <div>
                <span className="text-xs text-gray-400 font-bold">Telefon raqamingiz</span>
                <input 
                  type="tel" 
                  name="phone"
                  required 
                  placeholder="+998 90 123 45 67" 
                  className="w-full mt-1 px-4 py-3.5 rounded-2xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

              <div>
                <span className="text-xs text-gray-400 font-bold">Xabar yoki muammo tavsifi</span>
                <textarea 
                  rows="4" 
                  name="message"
                  required 
                  placeholder="Qanday IT xizmat kerakligini yozing..." 
                  className="w-full mt-1 px-4 py-3.5 rounded-2xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500 transition resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white font-extrabold text-xs shadow-xl shadow-cyan-500/25 hover:opacity-95 hover:-translate-y-0.5 transition-all disabled:opacity-50"
              >
                {loading ? "Yuborilmoqda..." : "Xabarni yuborish"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}