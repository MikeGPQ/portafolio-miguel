import { VideoCard } from "../Componentes/VideoCard";

export function DevLogs() {
    const videos = [
        {
            id: "YsOQsWG6j3U",
            title: "Desarrollando Mi Portafolio Profesional con React DevLog #1",
            date: "25 jul 2025",
            tags: ["React", "Portafolio"],
        },
        {
            id: "wLrtP_gw1wM",
            title: "Desarrollando Mi Portafolio Profesional con React DevLog #2",
            date: "29 jul 2025",
            tags: ["React", "Portafolio"],
        }

    ];

    return (
        <div style={{
            maxWidth: "1200px",
            margin: "2rem auto",
            padding: "0 1rem",
            background: "#FFFFFF"
        }}>
            <h1 style={{
                color: "#060709",
                fontSize: "2rem",
                marginBottom: "1.5rem",
                textAlign: "center",
                borderBottom: "3px solid #F9AA8C",
                paddingBottom: "0.5rem"
            }}>
                DevLogs
            </h1>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1.5rem",
                padding: "1rem"
            }}>
                {videos.map((video) => (
                    <VideoCard
                        key={video.id}
                        videoData={video}
                    />
                ))}
            </div>
        </div>
    );
}