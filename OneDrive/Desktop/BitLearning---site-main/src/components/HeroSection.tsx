import { motion } from "framer-motion"; 
import { ArrowRight, BookOpen, Users, Award, Play } from "lucide-react";
import { useNavigate } from "react-router";

const stats = [
  { value: "6", label: "Integrantes", icon: Users },
  { value: "ODS 4", label: "Meta ONU", icon: Award },
  { value: "100%", label: "Dedicação", icon: BookOpen },
];

export function HeroSection() {
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0B0F1A] pt-28"
    >
      {/* ── Background layers ───────────────────────────────────── */}

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />

      {/* Large gradient orbs */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/20 rounded-full blur-[80px]" />

      {/* Diagonal accent lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"
          style={{ right: "38%" }}
        />
        <div
          className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500/8 to-transparent"
          style={{ right: "62%" }}
        />
      </div>

      {/* ── Content wrapper ─────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Text content ─────────────────────────────── */}
          <div className="flex flex-col items-start">

            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span
                  className="text-cyan-300 text-xs font-semibold tracking-widest uppercase"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Projeto Integrador · 2026
                </span>
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] mb-6 text-left"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <span className="text-white">Educação</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Digital
              </span>
              <br />
              <span className="text-white">do Futuro</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-gray-400 max-w-lg mb-8 leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "1.05rem" }}
            >
              O <strong className="text-white font-semibold">BitLearning</strong> une tecnologia de ponta e metodologias inovadoras para democratizar o acesso ao conhecimento, alinhado ao{" "}
              <span className="text-cyan-400 font-medium">ODS 4 da ONU</span>.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              {/* Primary CTA */}
              <motion.button
                onClick={() => navigate("/integrantes")}
                whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(34,211,238,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full text-white font-semibold shadow-lg shadow-blue-500/25 transition-all"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Conhecer Equipe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                onClick={() => scrollTo("sobre")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-semibold border border-white/15 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/25 transition-all"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <Play className="w-4 h-4 fill-current" />
                Saiba Mais
              </motion.button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.55 }}
              className="flex items-center gap-0 border border-white/10 rounded-2xl bg-white/[0.03] backdrop-blur-sm overflow-hidden"
            >
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className={`flex flex-col items-center px-6 py-4 ${
                      i < stats.length - 1 ? "border-r border-white/10" : ""
                    }`}
                  >
                    <Icon className="w-4 h-4 text-cyan-400 mb-1.5" />
                    <span
                      className="text-white font-bold text-lg"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="text-gray-500 text-xs"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* ── RIGHT: Visual panel ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Outer glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 rounded-3xl blur-3xl scale-110" />

            {/* Main card frame */}
            <div className="relative w-full max-w-[480px] aspect-[4/4.5] rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f1c3a] to-[#0B0F1A] overflow-hidden shadow-2xl shadow-blue-900/40">

              {/* Card header bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.07] bg-white/[0.02]">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-green-400/70" />
                <div className="flex-1 mx-3 h-6 rounded-md bg-white/5 border border-white/[0.07] flex items-center px-2">
                  <span className="text-gray-500 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                    bitlearning.edu.br
                  </span>
                </div>
              </div>

              {/* Hero globe / LOGO */}
            <div className="flex flex-col items-center justify-center pt-8 pb-4">
              <div className="relative">
                
                {/* Glow continua igual */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-25 scale-150 animate-pulse" />

                {/* SUA LOGO AQUI */}
                <img
                  src="/logo.png" // 🔥 TROQUE AQUI PELO CAMINHO DA SUA LOGO
                  alt="Logo BitLearning"
                  className="w-[170px] h-[170px] object-contain relative z-10"
                />

              </div>

              {/* Brand name */}
              <p
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mt-3 mb-1"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                BitLearning
              </p>

              <p
                className="text-gray-500 text-xs tracking-widest uppercase"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Onde o bit constrói o futuro
              </p>
            </div>

              {/* Card footer — tech tags */}
              <div className="absolute bottom-0 left-0 right-0 px-5 py-4 border-t border-white/[0.06] bg-white/[0.02] flex items-center justify-between gap-2 flex-wrap">
                {["React", "TypeScript", "ODS 4", "Educação"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs border border-blue-500/25 bg-blue-500/10 text-blue-300"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Floating accent dots */}
              <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <div className="absolute top-12 right-10 w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>

            {/* Floating notification card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-1/4 bg-[#0f1c35] border border-cyan-400/20 rounded-2xl px-4 py-3 shadow-xl shadow-blue-900/30 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>
                    Novo módulo
                  </p>
                  <p className="text-gray-400 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                    Tech & Inovação
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating badge card */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-6 bottom-1/4 bg-[#0f1c35] border border-blue-500/20 rounded-2xl px-4 py-3 shadow-xl shadow-blue-900/30 backdrop-blur-sm"
            >
              
            </motion.div>
          </motion.div>
        </div>

        {/* ── Bottom scroll hint ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex items-center justify-center gap-3 mt-16 lg:mt-20"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
          <motion.button
            onClick={() => scrollTo("equipe")}
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="text-gray-500 hover:text-gray-300 transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </motion.button>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
        </motion.div>
      </div>
    </section>
  );
}