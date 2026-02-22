import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Gökay Çetinakdoğan | Yazılım Geliştirici",
  description:
    "Bilgisayar Mühendisliği öğrencisi, mobil uygulama geliştirme, yapay zeka ve otomasyon alanlarında projeler geliştiren yazılım geliştirici.",
  keywords: [
    "Gökay Çetinakdoğan",
    "Yazılım Geliştirici",
    "React Native",
    "Mobile Developer",
    "AI",
    "Machine Learning",
    "Portfolio",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
