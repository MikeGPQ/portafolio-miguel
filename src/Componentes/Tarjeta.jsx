export function Tarjeta({ title, sections }) {
    const isMobile = window.innerWidth <= 768;

    const sectionStyle = {
        background: "#FFFFFF",
        borderRadius: "8px",
        padding: isMobile ? "1.2rem" : "1.5rem",
        marginBottom: "1.5rem",
        boxShadow: "0 2px 5px rgba(6,7,9,0.05)",
        borderLeft: "4px solid #F9AA8C"
    };

    const titleStyle = {
        color: "#060709",
        fontSize: isMobile ? "1.5rem" : "1.8rem",
        marginBottom: "1rem",
        fontWeight: "700"
    };

    const subtitleStyle = {
        color: "#F9AA8C",
        fontSize: isMobile ? "1.1rem" : "1.3rem",
        margin: "1rem 0 0.5rem 0",
        fontWeight: "600"
    };

    const textStyle = {
        color: "#060709",
        lineHeight: "1.6",
        margin: "0.5rem 0",
        fontSize: isMobile ? "0.95rem" : "1rem"
    };

    const listStyle = {
        paddingLeft: "1.5rem",
        margin: "0.5rem 0"
    };

    const listItemStyle = {
        marginBottom: "0.5rem"
    };

    const linkStyle = {
        color: "#1a73e8",
        textDecoration: "none",
        fontWeight: "500",
        marginLeft: "0.3rem",
        "&:hover": {
            textDecoration: "underline"
        }
    };

    return (
        <div style={sectionStyle}>
            <h1 style={titleStyle}>{title}</h1>

            {sections.map((section, index) => (
                <div key={index}>
                    <h2 style={subtitleStyle}>{section.subtitle}</h2>
                    
                    {Array.isArray(section.content) ? (
                        <ul style={listStyle}>
                            {section.content.map((item, i) => (
                                <li key={i} style={listItemStyle}>
                                    {item.link? (
                                    <a 
                                        href={item.link.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        style={linkStyle}
                                    >
                                        {item.text}
                                    </a>
                                ) 
                                   : (item.text)}   

                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p style={textStyle}>{section.content}</p>
                    )}
                </div>
            ))}
        </div>
    );
}