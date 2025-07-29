import { ProyectosCard } from "../Componentes/ProyectosCard"
export function Proyectos() {
    const proyectos = [
        {
            nombre: "Human Resources",
            tipo: "web",
            enlace: "https://hrmegpq.netlify.app/",
            descripcion: "Sistema de gesti\u00f3n de recursos humanos desarrollado con React y Firebase",
            tags: ["React", "Firebase", "HR"]
        }
    ];

    return (
        <div style={{ maxWidth: "1200px", margin: "2rem auto", padding: "0 1rem" }}>
            <h1 style={{
                color: "#060709",
                fontSize: "2.5rem",
                marginBottom: "2rem",
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