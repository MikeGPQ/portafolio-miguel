export function Sobremi() {
    const sectionStyle = { background: "#FFFFFF", borderRadius: "8px", padding: "1.5rem", marginBottom: "2rem", boxShadow: "0 2px 5px rgba(6,7,9,0.05)", borderLeft: "4px solid #F9AA8C" };
    const titleStyle = { color: "#060709", fontSize: "1.8rem", marginBottom: "1rem", fontWeight: "700" };
    const subtitleStyle = { color: "#F9AA8C", fontSize: "1.3rem", margin: "1rem 0 0.5rem 0", fontWeight: "600" };
    const textStyle = { color: "#060709", lineHeight: "1.6", margin: "0.5rem 0" };

    return (
        <div style={{ maxWidth: "800px", margin: "2rem auto", padding: "0 1rem", background: "#FFFFFF" }}>
            <div style={sectionStyle}>
                <h1 style={titleStyle}>Competencias</h1>
                <h2 style={subtitleStyle}>Lenguajes de programaci�n</h2>
                <p style={textStyle}>C++ � C# � Python � Java</p>

                <h2 style={subtitleStyle}>Herramientas</h2>
                <p style={textStyle}>Visual Studio � Android Studio � Unity � Unreal Engine � Adobe Premier � Photoshop � Blender</p>
            </div>

            <div style={sectionStyle}>
                <h1 style={titleStyle}>Experiencia Laboral</h1>
                <h2 style={subtitleStyle}>Empresas y Escuelas</h2>
                <p style={textStyle}>Maestro de Alice para ni�os - 2019 [An�huac Mayab]<br />QA de contenido multimedia - 2022-2024 [ScaleAI]<br />Asistente de ventas y contadur�a - 2025- [EICSA]</p>

                <h2 style={subtitleStyle}>Freelance</h2>
                <p style={textStyle}>Maestro de Unity para ni�os - 2020</p>
            </div>

            <div style={sectionStyle}>
                <h1 style={titleStyle}>Formaci�n</h1>
                <h2 style={subtitleStyle}>Escuelas</h2>
                <p style={textStyle}>Estudiante de Ingenier�a en Animaci�n Digital An�huac Mayab 2018-2020<br />Estudiante de Ingenier�a en Sistemas UNID 2023-Presente</p>

                <h2 style={subtitleStyle}>Cursos</h2>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                    {/* Ejemplo para im�genes de certificados */}
                    <img src="*URL_CERTIFICADO*" style={{ width: "120px", border: "2px solid #F9AA8C", borderRadius: "4px" }} alt="Certificado" />
                </div>
            </div>

            <div style={sectionStyle}>
                <h1 style={titleStyle}>Pasatiempos</h1>
                <h2 style={subtitleStyle}>Hobbies</h2>
                <p style={textStyle}>Dungeons and Dragons � Leer fantas�a � Magic the Gathering TCG � Videojuegos</p>

                <h2 style={subtitleStyle}>Ejercicio</h2>
                <p style={textStyle}>Correr 5km � Pesas</p>
            </div>
        </div>
    );
}