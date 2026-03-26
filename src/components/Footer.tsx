export function Footer() {
  return (
    <footer id="contato" className="bg-[#0B0F1A] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-12 flex flex-col items-center text-center gap-5">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ft-grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3B82F6" />
                <stop offset="1" stopColor="#22D3EE" />
              </linearGradient>
            </defs>
            <circle cx="18" cy="18" r="15" stroke="url(#ft-grad)" strokeWidth="2" fill="none" />
            <ellipse cx="18" cy="18" rx="7" ry="15" stroke="url(#ft-grad)" strokeWidth="1.5" fill="none" />
            <line x1="3" y1="18" x2="33" y2="18" stroke="url(#ft-grad)" strokeWidth="1.5" />
            <rect x="13" y="13" width="10" height="10" rx="1.5" fill="url(#ft-grad)" opacity="0.85" />
          </svg>
          <span
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            BitLearning
          </span>
        </div>

        {/* Institutional text */}
        <p
          className="text-gray-500 max-w-sm leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem" }}
        >
          Transformando a educação através da tecnologia. Um projeto acadêmico comprometido com o futuro do aprendizado digital e o ODS 4 da ONU.
        </p>

        {/* ODS tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span
            className="text-cyan-400 text-xs font-medium tracking-wide"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            ODS 4 — Educação de Qualidade · ONU
          </span>
        </div>

        {/* Bottom */}
        <div className="w-full border-t border-white/5 pt-6 mt-2">
          <p
            className="text-gray-600 text-xs"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            © 2026 BitLearning. Todos os direitos reservados. Projeto Integrador Acadêmico.
          </p>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
    </footer>
  );
}