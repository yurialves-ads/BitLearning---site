import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/logo.png"; // ajuste o caminho se precisar

const navLinks = [
  { label: "Início", id: "inicio" },
  { label: "Equipe", id: "equipe" },
  { label: "Sobre", id: "sobre" },
  { label: "Soluções", id: "solucoes" },
  { label: "Contato", id: "contato" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = "inicio";
      navLinks.forEach((n) => {
        const sec = document.getElementById(n.id);
        if (sec && window.scrollY >= sec.offsetTop - 120) {
          current = sec.id;
        }
      });

      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Top bar */}
      <div className="fixed top-0 w-full z-50 bg-blue-600 py-1 text-center text-white text-xs">
        Projeto Integrador · ODS 4
      </div>

      {/* Navbar */}
      <motion.header
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-6 w-full z-40 transition ${
          scrolled ? "bg-black/90" : "bg-black/60"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

          <button onClick={() => scrollTo("inicio")} className="flex items-center gap-3">
  
            <img
              src={logo}
              alt="BitLearning"
              className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
            />

            <div className="flex flex-col leading-tight text-left">
              <span className="text-white font-bold text-lg">
                BitLearning
              </span>
              <span className="text-xs text-gray-400">
                EDUCAÇÃO DIGITAL
              </span>
            </div>

          </button>

          {/* Desktop */}
          <nav className="hidden lg:flex gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={activeId === link.id ? "text-cyan-400" : "text-gray-300"}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile button */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white">
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-black p-4 flex flex-col gap-2 lg:hidden"
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-white"
                >
                  {link.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}