import { useState } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const members = [
  {
    name: "Edvaldo Silva",
    role: "Analista de Requisitos",
    image: "/images/edvaldo.jpg",
    color: "#3B82F6",
    quote:
      "Compreender cada detalhe das necessidades do usuário é essencial para criar soluções que realmente funcionam.",
  },
  {
    name: "Yuri",
    role: "Engenheiro de Software",
    image: "/images/yuri.jpg",
    color: "#22D3EE",
    quote:
      "Transformar conceitos em código eficiente e escalável é minha forma de tornar a educação mais acessível a todos.",
  },
  {
    name: "Rennan",
    role: "PO",
    image: "/images/rennan.jpg",
    color: "#6366F1",
    quote:
      "Minha missão é garantir que a visão do produto se transforme em valor real para os alunos e professores.",
  },
  {
    name: "Flávio Barros",
    role: "Scrum Master",
    image: "/images/flavio.jpg",
    color: "#F59E0B",
    quote:
      "Facilitar o trabalho da equipe, remover obstáculos e manter o foco nos objetivos é como garantimos entregas consistentes.",
  },
  {
    name: "Vitor Gabriel",
    role: "Gerente de Projetos",
    image: "/images/vitor.jpg",
    color: "#8B5CF6",
    quote:
      "Coordenar prazos, recursos e expectativas é meu compromisso para que cada projeto entregue resultados concretos.",
  },
  {
    name: "Gabriel",
    role: "Engenheiro de Requisitos",
    image: "/images/gabriel.jpg",
    color: "#EF4444",
    quote:
      "Transformar as demandas do usuário em especificações claras é o que garante que a equipe saiba exatamente o que construir.",
  },
];

export function HighlightSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + members.length) % members.length);

  const next = () =>
    setActiveIndex((i) => (i + 1) % members.length);

  const active = members[activeIndex];

  return (
    <section className="bg-white py-20 sm:py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
            A Base da Inovação
          </h2>
          <p className="text-gray-500">
            Conheça quem faz o BitLearning acontecer todos os dias.
          </p>
        </motion.div>

        {/* Texto animado */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35 }}
            className="relative max-w-xl mx-auto mb-10"
          >
            <div className="bg-gray-50 border border-gray-200 rounded-2xl px-7 py-6 shadow-sm text-center relative">
              <p className="text-gray-700 leading-relaxed italic">
                "{active.quote}"
              </p>
              <span
                className="block mt-3 font-semibold"
                style={{ color: active.color }}
              >
                — {active.name}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Avatares */}
        <div className="flex items-end justify-center gap-4 sm:gap-6 flex-wrap">

          {/* Botão anterior */}
          <button
            onClick={prev}
            aria-label="Anterior"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-blue-500 hover:border-blue-300 transition-colors mb-4"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {members.map((member, i) => {
            const isActive = i === activeIndex;

            return (
              <motion.button
                key={member.name}
                onClick={() => setActiveIndex(i)}
                aria-label={`Selecionar ${member.name}`}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: isActive ? 1.25 : 1 }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="flex flex-col items-center gap-2"
              >
                {/* Avatar com foto */}
                <div
                  className="rounded-full flex items-center justify-center shadow-md transition-all duration-300 overflow-hidden"
                  style={{
                    width: isActive ? 72 : 52,
                    height: isActive ? 72 : 52,
                    borderRadius: "50%",
                    border: isActive ? `3px solid ${member.color}` : "2px solid #E5E7EB",
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Nome */}
                <span
                  className="text-sm"
                  style={{
                    color: isActive ? active.color : "#6B7280",
                    fontWeight: isActive ? 700 : 500,
                  }}
                >
                  {member.name}
                </span>

                {/* Cargo */}
                {isActive && (
                  <span className="text-xs text-gray-400">{member.role}</span>
                )}
              </motion.button>
            );
          })}

          {/* Botão próximo */}
          <button
            onClick={next}
            aria-label="Próximo"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-blue-500 hover:border-blue-300 transition-colors mb-4"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-8">
          {members.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Ir para membro ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? 20 : 8,
                height: 8,
                background: i === activeIndex ? active.color : "#D1D5DB",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}