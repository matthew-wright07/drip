export const metadata = {
  title: "Drip - For Couples",
  description: "Drip - For Couples",
  icons: {
    icon: "/logo.png", // or "/favicon.png"
  },
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
          justifyContent: "flex-start",
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
