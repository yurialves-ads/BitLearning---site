import { motion } from "framer-motion"; 

const team = [
  { name: "Edvaldo Silva", role: "DESIGN & UI", initials: "ES", highlight: false },
  { name: "Yuri", role: "DESENVOLVEDOR", initials: "YU", highlight: true },
  { name: "Rennan", role: "GESTOR", initials: "RE", highlight: false },
  { name: "Flávio Barros", role: "ANÁLISE  DADOS", initials: "FB", highlight: false },
  { name: "Vitor Gabriel", role: "PESQUISA", initials: "VG", highlight: false },
  { name: "Gabriel", role: "MARKETING", initials: "GA", highlight: false },
];

function TeamCard({ member, index }: { member: (typeof team)[0]; index: number }) {
  return (
    <motion.div
      key={member.name}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ scale: 1.06 }}
      className="group relative cursor-default"
    >
      {/* Neon border glow on hover */}
      <div
        className={`absolute -inset-px rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-400 ${
          member.highlight
            ? "bg-gradient-to-br from-blue-400 to-cyan-300 opacity-40"
            : "bg-gradient-to-br from-blue-600 to-cyan-400"
        }`}
      />

      {/* Card body */}
      <div
        className={`relative flex flex-col items-center text-center px-6 pt-8 pb-7 rounded-2xl border transition-all duration-300 ${
          member.highlight
            ? "bg-[#0d1b3e] border-cyan-400/60 shadow-[0_0_24px_rgba(34,211,238,0.25)]"
            : "bg-[#0f1628] border-blue-500/25 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
        }`}
      >
        {/* Avatar circle */}
        <div className="relative mb-5">
          {/* Glow ring */}
          <div
            className={`absolute inset-0 rounded-full blur-md transition-all duration-300 ${
              member.highlight
                ? "bg-gradient-to-br from-blue-400 to-cyan-300 opacity-60 group-hover:opacity-80"
                : "bg-gradient-to-br from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-50"
            }`}
          />
          {/* Circle */}
          <div
            className={`relative w-20 h-20 rounded-full flex items-center justify-center border-2 ${
              member.highlight
                ? "bg-gradient-to-br from-blue-500 to-cyan-400 border-cyan-300"
                : "bg-gradient-to-br from-blue-700/60 to-cyan-600/40 border-blue-500/50 group-hover:border-cyan-400/70"
            }`}
          >
            {/* Person silhouette SVG */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="14" r="7" fill="white" fillOpacity="0.85" />
              <ellipse cx="20" cy="32" rx="12" ry="8" fill="white" fillOpacity="0.85" />
            </svg>
          </div>
        </div>

        {/* Name */}
        <h3
          className="text-white mb-2 truncate w-full"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "1rem" }}
        >
          {member.name}
        </h3>

        {/* Role */}
        <span
          className={`text-xs tracking-widest ${member.highlight ? "text-cyan-300" : "text-blue-400 group-hover:text-cyan-400"} transition-colors`}
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
        >
          {member.role}
        </span>

        {/* Bottom glow bar */}
        <div
          className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-opacity duration-300 ${
            member.highlight ? "opacity-60" : "opacity-0 group-hover:opacity-60"
          }`}
        />
      </div>
    </motion.div>
  );
}

export function TeamSection() {
  const firstRow = team.slice(0, 4);
  const secondRow = team.slice(4);

  return (
    <section
      id="equipe"
      className="relative py-24 sm:py-32 bg-[#0B0F1A] overflow-hidden"
    >
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle, #22D3EE 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Nossa Equipe
          </h2>
          <p
            className="text-gray-400 max-w-lg mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Profissionais dedicados que unem criatividade e tecnologia para transformar a educação digital.
          </p>
        </motion.div>

        {/* Row 1 — 4 cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-5">
          {firstRow.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* Row 2 — 2 cards centered */}
        <div className="flex justify-center gap-5">
          {secondRow.map((member, i) => (
            <div key={member.name} className="w-full max-w-[calc(25%-0.75rem)]" style={{ minWidth: "180px", maxWidth: "260px" }}>
              <TeamCard member={member} index={i + 4} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
