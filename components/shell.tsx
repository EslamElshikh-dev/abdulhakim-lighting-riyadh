import Link from "next/link";
import { ArrowLeft, ArrowUpLeft, Navigation } from "lucide-react";
import { Brand } from "@/components/brand";
import { site } from "@/lib/site";
import { collections } from "@/lib/collections";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav className="breadcrumbs" aria-label="مسار الصفحة"><Link href="/">الرئيسية</Link>{items.map((item) => <span key={item.label} className="crumb"><span aria-hidden="true">/</span>{item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</span>)}</nav>;
}

export function ClosingCta({ title = "الزيارة تبدأ من هنا", copy = "احفظ العنوان وافتح الاتجاهات إلى النقطة المحددة في حي الفلاح." }: { title?: string; copy?: string }) {
  return <section className="closing-cta"><div className="container closing-inner"><div><span className="eyebrow eyebrow-light">عبدالحكيم · الرياض</span><h2>{title}</h2><p>{copy}</p></div><a className="button button-glow" href={site.maps} target="_blank" rel="noopener noreferrer"><Navigation size={19} /> افتح الاتجاهات <ArrowLeft size={18} /></a></div></section>;
}

export function Footer() {
  return <footer className="site-footer"><div className="container footer-main"><div className="footer-intro"><Brand footer /><p>وجهة الكهرباء والإنارة الحديثة في حي الفلاح بالرياض. تحقق من الأصناف والمواصفات الحالية مباشرة قبل زيارتك.</p></div><div><h2>تصفح</h2><Link href="/">الرئيسية</Link><Link href="/about">عن النشاط</Link><Link href="/faq">الأسئلة الشائعة</Link><Link href="/contact">العنوان والاتجاهات</Link></div><div><h2>المجالات</h2>{collections.map((item) => <Link href={`/collections/${item.slug}`} key={item.slug}>{item.shortTitle}</Link>)}</div><div><h2>الموقع</h2><p>{site.address}</p><a className="footer-direction" href={site.maps} target="_blank" rel="noopener noreferrer">افتح في خرائط Google <ArrowUpLeft size={17} /></a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {site.name}</span><span>تصميم وتطوير: <strong>المهندس إسلام الشيخ</strong></span></div></footer>;
}

export function FloatingMap() {
  return <a className="floating-map" href={site.maps} target="_blank" rel="noopener noreferrer" aria-label="فتح موقع عبدالحكيم على خرائط Google"><Navigation size={22} /></a>;
}
