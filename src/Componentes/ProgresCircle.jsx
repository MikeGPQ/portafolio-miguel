import { CircularProgressbar } from 'react-circular-progressbar';
import { useState, useEffect } from 'react';

export function ProgresCircle({progressItems}){
    const [isMobile, setIsMobile] = useState(false);
    
        useEffect(() => {
            const checkMobile = () => setIsMobile(window.innerWidth <= 768);
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return () => window.removeEventListener('resize', checkMobile);
        }, []);

        const getColorByType = (type) => {
    switch(type) {
      case "project": return "#8CFAE8"; 
      case "curso": return "#FAF88C";  
      case "???": return "#BC8CFA";        
    }

    
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

    return(
      <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: isMobile ? "2rem" : "4rem",
          marginTop: "2rem"
        }}>
          {progressItems.map((item, index) => (
            <div key={index} style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: isMobile ? "100px" : "120px"
            }}>
              <div style={{ width: isMobile ? "100px" : "120px", marginBottom: "1rem" }}>
                <CircularProgressbar 
                  value={item.percentage}
                  text={`${item.percentage}%`}
                  styles={{
                    root: {},
                    path: {
                      stroke: getColorByType(item.type),
                      strokeLinecap: 'round',
                      transition: 'stroke-dashoffset 0.5s ease 0s',
                    },
                    text: {
                      fill: '#060709',
                      fontSize: '16px',
                      fontWeight: 'bold',
                    },
                    trail: {
                      stroke: '#e6e6e6',
                    }
                  }}
                />
              </div>
              <div style={{
                textAlign: "center",
                fontWeight: "600",
                fontSize: "0.9rem",
                color: "#060709",
                lineHeight: "1.4"
              }}>
                {item.url? (
                    <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={linkStyle}
                    >
                        {item.title}
                    </a>
                ) 
                    : (item.title)}   
              </div>
            </div>
          ))}
        </div>
    )
}