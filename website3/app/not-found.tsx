import Link from "next/link";

export default function NotFound() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <span className="not-found-code">404</span>
        <h1>Sayfa bulunamadı</h1>
        <p>Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
        <Link href={basePath || "/"} className="button button-primary">
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
