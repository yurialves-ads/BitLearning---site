import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "História", path: "/historia" },
  { label: "Integrantes", path: "/integrantes" },
  { label: "Fotos", path: "/fotos" },
  { label: "Missão & Valores", path: "/missao" },
  { label: "Documentos", path: "/documentos" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (path: string) => {
    setMobileOpen(false);
    navigate(path);
  };

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 py-1.5 text-center">
        <span className="text-white text-xs tracking-widest font-inter font-medium">
            Projeto Integrador Acadêmico · ODS 4 - Educação de Qualidade · ONU
        </span>
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-7 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B0F1A]/95 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-white/[0.06]"
            : "bg-[#0B0F1A]/70 backdrop-blur-md border-b border-white/[0.04]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">


            <div className="relative">
              <img
                src="/logo-completa.png"
                alt="BitLearning"
                className="h-10 md:h-12 object-contain drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]"
              />
            </div>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavigate(link.path)}
                    className="relative px-3.5 py-2 group"
                  >
                    <span
                      className={`text-[0.82rem] font-inter font-medium transition-colors ${
                        active ? "text-cyan-400" : "text-gray-400 group-hover:text-white"
                      }`}
                    >
                      {link.label}
                    </span>

                    {active && (
                      <motion.div
                        layoutId="site-nav-indicator"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/5">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-cyan-400 text-xs font-inter font-semibold">
                  ODS 4 · ONU
                </span>
              </div>

              <motion.button
                onClick={() => handleNavigate("/integrantes")}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full text-white text-sm font-inter font-semibold shadow-md"
              >
                Nossa Equipe
              </motion.button>
            </div>

            {/* Mobile button */}
            <button
              className="lg:hidden text-gray-300 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-white/[0.06] bg-[#0B0F1A]/98 backdrop-blur-xl"
            >
              <div className="px-5 py-5 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <button
                      key={link.path}
                      onClick={() => handleNavigate(link.path)}
                      className={`text-left px-4 py-3 rounded-xl text-sm font-inter font-medium ${
                        active
                          ? "bg-blue-500/15 text-cyan-400 border border-cyan-400/20"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}

                <div className="mt-3 pt-3 border-t border-white/[0.06]">
                  <button
                    onClick={() => handleNavigate("/integrantes")}
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl text-white text-sm font-inter font-semibold"
                  >
                    Nossa Equipe
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}