export function ButtonRedes({ url, texto }) {
    return (
        <a href={url} style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
            <button style={{
                background: "#060709",
                color: "#FFFFFF",
                border: "none",
                padding: "0.8rem 1.5rem",
                borderRadius: "50px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "1rem",
                transition: "all 0.3s ease",
                minWidth: "120px",
                minHeight: "48px",
                ":hover": {
                    background: "#F9AA8C",
                    transform: "translateY(-2px)"
                }
            }}>
                {texto}
            </button>
        </a>
    );
}