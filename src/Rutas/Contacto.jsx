import { ButtonRedes } from "../Componentes/ButtonRedes";

export function Contacto() {
    return (
        <div style={{maxWidth: "800px", margin: "2rem auto",padding: "2rem", background: "#FFFFFF", borderRadius: "8px",boxShadow: "0 2px 10px rgba(0,0,0,0.1)"}}>
            <h1 style={{color: "#060709", fontSize: "2rem",textAlign: "center", marginBottom: "2rem", borderBottom: "3px solid #F9AA8C", paddingBottom: "0.5rem" }}>
                Contacto
            </h1>

            <div style={{  display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "3rem"}}>
                <div style={{ background: "#F8F8F8", borderRadius: "8px", padding: "1.5rem", boxShadow: "0 2px 5px rgba(6,7,9,0.05)", borderLeft: "4px solid #F9AA8C" }}>
                    <h2 style={{ color: "#060709", fontSize: "1.4rem", marginBottom: "1rem", fontWeight: "600" }}>Correo Electr&oacute;nico </h2>
                    <a
                        href="mailto:miguelgarciaparra@hotmail.com"
                        style={{ color: "#F9AA8C", textDecoration: "none", fontWeight: "500", fontSize: "1.1rem", display: "block", padding: "0.5rem 0", transition: "all 0.2s ease" }}
                    >
                        miguelgarciaparra@hotmail.com
                    </a>
                </div>

                <div style={{ background: "#F8F8F8", borderRadius: "8px", padding: "1.5rem", boxShadow: "0 2px 5px rgba(6,7,9,0.05)", borderLeft: "4px solid #F9AA8C" }}>
                    <h2 style={{ color: "#060709", fontSize: "1.4rem", marginBottom: "1rem", fontWeight: "600" }} >Tel&eacute;fono</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <a
                            href="https://wa.me/529811182975"
                            style={{color: "#F9AA8C",textDecoration: "none", fontWeight: "500", fontSize: "1.1rem", display: "block", padding: "0.5rem 0",transition: "all 0.2s ease"}}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WhatsApp: 981-118-2975
                        </a>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: "center" }}>
                <h2 style={{ color: "#060709", fontSize: "1.4rem", marginBottom: "1rem", fontWeight: "600"}}>
                    Encu&eacute;ntrame en redes
                </h2>

                <div style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    flexWrap: "wrap"
                }}>
                    <ButtonRedes
                        url="https://github.com/MikeGPQ"
                        texto="GitHub"
                    />
                    <ButtonRedes
                        url="https://mx.linkedin.com/in/miguel-garcía-parra-66b733294"
                        texto="LinkedIn"
                    />
                </div>
            </div>
        </div>
    );
}

