import { VideoCard } from "../Componentes/VideoCard";

export function DevLogs() {
    const videos = [
        {
            id: "n2exlSpNMbg", 
            title: "React + Authenticator Firestore",
            date: "10 jun 2025",
            tags: ["React", "Firestore"],
        },
        {
            id: "5ElQ-qm3z8M",
            title: "React + Firestore Upload Data",
            date: "24 jun 2025",
            tags: ["React", "Firestore"],
        },
        {
            id: "Sa2-7TGkW8g",
            title: "React + Firestore Delete-Edit",
            date: "8 jul 2025",
            tags: ["React", "Firestore"],
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
                fontSize: "2.5rem",
                marginBottom: "2rem",
                textAlign: "center",
                borderBottom: "3px solid #F9AA8C",
                paddingBottom: "0.5rem"
            }}>
                DevLogs
            </h1>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
                gap: "2rem",
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