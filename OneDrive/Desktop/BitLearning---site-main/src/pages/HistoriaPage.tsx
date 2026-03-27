import { motion } from "framer-motion";
import { Calendar,  Lightbulb, Users } from "lucide-react";

const IMG_TEAM = "";
const IMG_CLASS = "";

const timeline = [
  {
    year: "Mar 2026",
    title: "Nascimento da Ideia",
    description:
      "Em uma aula de Projeto Integrador, o grupo foi formado e surgiu a ideia de criar uma plataforma educacional digital voltada para o ODS 4 da ONU — educação de qualidade para todos.",
    icon: Lightbulb,
    color: "from-blue-500 to-blue-400",
    side: "left",
  },
  {
    year: "Mar 2026",
    title: "Formação da Equipe",
    description:
      "Seis membros com habilidades complementares se uniram: Scrum Master ,  Analista de Requisitos , Gerente de Projetos ,  PO , Engenheiro de Requisitos e Engenharia de Software — formando o núcleo do BitLearning.",
    icon: Users,
    color: "from-cyan-500 to-cyan-400",
    side: "right",
  },

  //{
    //year: "Mar 2026",
    //title: "Definição do Escopo",
    //description:
      //"A equipe definiu o escopo do projeto: uma landing page corporativa que apresenta a proposta de solução digital para democratizar o acesso ao conhecimento tecnológico.",
    //icon: Flag,
    //color: "from-blue-600 to-cyan-500",
    //side: "left",
  //},
  
];

function PageHero() {
  return (
    <div className="relative bg-[#0B0F1A] pt-32 pb-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-5"
        >
          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-cyan-300 text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
            Nossa Trajetória
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl font-bold text-white mb-4"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          História da{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Fábrica
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto"
          style={{ fontFamily: "Inter, sans-serif", fontSize: "1.05rem" }}
        >
          Como nasceu o BitLearning — da sala de aula ao projeto integrador, a história de uma equipe
          comprometida com a educação digital de qualidade.
        </motion.p>
      </div>
    </div>
  );
}

export function HistoriaPage() {
  return (
    <div className="bg-[#0B0F1A] min-h-screen">
      <PageHero />

      {/* ── Image banner ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden h-72 sm:h-96 mb-24 border border-white/10"
        >
          <img src={IMG_TEAM} alt="Equipe BitLearning" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-[#0B0F1A]/30 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <p className="text-white font-bold text-2xl" style={{ fontFamily: "Poppins, sans-serif" }}>
              Equipe BitLearning · 2026
            </p>
            <p className="text-gray-400 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              Projeto Integrador Acadêmico
            </p>
          </div>
        </motion.div>

        {/* ── Timeline ───────────────────────────────────── */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-cyan-400/30 to-transparent hidden md:block" />

          <div className="flex flex-col gap-12 md:gap-16">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isLeft = item.side === "left";
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                  className={`relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div className={`flex-1 ${isLeft ? "md:pr-12 lg:pr-16 md:text-right" : "md:pl-12 lg:pl-16"}`}>
                    <div className="group relative p-6 rounded-2xl border border-white/10 bg-[#0f1628]/80 hover:border-cyan-400/30 hover:bg-[#0f1628] transition-all duration-300">
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ boxShadow: "inset 0 0 30px rgba(34,211,238,0.04)" }} />
                      <span
                        className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-2 block"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {item.year}
                      </span>
                      <h3
                        className="text-white font-bold text-xl mb-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-gray-400 leading-relaxed text-sm"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg shadow-blue-500/20`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} blur-md opacity-30`} />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Bottom image ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 relative rounded-3xl overflow-hidden h-64 sm:h-80 border border-white/10"
        >
          <img src={IMG_CLASS} alt="Apresentação do projeto" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F1A]/90 via-[#0B0F1A]/50 to-transparent" />
          <div className="absolute inset-0 flex items-center px-10">
            <div className="max-w-lg">
              <h3
                className="text-white font-bold text-2xl mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Comprometidos com a Educação
              </h3>
              <p
                className="text-gray-400 text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                O BitLearning representa não apenas um projeto acadêmico, mas um compromisso real com a democratização do conhecimento digital no Brasil.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
