import { useState, useEffect } from 'react';
import { VideoCard } from "../Componentes/VideoCard";
import { ProgresCircle } from '../Componentes/ProgresCircle';

const video =
{
    id: "YsOQsWG6j3U",
    title: "Desarrollando Mi Portafolio Profesional con React DevLog #1",
    date: "25 jul 2025",
    tags: ["React", "Portafolio"]
};

const progressItems = [
    { 
      percentage: 80, 
      title: "Chatbot",
      type: "project", 
      url:"https://chatbot-mikegpq.netlify.app/"
    },{ 
      percentage: 80, 
      title: "Polars + Matplotlib: Showing Big Data",
      type: "project",
      url: "https://polarsgraphs.onrender.com"
    }
  ];

  
export function Home() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem", background: "#FFFFFF" }}>
            <div style={{ textAlign: "center",  padding: isMobile ? "1.5rem 1rem" : "3rem 1rem",  display: "flex",  flexDirection: "column", alignItems: "center" }}>
                <h1 style={{color: "#060709",  fontSize: isMobile ? "1.8rem" : "2.5rem", marginBottom: "1rem",  fontWeight: "700",  lineHeight: "1.2" }}>
                    Miguel Enrique Garc&iacute;a Parra Quevedo
                </h1>

                <p style={{ color: "#666", fontSize: isMobile ? "1rem" : "1.2rem",  maxWidth: "600px",  margin: "0 auto 2rem", lineHeight: "1.6" }}>
                    Estudiante de Ingenier&iacute;a en Sistemas
                </p>

                <div style={{display: "flex", gap: "1rem", justifyContent: "center",  flexWrap: "wrap", marginBottom: "2rem",  flexDirection: isMobile ? "column" : "row", width: isMobile ? "100%" : "auto"}}>
                    <a href="/sobre-mi" style={{ textDecoration: "none", width: isMobile ? "100%" : "auto" }}>
                        <button style={{ background: "#F9AA8C", color: "#FFFFFF",  border: "none",   padding: "0.8rem 1.5rem",  borderRadius: "50px", cursor: "pointer", fontWeight: "600",  fontSize: "1rem",  transition: "all 0.3s ease", width: isMobile ? "100%" : "auto"  }}>
                            Con&oacute;ceme
                        </button>
                    </a>

                    <a href="/proyectos" style={{ textDecoration: "none", width: isMobile ? "100%" : "auto" }}>
                        <button style={{ background: "#060709", color: "#FFFFFF", border: "none", padding: "0.8rem 1.5rem", borderRadius: "50px",cursor: "pointer", fontWeight: "600",  fontSize: "1rem", transition: "all 0.3s ease", width: isMobile ? "100%" : "auto"  }}>
                            Ver Proyectos
                        </button>
                    </a>

                    <a href="/contacto" style={{ textDecoration: "none", width: isMobile ? "100%" : "auto" }}>
                        <button style={{  background: "transparent",color: "#060709",border: "2px solid #060709", padding: "0.8rem 1.5rem",borderRadius: "50px",  cursor: "pointer", fontWeight: "600",  fontSize: "1rem", transition: "all 0.3s ease",  width: isMobile ? "100%" : "auto" }}>
                            Contactar
                        </button>
                    </a>
                </div>
            </div>

                    <div style={{ 
                margin: isMobile ? "2rem 0" : "4rem 0", 
                padding: isMobile ? "1rem" : "2rem", 
                background: "#F8F8F8", 
                borderRadius: "8px", 
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)" 
            }}>
                <h2 style={{ 
                color: "#060709", 
                fontSize: isMobile ? "1.5rem" : "2rem", 
                textAlign: "center", 
                marginBottom: "1.5rem", 
                borderBottom: "3px solid #F9AA8C", 
                paddingBottom: "0.5rem", 
                display: "inline-block", 
                paddingLeft: "1rem", 
                paddingRight: "1rem" 
                }}>
                Progreso
                </h2>

                <p style={{  textAlign: "left",  fontSize: "0.9rem",  color: "#666",  marginTop: "0.5rem" }}>
                    Azul - proyectos / Amarillo - cursos
                </p>
                
                <ProgresCircle progressItems={progressItems}/>
            </div>

            <div style={{ margin: isMobile ? "2rem 0" : "4rem 0", padding: isMobile ? "1rem" : "2rem", background: "#F8F8F8", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
                <h2 style={{ color: "#060709", fontSize: isMobile ? "1.5rem" : "2rem", textAlign: "center",  marginBottom: "1.5rem", borderBottom: "3px solid #F9AA8C", paddingBottom: "0.5rem", display: "inline-block",  paddingLeft: "1rem", paddingRight: "1rem" }}>
                    Habilidades Destacadas
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(3, 1fr)",   gap: "1rem", maxWidth: "800px",  margin: "0 auto"
                }}>
                    {[
                        { name: "JavaScript"},
                        { name: "React"},
                        { name: "Python"},
                        { name: "Photoshop"},
                        { name: "Unity"},
                        { name: "Blender"},
                        {name: "HTML"}
                    ].map((skill, index) => (
                        <div key={index} style={{ background: "#FFFFFF", padding: "1rem",  borderRadius: "30px",  display: "flex", alignItems: "center", gap: "0.5rem",  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",  borderLeft: `4px solid ${"#F9AA8C"}`  }}>
                            <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#F9AA8C" }}></span>
                            <span style={{ fontWeight: "600", color: "#060709" }}>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ margin: isMobile ? "2rem 0" : "4rem 0" }}>
                <div style={{ display: "flex",justifyContent: "space-between",  alignItems: "center",  marginBottom: "1.5rem",flexWrap: "wrap",  gap: "1rem" }}>
                    <h2 style={{ color: "#060709", fontSize: isMobile ? "1.5rem" : "2rem",  borderBottom: "3px solid #F9AA8C",  paddingBottom: "0.5rem",  flex: 1,  minWidth: "300px"}}>
                        &iquest;Quieres saber c&oacute;mo hice esta p&aacute;gina? Revisa mi DevLog
                    </h2>
                    <a href="/devlogs" style={{  color: "#F9AA8C",textDecoration: "none", fontWeight: "600", fontSize: "1.1rem", transition: "all 0.2s ease", whiteSpace: "nowrap" }}>
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