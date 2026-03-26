import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const photos = [
  { src: "", caption: "Nossa Equipe", category: "Equipe", size: "large" },
  { src: "", caption: "Sessão de Brainstorming", category: "Processo", size: "medium" },
  { src: "", caption: "Plataforma em Desenvolvimento", category: "Produto", size: "medium" },
  { src: "", caption: "Desenvolvimento do Projeto", category: "Processo", size: "medium" },
  { src: "", caption: "Apresentação Acadêmica", category: "Evento", size: "medium" },
  { src: "", caption: "Membro da Equipe", category: "Equipe", size: "medium" },
];

export function FotosPage() {
  return (
    <div className="bg-[#0B0F1A] min-h-screen">
      {/* Hero */}
      <div className="relative bg-[#0B0F1A] pt-32 pb-16 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-5"
          >
            <Camera className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-cyan-300 text-xs font-semibold tracking-widest uppercase">
              Galeria
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold text-white mb-4"
          >
            Fotos do Projeto
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            Galeria de fotos do projeto e momentos da equipe.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-20">
        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.caption}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 cursor-pointer bg-gray-800 flex items-center justify-center ${
                index === 0 ? "sm:col-span-2" : ""
              }`}
              style={{ aspectRatio: index === 0 ? "16/7" : "4/3" }}
            >
              {/* Placeholder branco */}
              <div className="w-full h-full bg-white/10 flex items-center justify-center text-gray-400 text-sm">
                Foto em branco
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="px-2 py-0.5 rounded-full text-xs bg-blue-500/80 text-white mb-2 inline-block">
                  {photo.category}
                </span>
                <p className="text-white font-semibold text-sm">{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}