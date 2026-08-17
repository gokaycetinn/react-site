import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sans = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://gokaycetinn.github.io/Website/"),
  title: "Gökay Çetinakdoğan | Yazılım Geliştirici",
  description:
    "Mobil ürünler, yapay zeka çözümleri ve otomasyon sistemleri geliştiren Bilgisayar Mühendisliği mezunu yazılım geliştirici.",
  keywords: [
    "Gökay Çetinakdoğan",
    "Yazılım Geliştirici",
    "React Native",
    "Flutter",
    "Yapay Zeka",
    "Machine Learning",
    "Portfolio",
  ],
  openGraph: {
    title: "Gökay Çetinakdoğan | Yazılım Geliştirici",
    description: "Dijital ürünler ve akıllı sistemler geliştiren yazılım geliştirici.",
    type: "website",
    locale: "tr_TR",
  },
};

const themeScript = `
  try {
    const saved = localStorage.getItem('portfolio-theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.theme = saved || (systemDark ? 'dark' : 'light');
  } catch (_) {
    document.documentElement.dataset.theme = 'dark';
  }
`;

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning className={`${sans.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
