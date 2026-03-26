// Importação de componentes de seção da página.
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { HighlightSection } from "../components/HighlightSection";

// Componente funcional que representa a página inicial (Home).
// Atua como um "container" responsável por compor as seções da landing page.
export function HomePage() {
    return (
        // React Fragment evita a criação de uma div desnecessária no DOM,
        // mantendo a estrutura mais limpa e performática.
        <>
        
        {/* Seção principal (hero): geralmente contém título, call-to-action e destaque visual */}
        <HeroSection />


        {/* Seção institucional (sobre o projeto ou empresa) */}
        <AboutSection />

        {/* Seção de destaque final (pode conter diferenciais ou chamada final) */}
        <HighlightSection />
        
        </>
    );
}