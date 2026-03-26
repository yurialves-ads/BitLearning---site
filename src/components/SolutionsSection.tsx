import { motion } from "framer-motion";

const solutions = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="28" height="20" rx="3" stroke="#3B82F6" strokeWidth="2" fill="none"/>
        <line x1="4" y1="14" x2="32" y2="14" stroke="#3B82F6" strokeWidth="2"/>
        <circle cx="8" cy="11" r="1.5" fill="#3B82F6"/>
        <circle cx="12" cy="11" r="1.5" fill="#60A5FA"/>
        <circle cx="16" cy="11" r="1.5" fill="#93C5FD"/>
      </svg>
    ),
    title: "BitLearn.website",
    description: "Plataforma principal de aprendizado com recursos interativos e trilhas personalizadas."
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 4L32 12V24L18 32L4 24V12L18 4Z" stroke="#3B82F6" strokeWidth="2" fill="none"/>
        <circle cx="18" cy="18" r="5" fill="#3B82F6" opacity="0.7"/>
        <path d="M18 13V10M18 26V23M13 18H10M26 18H23" stroke="#60A5FA" strokeWidth="1.5"/>
      </svg>
    ),
    title: "EduContent Hub",
    description: "Repositório de materiais multimídia de alta qualidade para todos os estilos de aprendizagem."
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="24" height="24" rx="4" stroke="#3B82F6" strokeWidth="2" fill="none"/>
        <path d="M12 18L16 22L24 14" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "DevSpace IDE",
    description: "Ambiente de desenvolvimento integrado pensado para o aprendizado prático de programação."
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="4,28 12,18 20,22 28,10 32,14" stroke="#3B82F6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="18" r="2.5" fill="#3B82F6"/>
        <circle cx="20" cy="22" r="2.5" fill="#60A5FA"/>
        <circle cx="28" cy="10" r="2.5" fill="#93C5FD"/>
      </svg>
    ),
    title: "DataLearn Analytics",
    description: "Análise inteligente do progresso dos alunos para otimizar a jornada de aprendizado."
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="13" stroke="#3B82F6" strokeWidth="2" fill="none"/>
        <path d="M18 10V18L23 23" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="18" cy="18" r="2" fill="#3B82F6"/>
      </svg>
    ),
    title: "CertifyBit",
    description: "Sistema de certificação digital que valida e reconhece o aprendizado conquistado."
  }
];

export function SolutionsSection() {
  return (
    <section className="bg-[#F5F6FA] py-20 sm:py-28 overflow-hidden" id="solucoes">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Our Solutions
          </h2>
          <p
            className="text-gray-500 max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Soluções tecnológicas pensadas para transformar e potencializar a experiência educacional.
          </p>
        </motion.div>

        {/* 5-item horizontal row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-14">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon container */}
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-50 group-hover:bg-blue-100 transition-colors mb-5">
                {sol.icon}
              </div>
              <h3
                className="text-gray-900 mb-2 group-hover:text-blue-600 transition-colors"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
              >
                {sol.title}
              </h3>
              <p
                className="text-gray-500 text-xs leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {sol.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-12" />

        {/* Learn More button — orange as in prototype */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(249,115,22,0.35)" }}
            whileTap={{ scale: 0.97 }}
            className="px-12 py-4 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-full font-semibold tracking-widest text-sm shadow-md shadow-orange-400/20 transition-all"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            LEARN MORE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}