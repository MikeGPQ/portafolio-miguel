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
                        subtitle: "Lenguajes de programaci\u00f3n",
                        text: "C++ \u00b7 C# \u00b7 Python \u00b7 JavaScript"
                    },
                    {
                        subtitle: "Herramientas",
                        text: "Visual Studio \u00b7 Android Studio \u00b7 Unity \u00b7 Unreal Engine \u00b7 Adobe Premier \u00b7 Photoshop \u00b7 Blender"
                    }
                ]}
            />

            <Tarjeta
                title="Experiencia Laboral"
                sections={[
                    {
                        subtitle: "Empresas y Escuelas",
                        text: "Maestro de Alice para ni\u00f1os - 2019 [An\u00e1huac Mayab]\nQA de contenido multimedia - 2022-2024 [ScaleAI]\nAsistente de ventas y contadur\u00eda - 2025- [EICSA]"
                    },
                    {
                        subtitle: "Freelance",
                        text: "Maestro de Unity para ni\u00f1os - 2020"
                    }
                ]}
            />

            <Tarjeta
                title="Formaci&oacute;n"
                sections={[
                    {
                        subtitle: "Escuelas",
                        text: "Estudiante de Ingenier\u00eda en Animaci\u00f3n Digital An\u00e1huac Mayab 2018-2020\nEstudiante de Ingenier\u00eda en Sistemas UNID 2023-Presente"
                    },
                    {
                        subtitle: "Cursos",
                        text: "Scrum esencial - 2023 \u00b7 Fundamentos esenciales de la programaci\u00f3n - 2024 \u00b7 Python esencial - 2024 "
                    }
                ]}
            />

            <Tarjeta
                title="Pasatiempos"
                sections={[
                    {
                        subtitle: "Hobbies",
                        text: "Dungeons and Dragons \u00b7 Leer fantas\u00eda \u00b7 Magic the Gathering TCG \u00b7 Videojuegos"
                    },
                    {
                        subtitle: "Ejercicio",
                        text: "Correr 5km \u00b7 Pesas"
                    }
                ]}
            />
        </div>
    );
}