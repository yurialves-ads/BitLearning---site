import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <h1 className="text-4xl font-bold mb-4">Ops! Página não encontrada</h1>
        <p className="mb-6 text-lg">
            O endereço que você tentou acessar não existe.
        </p>
        <Link
            to="/"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
            Voltar para Home
        </Link>
        </div>
    );
}
