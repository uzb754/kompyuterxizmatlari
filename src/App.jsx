import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Process from './pages/Process';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('xojimurodov-theme') || 'dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light');
      localStorage.setItem('xojimurodov-theme', 'light');
    } else {
      document.body.classList.remove('light');
      localStorage.setItem('xojimurodov-theme', 'dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <ScrollToTop />
      <div className={`min-h-screen font-sans selection:bg-blue-500 selection:text-white transition-colors duration-300 ${theme === 'light' ? 'bg-[#f4f7fb] text-[#101828]' : 'bg-[#05080d] text-[#f5f7fb]'}`}>
        
        {/* Orqa fon elementlari (Apple Ambient Gradients) */}
        <div className="fixed inset-0 z-[-5] pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,120,255,0.15),rgba(255,255,255,0))]"></div>
        <div className="fixed -top-40 -left-40 w-96 h-96 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none z-[-4]"></div>
        <div className="fixed top-1/2 -right-40 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none z-[-4]"></div>

        {/* HEADER (Apple Navbar Style) */}
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-opacity-80 border-b border-white/10 dark:border-white/5 transition-colors duration-300" style={{ background: theme === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(5,8,13,0.75)' }}>
          <div className="max-w-[1180px] mx-auto px-4 h-20 flex items-center justify-between">
            
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 grid place-items-center text-white shadow-lg shadow-blue-500/30 transition-transform group-hover:scale-105">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16"/></svg>
              </div>
              <div>
                <div className="text-sm font-extrabold tracking-wider">XOJIMURODOV</div>
                <div className="text-[9px] font-black tracking-[3px] text-cyan-400">IT TECH</div>
              </div>
            </Link>

            <nav className={`fixed md:static top-20 left-0 w-full md:w-auto bg-[#080e16] md:bg-transparent border-b md:border-0 border-white/10 p-6 md:p-0 flex flex-col md:flex-row items-center gap-8 transition-all ${mobileMenuOpen ? 'flex' : 'hidden md:flex'}`}>
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold text-gray-400 hover:text-cyan-400 transition-colors">Bosh sahifa</Link>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold text-gray-400 hover:text-cyan-400 transition-colors">Xizmatlar</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold text-gray-400 hover:text-cyan-400 transition-colors">Nega biz?</Link>
              <Link to="/process" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold text-gray-400 hover:text-cyan-400 transition-colors">Jarayon</Link>
              <Link to="/faq" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold text-gray-400 hover:text-cyan-400 transition-colors">FAQ</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold text-gray-400 hover:text-cyan-400 transition-colors">Aloqa</Link>
            </nav>

            <div className="flex items-center gap-2">
              <button onClick={toggleTheme} className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 dark:bg-white/5 grid place-items-center hover:border-blue-500 transition-all cursor-pointer">
                {theme === 'light' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.2 15.2A8.5 8.5 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z"/></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
                )}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden w-11 h-11 rounded-xl border border-white/10 bg-white/5 grid place-items-center cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16"/></svg>
              </button>
            </div>

          </div>
        </header>

        {/* ROUTES */}
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/process" element={<Process />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="border-t border-white/10 bg-[#080e16] py-12 mt-20">
          <div className="max-w-[1180px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 grid place-items-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16"/></svg>
                </div>
                <div>
                  <div className="text-xs font-extrabold">XOJIMURODOV IT TECH</div>
                  <div className="text-[10px] text-gray-400">Kompyuter va zamonaviy IT xizmatlari.</div>
                </div>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">Windows, dasturlar, kompyuter sozlash, ma'lumot tiklash, web-sayt va Telegram bot xizmatlari.</p>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-wider uppercase mb-4">Tezkor menyu</h4>
              <ul className="flex flex-col gap-2 text-xs text-gray-400">
                <li><Link to="/" className="hover:text-cyan-400 transition">Bosh sahifa</Link></li>
                <li><Link to="/services" className="hover:text-cyan-400 transition">Xizmatlar</Link></li>
                <li><Link to="/about" className="hover:text-cyan-400 transition">Biz haqimizda</Link></li>
                <li><Link to="/process" className="hover:text-cyan-400 transition">Ish jarayoni</Link></li>
                <li><Link to="/contact" className="hover:text-cyan-400 transition">Aloqa</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-wider uppercase mb-4">Foydali havolalar</h4>
              <ul className="flex flex-col gap-2 text-xs text-gray-400">
                <li><a href="https://www.instagram.com/mr_khojimurodov/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">Instagram</a></li>
                <li><a href="https://t.me/dev_uz_pro" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">Telegram</a></li>
                <li><a href="tel:+998951903181" className="hover:text-cyan-400 transition">Telefon qilish</a></li>
                <li><a href="https://my.gov.uz/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">My.gov.uz</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-wider uppercase mb-4">Bog'lanish</h4>
              <div className="flex flex-col gap-2">
                <a href="tel:+998951903181" className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-xs text-gray-300 hover:border-cyan-500 transition">📞 +998 95 190 31 81</a>
                <a href="https://t.me/dev_uz_pro" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-xs text-gray-300 hover:border-cyan-500 transition">✈️ @dev_uz_pro</a>
              </div>
            </div>
          </div>
          <div className="max-w-[1180px] mx-auto px-4 mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500">
            <div>© {new Date().getFullYear()} XOJIMURODOV IT TECH — Barcha huquqlar himoyalangan.</div>
            <div className="flex gap-4 mt-2 md:mt-0">
              <Link to="/contact" className="hover:text-cyan-400">Murojaat yuborish</Link>
              <Link to="/services" className="hover:text-cyan-400">Xizmatlar</Link>
            </div>
          </div>
        </footer>

      </div>
    </Router>
  );
}