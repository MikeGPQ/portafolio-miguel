export function Tarjeta({ title, sections }) {
    const sectionStyle = { background: "#FFFFFF", borderRadius: "8px", padding: "1.5rem", marginBottom: "2rem", boxShadow: "0 2px 5px rgba(6,7,9,0.05)", borderLeft: "4px solid #F9AA8C" };
    const titleStyle = { color: "#060709", fontSize: "1.8rem", marginBottom: "1rem", fontWeight: "700" };
    const subtitleStyle = { color: "#F9AA8C", fontSize: "1.3rem", margin: "1rem 0 0.5rem 0", fontWeight: "600" };
    const textStyle = { color: "#060709", lineHeight: "1.6", margin: "0.5rem 0" };

    return (
        <div style={sectionStyle}>
            <h1 style={titleStyle}>{title}</h1>

            {sections.map((section, index) => (
                <div key={index}>
                    <h2 style={subtitleStyle}>{section.subtitle}</h2>
                    <p style={textStyle}>{section.text}</p>
                </div>
            ))}
        </div>
    );
}