import type { Metadata } from "next";
import "@styles/globals.css"
import Navbar from "@components/Nabvar";
import Provider from "@components/Provider";

export const metadata: Metadata = {
  title: "AI Prompts",
  description: "Discover AI Prompts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
        <div className="main">
        <div className="gradient" />
      </div>
      <main className="app">
        <Navbar/>
        {children}
      </main>
      </Provider>
      </body>
    </html>
  );
}





















