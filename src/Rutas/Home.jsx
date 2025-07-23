export function Home() {
    return (
        <div style={{ textAlign: "center", padding: "3rem 1rem", maxWidth: "800px", margin: "0 auto", background: "#FFFFFF" }}>
            <h1 style={{ color: "#060709", fontSize: "2.5rem", marginBottom: "1rem", fontWeight: "700" }}>
                Miguel Enrique Garcia Parra Quevedo
            </h1>

            <div style={{ margin: "2rem 0" }}>
                <img
                    src="*URL_DE_TU_FOTO*"
                    style={{ borderRadius: "50%", width: "200px", height: "200px", objectFit: "cover", border: "4px solid #F9AA8C", boxShadow: "0 4px 8px rgba(6,7,9,0.1)" }}
                    alt="Foto de perfil"
                />
            </div>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
                <a href="https://github.com/MikeGPQ" style={{ textDecoration: "none" }}>
                    <button style={{ background: "#060709", color: "#FFFFFF", border: "none", padding: "0.8rem 1.5rem", borderRadius: "50px", cursor: "pointer", fontWeight: "600", fontSize: "1rem", transition: "all 0.3s ease", ":hover": { background: "#F9AA8C", transform: "translateY(-2px)" } }}>Github</button>
                </a>
                <a href="https://mx.linkedin.com/in/miguel-garcía-parra-66b733294" style={{ textDecoration: "none" }}>
                    <button style={{ background: "#060709", color: "#FFFFFF", border: "none", padding: "0.8rem 1.5rem", borderRadius: "50px", cursor: "pointer", fontWeight: "600", fontSize: "1rem", transition: "all 0.3s ease", ":hover": { background: "#F9AA8C", transform: "translateY(-2px)" } }}>LinkedIn</button>
                </a>
            </div>
        </div>
    );
}