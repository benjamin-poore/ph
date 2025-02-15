import type { Metadata } from "next";
import "@/app/styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "My App",
  description: "Welcome to my app",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Header></Header>
        {/* Layout UI */}
        <main>
          <div>{children}</div>
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
