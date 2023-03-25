import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Kunwar Aditya's Blog",
  description: "Created by Kunwar Aditya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="flex flex-col min-h-screen bg-[#1a202c] text-white max-w-7xl mx-auto">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
