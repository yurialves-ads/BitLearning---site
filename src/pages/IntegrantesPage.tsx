import { motion } from "framer-motion";
import { Users, Mail, Link } from "lucide-react";

const members = [
  {
    name: "Edvaldo Silva",
    role: "Analista de Requisitos",
    description: "Responsável por transformar demandas em requisitos claros e precisos.",
    skills: ["Análise de Requisitos", "Documentação", "Comunicação"],
    image: `${import.meta.env.BASE_URL}images/edvaldo.jpg`,
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Yuri",
    role: "Engenheiro de Software",
    description: "Desenvolve soluções robustas e escaláveis para a plataforma.",
    skills: ["React", "TypeScript", "Tailwind","Html","Java","JavaScript","SQL"],
    image: `${import.meta.env.BASE_URL}images/yuri.jpg`,
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Rennan",
    role: "PO",
    description: "Garantir que a visão do produto se transforme em valor real para os usuários.",
    skills: ["Scrum", "Gestão de Produto"],
    image: `${import.meta.env.BASE_URL}images/rennan.jpg`,
    color: "from-blue-600 to-indigo-600",
  },
  {
    name: "Flávio Barros",
    role: "Scrum Master",
    description: "Facilita a equipe e garante entregas consistentes.",
    skills: ["Scrum", "Gestão Ágil"],
    image: `${import.meta.env.BASE_URL}images/flavio.jpg`,
    color: "from-indigo-500 to-blue-500",
  },
  {
    name: "Vitor Gabriel",
    role: "Gerente de Projetos",
    description: "Coordena recursos, prazos e objetivos para entrega de resultados.",
    skills: ["Gestão de Projetos", "Planejamento"],
    image: `${import.meta.env.BASE_URL}images/vitor.jpg`,
    color: "from-blue-400 to-cyan-600",
  },
  {
    name: "Gabriel",
    role: "Engenheiro de Requisitos",
    description: "Transforma demandas do usuário em especificações claras para a equipe.",
    skills: ["Requisitos", "Documentação", "Análise"],
    image: `${import.meta.env.BASE_URL}images/gabriel.jpg`,
    color: "from-cyan-400 to-blue-500",
  },
];

type Member = (typeof members)[0];

function MemberCard({ member, index }: { member: Member; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-[#0f172a] border border-blue-500/20 rounded-xl p-5 flex flex-col"
    >
      {/* Avatar com foto */}
      <div className="w-14 h-14 rounded-lg overflow-hidden mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Nome */}
      <h3 className="text-white font-bold">{member.name}</h3>
      <p className="text-blue-400 text-sm mb-2">{member.role}</p>

      {/* Descrição */}
      <p className="text-gray-400 text-sm mb-4">{member.description}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {member.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs bg-white/10 px-2 py-1 rounded"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Social */}
      <div className="flex gap-2 mt-auto">
        <button aria-label="Link" className="p-2 bg-white/10 rounded">
          <Link size={16} />
        </button>

        <button aria-label="Email" className="p-2 bg-white/10 rounded">
          <Mail size={16} />
        </button>
      </div>
    </motion.div>
  );
}

export function IntegrantesPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* Header */}
      <div className="text-center py-20">
        <Users className="mx-auto mb-4" size={28} />
        <h1 className="text-4xl font-bold">Integrantes</h1>
        <p className="text-gray-400">Conheça nossa equipe</p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <MemberCard key={member.name} member={member} index={index} />
        ))}
      </div>
    </div>
  );
}