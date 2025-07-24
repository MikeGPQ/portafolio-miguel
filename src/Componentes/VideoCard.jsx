export function VideoCard({ videoData }) {
    const openVideo = () => {
        window.open(`https://youtube.com/watch?v=${videoData.id}`, "_blank", "noopener,noreferrer");
    };

    return (
        <div style={{
            background: "#FFFFFF",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            overflow: "hidden",
            transition: "transform 0.3s ease",
            ":hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 6px 16px rgba(0,0,0,0.15)"
            }
        }}>
            <div style={{ position: "relative", cursor: "pointer" }} onClick={openVideo}>
                <img
                    src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
                    at="Prueba"
                    style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderBottom: "3px solid #F9AA8C"
                    }}
                />
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background: "rgba(249, 170, 140, 0.8)",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: "50%",
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    transition: "all 0.3s ease"
                }}>
                    ▶
                </div>
            </div>

            <div style={{ padding: "1.5rem" }}>
                <h2 style={{
                    color: "#060709",
                    fontSize: "1.4rem",
                    marginBottom: "0.5rem"
                }}>
                    {videoData.title}
                </h2>

                <p style={{
                    color: "#666",
                    fontSize: "0.9rem",
                    marginBottom: "1rem"
                }}>
                    {videoData.date}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {videoData.tags.map((tag) => (
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
        </div>
    );
}