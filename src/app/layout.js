import "./globals.css";
import TopBar from "@/components/TopBar";

export const metadata = {
    title: "Pinterest",
    description: "The Clone",
    favicon: "img/favicon.png",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <head>
                <title>Pinterest</title>
                <link rel="icon" href="/favicon.ico" sizes="any"/>
            </head>
            <body className="text-gray-900">
            <TopBar />
                {children}
            </body>
        </html>
    );
}
