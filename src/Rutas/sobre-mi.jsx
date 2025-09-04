import { Tarjeta } from "../Componentes/Tarjeta";

export function Sobremi() {
    return (
        <div style={{
            maxWidth: "800px",
            margin: "2rem auto",
            padding: "0 1rem",
            background: "#FFFFFF"
        }}>
            <Tarjeta
                title="Competencias"
                sections={[
                    {
                        subtitle: "Lenguajes de programación",
                        content: [
                            { text: "C++" },
                            { text: "Python" },
                            { text: "JavaScript" }
                        ]
                    },
                    {
                        subtitle: "Herramientas",
                        content: [
                            { text: "Visual Studio" },
                            { text: "Android Studio" },
                            { text: "Unity" },
                            { text: "Unreal Engine" },
                            { text: "Adobe Premier" },
                            { text: "Photoshop" },
                            {text: "Blender"}
                        ]
                    }
                ]}
            />

            <Tarjeta
                title="Experiencia Laboral"
                sections={[
                    {
                        subtitle: "Empresas y Escuelas",
                        content: [
                            { text: "Maestro de Alice para niños - 2019 [Anáhuac Mayab]" },
                            { text: "QA de contenido multimedia - 2022-2024 [ScaleAI]" },
                            { text: "Asistente de ventas y contaduría - 2025- [EICSA]" }
                        ]
                    },
                    {
                        subtitle: "Freelance",
                        content: [
                            { text: "Maestro de Unity para niños - 2020" }
                        ]
                    }
                ]}
            />

            <Tarjeta
                title="Formación"
                sections={[
                    {
                        subtitle: "Escuelas",
                        content: [
                            { text: "Estudiante de Ingeniería en Animación Digital Anáhuac Mayab 2018-2020" },
                            { text: "Estudiante de Ingeniería en Sistemas UNID 2023-Presente" }
                        ]
                    },
                    {
                        subtitle: "Cursos",
                        content: [
                            { 
                                text: "Programming Foundations: Fundamentals - 2021",
                                link: {
                                    text: "(Ver certificado)",
                                    url: "https://www.linkedin.com/learning/certificates/7f76e5746b15be93a0d5bc9e553e06727631a953121a7693f8c8beed7128a590?trk=share_certificate"
                                }
                            },
                            { 
                                text: "Scrum Essential Training - 2022",
                                link: {
                                    text: "(Ver certificado)",
                                    url: "https://www.linkedin.com/learning/certificates/6017efb568d9bfc7c363a9df28b3c1a6ebf085d00909f826b76e319c88841e82?trk=share_certificate"
                                }
                            },
                            { 
                                text: "Python Essential Training - 2022",
                                link: {
                                    text: "(Ver certificado)",
                                    url: "https://www.linkedin.com/learning/certificates/c8769ed753282a8e3f7583ac029666e62d1f4b764580436d18d786a8277a0fcc?trk=share_certificate"
                                }
                            },
                            { 
                                text: "Learning Python - 2025",
                                link: {
                                    text: "(Ver certificado)",
                                    url: "https://www.linkedin.com/learning/certificates/0d46b4d4af764dc24df11854383abc10c9d3d55ac98ae8911a8b99d28aa0a5df?trk=share_certificate"
                                }
                            },
                            { 
                                text: "Advanced Python: Top Tools for Data Science and Engineering - 2025",
                                link: {
                                    text: "(Ver certificado)",
                                    url: "https://www.linkedin.com/learning/certificates/394b2c2368de3d36670c8d3dea1ec968a423e6279b3a82e1410b5c68ebe62a54?trk=share_certificate"
                                }
                            }
                        ]
                    }
                ]}
            />

            <Tarjeta
                title="Pasatiempos"
                sections={[
                    {
                        subtitle: "Hobbies",
                        content: [
                            { text: "Dungeons and Dragons" },
                            { text: "Leer fantasía" },
                            { text: "Magic the Gathering TCG" },
                            { text: "Videojuegos" }
                        ]
                    },
                    {
                        subtitle: "Ejercicio",
                        content: [
                            { text: "Correr 5km" },
                            { text: "Pesas" }
                        ]
                    }
                ]}
            />
        </div>
    );
}