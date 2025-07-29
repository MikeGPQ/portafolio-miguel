import { Routes, Route, NavLink } from "react-router-dom";
import { Home } from "../Rutas/Home";
import { Sobremi } from "../Rutas/sobre-mi";
import { DevLogs } from "../Rutas/DevLogs";
import { Contacto } from "../Rutas/Contacto";
import { Proyectos } from "../Rutas/Proyectos";

export function Navbar() {
    const rutas = [
        { name: "Home", path: "/" },
        { name: "Sobre Mi", path: "/sobre-mi" },
        { name: "Proyectos", path: "/proyectos" },
        { name: "DevLogs", path: "/devlogs" },
        { name: "Contacto", path: "/contacto" }
    ];

    return (
        <div style={{ fontFamily: "'Segoe UI', sans-serif", minHeight: "100vh", background: "#FFFFFF" }}>
            <nav style={{ background: "#060709", padding: "1rem 0", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
                <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
                    {rutas.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            style={({ isActive }) => ({
                                color: isActive ? "#F9AA8C" : "#CEBFC0",
                                textDecoration: "none",
                                fontWeight: "600",
                                fontSize: "1.1rem",
                                padding: "0.5rem 1rem",
                                borderRadius: "4px",
                                transition: "all 0.3s ease",
                                ":hover": { color: "#F9AA8C" }
                            })}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </nav>

            <div style={{ maxWidth: "1200px", margin: "2rem auto", padding: "0 1rem" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre-mi" element={<Sobremi />} />
                    <Route path="/proyectos" element={<Proyectos />} />
                    <Route path="/devlogs" element={<DevLogs />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Routes>
            </div>
        </div>
    );
}
