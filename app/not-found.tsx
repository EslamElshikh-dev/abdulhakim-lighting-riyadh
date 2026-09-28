import Link from "next/link";
export default function NotFound() { return <main id="main" className="container not-found"><span className="eyebrow">404</span><h1>الصفحة غير موجودة.</h1><p>يمكنك العودة إلى البداية واستكشاف المجالات المتاحة.</p><Link className="button button-dark" href="/">العودة للرئيسية</Link></main>; }
