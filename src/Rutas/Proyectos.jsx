import { ProyectosCard } from "../Componentes/ProyectosCard"
export function Proyectos() {
    const proyectos = [
        {
            nombre: "Human Resources",
            tipo: "web",
            proyecto: "https://hrmegpq.netlify.app/",
            repositorio: "https://github.com/MikeGPQ/HR",
            descripcion: "Sistema de gesti\u00f3n de recursos humanos desarrollado con React y Firebase",
            tags: ["React", "Firebase", "HR"]
        },
        {
            nombre: "Chatbot",
            tipo: "web",
            proyecto: "https://chatbot-mikegpq.netlify.app/",
            repositorio: "https://github.com/MikeGPQ/Chatbot",
            descripcion: "Chatbot potenciado por Gemini con Google Ai Studio desarrollado con React",
            tags: ["React", "Google Ai Studio", "Support Chat"]
        }
    ];

    return (
        <div style={{
            maxWidth: "1200px",
            margin: "2rem auto",
            padding: "0 1rem"
        }}>
            <h1 style={{
                color: "#060709",
                fontSize: "2rem",
                marginBottom: "1.5rem",
                textAlign: "center",
                borderBottom: "3px solid #F9AA8C",
                paddingBottom: "0.5rem"
            }}>
                Proyectos
            </h1>


            <ProyectosCard
                proyectos={proyectos}
            />

        </div>
    );
}