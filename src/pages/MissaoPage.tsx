import { motion } from "framer-motion";
import { Target, Eye, Heart, Globe, Zap, Shield, Users, BookOpen, TrendingUp, Star } from "lucide-react";

const mission = {
  icon: Target,
  label: "Missão",
  color: "from-blue-500 to-blue-700",
  glow: "rgba(59,130,246,0.25)",
  title: "Nossa Missão",
  description:
    "Democratizar o acesso ao conhecimento tecnológico e digital por meio de uma plataforma educacional inovadora, alinhada ao ODS 4 da ONU, que capacite estudantes e profissionais a construírem um futuro melhor através da educação de qualidade.",
  highlights: [
    "Acesso universal ao conhecimento",
    "Tecnologia como ferramenta educacional",
    "Alinhamento com ODS 4 da ONU",
    "Impacto social positivo",
  ],
};

const vision = {
  icon: Eye,
  label: "Visão",
  color: "from-cyan-500 to-blue-600",
  glow: "rgba(34,211,238,0.22)",
  title: "Nossa Visão",
  description:
    "Ser reconhecida como uma das principais referências em educação digital do Brasil até 2028, conectando mais de 10.000 estudantes a conteúdos de qualidade, promovendo equidade de acesso e transformando vidas por meio da tecnologia e inovação educacional.",
  highlights: [
    "Referência nacional em EdTech",
    "10.000+ estudantes impactados",
    "Inovação contínua",
    "Presença nacional até 2028",
  ],
};

const values = [
  {
    icon: Globe,
    title: "Inclusão",
    description: "Educação sem barreiras. Acreditamos que o conhecimento é um direito de todos, independentemente de localização, renda ou condição social.",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Zap,
    title: "Inovação",
    description: "Buscamos constantemente novas formas de ensinar e aprender, incorporando tecnologias emergentes para criar experiências educacionais únicas.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Shield,
    title: "Integridade",
    description: "Transparência, honestidade e ética norteiam todas as nossas ações, desde o desenvolvimento do produto até o relacionamento com nossos usuários.",
    color: "from-blue-600 to-indigo-600",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Acreditamos no poder do trabalho em equipe. Construímos juntos, aprendemos juntos e crescemos juntos, valorizando cada perspectiva individual.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: BookOpen,
    title: "Excelência",
    description: "Comprometidos com a qualidade em tudo que fazemos. Cada detalhe do BitLearning é pensado para proporcionar a melhor experiência de aprendizagem.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Impacto",
    description: "Medimos nosso sucesso pelo impacto positivo na vida das pessoas. Cada estudante que avança em sua jornada de aprendizado é uma vitória nossa.",
    color: "from-cyan-400 to-blue-500",
  },
];

const commitments = [
  { number: "ODS 4", label: "Educação de Qualidade", desc: "Alinhados com a agenda global da ONU" },
  { number: "6", label: "Especialistas", desc: "Uma equipe multidisciplinar e dedicada" },
  { number: "2026", label: "Ano de Fundação", desc: "Nasce um projeto com visão de futuro" },
  { number: "100%", label: "Comprometimento", desc: "Com a transformação educacional digital" },
];

export function MissaoPage() {
  return (
    <div className="bg-[#0B0F1A] min-h-screen">
      {/* Hero */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/12 rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-5"
          >
            <Heart className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-cyan-300 text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
              Propósito & Identidade
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Missão, Visão &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Valores
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="text-gray-400 max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1.05rem" }}
          >
            Os princípios que guiam cada decisão, linha de código e interação do BitLearning.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-20">

        {/* ── Mission & Vision cards ─────────────────────── */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[mission, vision].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: idx * 0.1 }}
                className="relative group rounded-3xl border border-white/10 bg-[#0f1628]/80 p-8 overflow-hidden hover:border-blue-400/30 transition-all duration-300"
              >
                {/* Background glow */}
                <div
                  className={`absolute -top-8 -right-8 w-48 h-48 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${item.color}`}
                />

                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} blur-md opacity-40`} />
                </div>

                {/* Label */}
                <span
                  className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-3 block"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.label}
                </span>

                <h2
                  className="text-2xl font-bold text-white mb-4"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {item.title}
                </h2>

                <p
                  className="text-gray-400 leading-relaxed mb-6"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.description}
                </p>

                {/* Highlight list */}
                <div className="space-y-2">
                  {item.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                        {h}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </div>

        {/* ── Commitments stats ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0d1830] to-[#0B0F1A] p-8 mb-16 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                Nossos Compromissos
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {commitments.map((c) => (
                <div key={c.number} className="text-center">
                  <p
                    className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {c.number}
                  </p>
                  <p className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
                    {c.label}
                  </p>
                  <p className="text-gray-500 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Values grid ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2
            className="text-3xl font-bold text-white mb-2"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Nossos{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Valores
            </span>
          </h2>
          <p className="text-gray-500 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
            Os pilares que sustentam tudo que fazemos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, index) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                className="group relative rounded-2xl border border-white/10 bg-[#0f1628]/80 p-6 hover:border-blue-400/30 hover:bg-[#0f1628] transition-all duration-300"
              >
                <div className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-4 shadow-md`}>
                  <Icon className="w-5 h-5 text-white" />
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${v.color} blur-md opacity-30`} />
                </div>

                <h3
                  className="text-white font-bold text-lg mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {v.description}
                </p>

                <div className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
