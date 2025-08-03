import { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from "react-router-dom";
import { Home } from "../Rutas/Home";
import { Sobremi } from "../Rutas/sobre-mi";
import { DevLogs } from "../Rutas/DevLogs";
import { Contacto } from "../Rutas/Contacto";
import { Proyectos } from "../Rutas/Proyectos";

export function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const rutas = [
        { name: "Home", path: "/" },
        { name: "Sobre Mi", path: "/sobre-mi" },
        { name: "Proyectos", path: "/proyectos" },
        { name: "DevLogs", path: "/devlogs" },
        { name: "Contacto", path: "/contacto" }
    ];

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div style={{ fontFamily: "'Segoe UI', sans-serif", minHeight: "100vh", background: "#FFFFFF" }}>
            <nav style={{  background: "#060709",  padding: "1rem 0",  boxShadow: "0 2px 10px rgba(0,0,0,0.1)", position: "relative" }}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 1rem",  maxWidth: "1200px",  margin: "0 auto"  }}>
                    <div style={{ color: "#CEBFC0", fontWeight: "600", fontSize: "1.2rem" }}>
                        Portfolio
                    </div>

                    {isMobile ? (
                        <div
                            onClick={() => setMenuOpen(!menuOpen)}
                            style={{ cursor: "pointer", color: "#CEBFC0", fontSize: "1.5rem", padding: "0.5rem" }} >
                            ...
                        </div>
                    ) : (
                        <div style={{ display: "flex", gap: "1rem" }}>
                            {rutas.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    style={({ isActive }) => ({color: isActive ? "#F9AA8C" : "#CEBFC0", textDecoration: "none",  fontWeight: "600", fontSize: "1.1rem",padding: "0.5rem 1rem",   borderRadius: "4px", transition: "all 0.3s ease",
                                        ":hover": { color: "#F9AA8C" }
                                    })}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    )}
                </div>

                {isMobile && menuOpen && (
                    <div style={{ background: "#060709", padding: "1rem",  position: "absolute", top: "100%",  left: 0, right: 0, zIndex: 1000,  boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {rutas.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setMenuOpen(false)}
                                    style={({ isActive }) => ({ color: isActive ? "#F9AA8C" : "#CEBFC0", textDecoration: "none", fontWeight: "600", fontSize: "1.1rem", padding: "0.8rem 1rem", borderRadius: "4px", transition: "all 0.3s ease",
                                        ":hover": {
                                            color: "#F9AA8C",
                                            background: "rgba(249, 170, 140, 0.1)"
                                        }
                                    })}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                )}
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