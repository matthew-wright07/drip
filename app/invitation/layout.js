export const metadata = {
    title: "Drip - Partner Invitation",
    description: "Drip - Partner Invitation",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body
          style={{
            fontFamily: "'Playfair Display', serif",
            backgroundColor: "#fff",
            color: "#000",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 20px",
            margin: 0,
            boxSizing: "border-box",
            
          }}
        >
          {children}
        </body>
      </html>
    );
  }
  