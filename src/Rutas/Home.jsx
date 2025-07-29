import { VideoCard } from "../Componentes/VideoCard";

const video = 
    {
        id: "YsOQsWG6j3U",
        title: "Desarrollando Mi Portafolio Profesional con React DevLog #1",
        date: "25 jul 2025",
        tags: ["React", "Portafolio"]
    };

export function Home() {
    return (
        <div style={{maxWidth: "1200px",margin: "0 auto",  padding: "2rem 1rem", background: "#FFFFFF" }}>
            <div style={{ textAlign: "center",  padding: "3rem 1rem", display: "flex",  flexDirection: "column", alignItems: "center" }}>
                <h1 style={{ color: "#060709",fontSize: "2.5rem",  marginBottom: "1rem", fontWeight: "700", lineHeight: "1.2"}}>
                    Miguel Enrique Garc&iacute;a Parra Quevedo
                </h1>

                <p style={{ color: "#666",  fontSize: "1.2rem",  maxWidth: "600px", margin: "0 auto 2rem", lineHeight: "1.6"  }}>
                    Estudiante de Ingenier&iacute;a en Sistemas
                </p>

                <div style={{ display: "flex", gap: "1rem",  justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
                    <a href="/sobre-mi" style={{ textDecoration: "none" }}>
                        <button style={{ background: "#F9AA8C", color: "#FFFFFF",  border: "none",  padding: "0.8rem 1.5rem",   borderRadius: "50px",cursor: "pointer", fontWeight: "600",  fontSize: "1rem",transition: "all 0.3s ease" }}>
                            Con&oacute;ceme
                        </button>
                    </a>

                    <a href="/proyectos" style={{ textDecoration: "none" }}>
                        <button style={{ background: "#060709", color: "#FFFFFF", border: "none",padding: "0.8rem 1.5rem",  borderRadius: "50px", cursor: "pointer", fontWeight: "600",  fontSize: "1rem", transition: "all 0.3s ease",}}>
                            Ver Proyectos
                        </button>
                    </a>

                    <a href="/contacto" style={{ textDecoration: "none" }}>
                        <button style={{   background: "transparent",   color: "#060709",   border: "2px solid #060709",  padding: "0.8rem 1.5rem",   borderRadius: "50px",  cursor: "pointer",  fontWeight: "600",  fontSize: "1rem",  transition: "all 0.3s ease",  }}>
                            Contactar
                        </button>
                    </a>
                </div>
            </div>

            <div style={{  margin: "4rem 0",padding: "2rem",background: "#F8F8F8", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
                <h2 style={{  color: "#060709",  fontSize: "2rem",  textAlign: "center", marginBottom: "2rem", borderBottom: "3px solid #F9AA8C", paddingBottom: "0.5rem",  display: "inline-block", marginLeft: "auto", marginRight: "auto",  paddingLeft: "1rem", paddingRight: "1rem" }}>
                    Habilidades Destacadas
                </h2>

                <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1.5rem", maxWidth: "800px", margin: "0 auto" }}>
                    {[
                        { name: "JavaScript", color: "#F0DB4F" },
                        { name: "React", color: "#61DAFB" },
                        { name: "Python", color: "#3776AB" },
                        { name: "Photoshop", color: "#00599C" },
                        { name: "Unity", color: "#000000" },
                        { name: "Blender", color: "#EA7600" }
                    ].map((skill, index) => (
                        <div key={index} style={{background: "#FFFFFF", padding: "1rem 1.5rem",borderRadius: "30px", display: "flex",  alignItems: "center", gap: "0.5rem", boxShadow: "0 2px 5px rgba(0,0,0,0.1)", borderLeft: `4px solid ${skill.color}`  }}>
                            <span style={{width: "12px", height: "12px", borderRadius: "50%", background: skill.color}}></span>
                            <span style={{ fontWeight: "600", color: "#060709" }}>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ margin: "4rem 0" }}>
                <div style={{ display: "flex", justifyContent: "space-between",alignItems: "center",  marginBottom: "1.5rem",  flexWrap: "wrap" }}>
                    <h2 style={{ color: "#060709", fontSize: "2rem",  borderBottom: "3px solid #F9AA8C",  paddingBottom: "0.5rem" }}>
                        Quieres saber c&oacute;mo hice esta p&aacute;gina? Revisa mi DevLog
                    </h2>
                    <a href="/devlogs" style={{color: "#F9AA8C", textDecoration: "none",  fontWeight: "600", fontSize: "1.1rem", transition: "all 0.2s ease", }}>
                        Ver todos
                    </a>
                </div>

                <VideoCard
                    videoData={video}
                ></VideoCard>
                
            </div>
        </div>
    );
}