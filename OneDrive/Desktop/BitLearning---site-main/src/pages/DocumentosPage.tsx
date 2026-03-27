import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Search,
  FolderOpen,
  Presentation,
} from "lucide-react";

type DocCategory = "Todos" | "Relatórios" | "Apresentações" | "Planilhas" | "Pesquisas" | "Atas";

const categories: DocCategory[] = ["Todos", "Relatórios", "Apresentações", "Planilhas", "Pesquisas", "Atas"];

const documents = [
  {
    id: 1,
    title: "Plano de Projeto Integrador",
    description: "Documento base com escopo, objetivos e metodologia do projeto BitLearning.",
    category: "Relatórios" as DocCategory,
    type: "PDF",
    size: "2.4 MB",
    date: "Mar 2026",
    author: "Rennan",
    icon: FileText,
    color: "from-blue-500 to-blue-700",
    status: "Aprovado",
  },
  {
    id: 2,
    title: "Apresentação Inicial — Pitch Deck",
    description: "Slides de apresentação do conceito BitLearning para a banca avaliadora.",
    category: "Apresentações" as DocCategory,
    type: "PPTX",
    size: "8.1 MB",
    date: "Mar 2026",
    author: "Edvaldo Silva",
    icon: Presentation,
    color: "from-cyan-500 to-blue-600",
    status: "Aprovado",
  },
  // ... demais documentos
];

export function DocumentosPage() {
  const [activeCategory, setActiveCategory] = useState<DocCategory>("Todos");
  const [search, setSearch] = useState("");

  const filtered = documents.filter((doc) => {
    const matchCat = activeCategory === "Todos" || doc.category === activeCategory;
    const matchSearch =
      search === "" ||
      doc.title.toLowerCase().includes(search.toLowerCase()) ||
      doc.description.toLowerCase().includes(search.toLowerCase()) ||
      doc.author.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="bg-[#0B0F1A] min-h-screen">
      {/* Hero */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle, #3B82F6 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-1/3 w-96 h-80 bg-blue-600/12 rounded-full blur-[90px]" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-5"
          >
            <FolderOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-cyan-300 text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
              Repositório de Documentos
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Menu de{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Documentos
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="text-gray-400 max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1.05rem" }}
          >
            Todos os documentos, relatórios, atas e apresentações do projeto BitLearning organizados e acessíveis.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-20">
        {/* Search + filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Buscar documentos, autores..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/7 transition-all"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
          </div>

          {/* Stats */}
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] flex-shrink-0">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span className="text-gray-400 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              <span className="text-white font-semibold">{filtered.length}</span> de {documents.length} documentos
            </span>
          </div>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-md shadow-blue-500/20"
                  : "border border-white/10 bg-white/[0.03] text-gray-400 hover:text-white hover:border-white/20"
              }`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Document cards (temporariamente ocultos) */}
        {/*
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((doc, index) => {
            const Icon = doc.icon;
            return (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group relative rounded-2xl border border-white/10 bg-[#0f1628]/80 p-5 hover:border-blue-400/30 hover:bg-[#0f1628] transition-all duration-300 flex flex-col"
              >
                ...conteúdo do card...
              </motion.div>
            );
          })}
        </div>
        */}

        {/* Summary footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          
        </motion.div>
      </div>
    </div>
  );
}