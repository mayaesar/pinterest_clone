import "./globals.css";

export const metadata = {
  title: "Pinterest",
  description: "The Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
