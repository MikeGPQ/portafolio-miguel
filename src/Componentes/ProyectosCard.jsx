export function ProyectosCard({ proyectos }) {
    const isMobile = window.innerWidth <= 768;

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fill, minmax(${isMobile ? "280px" : "350px"}, 1fr))`,
            gap: "1.5rem",
            padding: "1rem"
        }}>
            {proyectos.map((proyecto) => (
                <div key={proyecto.id} style={{
                    background: "#FFFFFF",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    transition: "transform 0.3s ease"
                }}>
                    <div style={{ padding: "1.2rem", borderBottom: "3px solid #F9AA8C" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                            <h2 style={{ color: "#060709", fontSize: "1.2rem", margin: 0 }}>{proyecto.nombre}</h2>
                        </div>
                        <p style={{ color: "#666", fontSize: "0.85rem", marginBottom: "1rem" }}>
                            {proyecto.descripcion}
                        </p>

                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                            {proyecto.tags.map((tag) => (
                                <span key={tag} style={{
                                    background: "#F9AA8C",
                                    color: "#FFFFFF",
                                    padding: "0.3rem 0.8rem",
                                    borderRadius: "20px",
                                    fontSize: "0.8rem"
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {proyecto.tipo === "web" && (
                        <div style={{
                            position: "relative",
                            height: "180px",
                            background: `linear-gradient(135deg, #F9AA8C, #060709)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "1rem"  
                            }}>
                            
                            <a
                                href={proyecto.proyecto}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none" }}
                            >
                                <div style={{
                                background: "rgba(255, 255, 255, 0.8)",
                                color: "#060709",
                                padding: "0.8rem 1.5rem",
                                borderRadius: "50px",
                                fontWeight: "600",
                                fontSize: "0.95rem",
                                cursor: "pointer",
                                textAlign: "center"
                                }}>
                                Ver Ejecutable
                                </div>
                            </a>

                            
                            <a
                                href={proyecto.repositorio}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none" }}
                            >
                                <div style={{
                                background: "rgba(255, 255, 255, 0.8)",
                                color: "#060709",
                                padding: "0.8rem 1.5rem",
                                borderRadius: "50px",
                                fontWeight: "600",
                                fontSize: "0.95rem",
                                cursor: "pointer",
                                textAlign: "center"
                                }}>
                                Ver Repositorio
                                </div>
                            </a>
                            </div>

                        

                        
                    )}

                    {proyecto.tipo === "imagen" && (
                        <a
                            href={proyecto.imagen}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                        >
                            <img
                                src={proyecto.imagen}
                                alt={proyecto.nombre}
                                style={{
                                    width: "100%",
                                    height: "180px",
                                    objectFit: "cover",
                                    display: "block"
                                }}
                            />
                        </a>
                    )}

                    {proyecto.tipo === "video" && (
                        <div
                            style={{
                                position: "relative",
                                height: "180px",
                                background: "#060709",
                                cursor: "pointer"
                            }}
                            onClick={() => window.open(`https://youtube.com/watch?v=${proyecto.videoId}`, "_blank")}
                        >
                            <div style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                background: "rgba(249, 170, 140, 0.8)",
                                color: "#FFFFFF",
                                border: "none",
                                borderRadius: "50%",
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "1.2rem"
                            }}>
                                ?
                            </div>
                            <div style={{
                                position: "absolute",
                                bottom: "10px",
                                right: "10px",
                                color: "#FFFFFF",
                                background: "rgba(0,0,0,0.6)",
                                padding: "0.3rem 0.8rem",
                                borderRadius: "4px",
                                fontSize: "0.8rem"
                            }}>
                                Ver Video
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}