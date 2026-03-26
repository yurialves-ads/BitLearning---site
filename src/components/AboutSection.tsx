import { motion } from "framer-motion";

const IMG_MAIN = "https://i0.wp.com/blog.brightcities.city/wp-content/uploads/2020/02/ODS4_pt.jpg?resize=900%2C442&is-pending-load=1#038;ssl=1" ;
const IMG_SM1 = "https://educrea.cl/wp-content/uploads/2019/10/Alerta-Temprana1200x315.png";
const IMG_SM2 = "https://horacampinas.com.br/wp-content/uploads/2024/07/Imagem-do-WhatsApp-de-2024-07-22-as-16.36.21_122d4634.jpg";
const IMG_LG = "https://proinclusiva.org/wp-content/uploads/2021/07/SDG-4-grande-es-1024x484.jpg";

export function AboutSection() {
  return (
    <section id="sobre" className="overflow-hidden">
      {/* ── Upper: Split panel ─────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row min-h-[520px]">
        {/* LEFT — Image + blue overlay + "Our Values" */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="relative lg:w-1/2 min-h-[320px] lg:min-h-[520px] overflow-hidden"
        >
          <img
            src={IMG_MAIN}
            alt="Our Values"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Blue gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700/80 via-blue-600/70 to-cyan-500/60" />
          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xs tracking-[0.3em] text-cyan-200 mb-4 uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              BitLearning
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
              style={{ fontFamily: "Poppins, sans-serif", textShadow: "0 2px 24px rgba(0,0,0,0.4)" }}
            >
              Sobre a ODS 4
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-5 w-16 h-1 bg-cyan-300 rounded-full"
            />
          </div>
        </motion.div>

        {/* RIGHT — Light background, text content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="lg:w-1/2 bg-white flex flex-col justify-center px-10 sm:px-14 lg:px-16 py-16 lg:py-20"
        >
          <span
            className="text-xs tracking-[0.25em] text-blue-500 uppercase mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Bem-vindo à ODS 4
          </span>
          <h3
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-snug"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Conheça a ODS 4
          </h3>
          <p
            className="text-base text-blue-500 font-semibold mb-6 tracking-wide"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Educação · Inclusão · Oportunidade · Futuro
          </p>
          <p
            className="text-gray-600 leading-relaxed max-w-md"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A ODS 4 – Educação de Qualidade, definida pela Organização das Nações Unidas dentro da Agenda 2030, representa o compromisso global de garantir educação inclusiva, equitativa e de qualidade para todos.Seu propósito vai além do acesso à escola: busca transformar a educação em uma ferramenta real de desenvolvimento social, econômico e humano. Isso envolve melhorar a qualidade do ensino, reduzir desigualdades e ampliar oportunidades de aprendizagem ao longo da vida.
          </p>
          <p
            className="mt-4 text-gray-500 leading-relaxed max-w-md"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A ODS 4 reconhece que a educação é a base para um futuro sustentável, preparando indivíduos para os desafios do mundo moderno e promovendo inclusão, inovação e cidadania global.
          </p>
        </motion.div>
      </div>

      {/* ── Lower: Asymmetric image grid ──────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col sm:flex-row h-64 sm:h-80 overflow-hidden"
      >
        {/* Two small images stacked on left */}
        <div className="flex flex-row sm:flex-col sm:w-2/5 flex-1 sm:flex-none">
          <div className="flex-1 overflow-hidden relative">
            <img
              src={IMG_SM1}
              alt="Estudantes"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-blue-600/20 hover:bg-blue-600/0 transition-colors duration-500" />
          </div>
          <div className="flex-1 overflow-hidden relative border-t sm:border-t border-white/20">
            <img
              src={IMG_SM2}
              alt="Aprendizado digital"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-cyan-600/20 hover:bg-cyan-600/0 transition-colors duration-500" />
          </div>
        </div>

        {/* One large image on right */}
        <div className="sm:w-3/5 flex-1 sm:flex-none overflow-hidden relative border-l border-white/10">
          <img
            src={IMG_LG}
            alt="Tecnologia e código"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-blue-900/30 hover:bg-blue-900/0 transition-colors duration-500" />
        </div>
      </motion.div>
    </section>
  );
}
