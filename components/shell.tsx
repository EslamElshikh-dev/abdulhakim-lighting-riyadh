import Link from "next/link";
import { ArrowLeft, ArrowUpLeft, MapPin, Menu, Navigation, Zap } from "lucide-react";
import { site } from "@/lib/site";
import { collections } from "@/lib/collections";

export function Brand({ footer = false }: { footer?: boolean }) {
  return <Link className={`brand ${footer ? "brand-footer" : ""}`} href="/" aria-label="عبدالحكيم للكهرباء والإنارة الحديثة، الرئيسية">
    <span className="brand-mark" aria-hidden="true"><Zap size={26} fill="currentColor" /></span>
    <span className="brand-name"><strong>عبدالحكيم</strong><small>للكهرباء والإنارة الحديثة</small></span>
  </Link>;
}

export function Header() {
  return <header className="site-header">
    <div className="top-strip"><div className="container strip-inner"><span>حي الفلاح، الرياض</span><span>عنوان واضح. اختيار أذكى للضوء.</span></div></div>
    <div className="container header-inner">
      <Brand />
      <nav className="desktop-nav" aria-label="القائمة الرئيسية">
        <Link href="/">الرئيسية</Link>
        <Link href="/#collections">المجالات</Link>
        <Link href="/about">عن النشاط</Link>
        <Link href="/faq">الأسئلة الشائعة</Link>
        <Link href="/contact">الموقع والتواصل</Link>
      </nav>
      <a className="header-action" href={site.maps} target="_blank" rel="noopener noreferrer"><MapPin size={18} /> اعرف الطريق</a>
      <details className="mobile-menu"><summary aria-label="فتح القائمة"><Menu size={25} /></summary><nav aria-label="قائمة الجوال">
        <Link href="/">الرئيسية</Link><Link href="/#collections">المجالات</Link>
        {collections.map((item) => <Link href={`/collections/${item.slug}`} key={item.slug}>{item.shortTitle}</Link>)}
        <Link href="/about">عن النشاط</Link><Link href="/faq">الأسئلة الشائعة</Link><Link href="/contact">الموقع والتواصل</Link>
      </nav></details>
    </div>
  </header>;
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav className="breadcrumbs" aria-label="مسار الصفحة"><Link href="/">الرئيسية</Link>{items.map((item) => <span key={item.label} className="crumb"><span aria-hidden="true">/</span>{item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</span>)}</nav>;
}

export function ClosingCta({ title = "الزيارة تبدأ من هنا", copy = "احفظ العنوان وافتح الاتجاهات إلى النقطة المحددة في حي الفلاح." }: { title?: string; copy?: string }) {
  return <section className="closing-cta"><div className="container closing-inner"><div><span className="eyebrow eyebrow-light">عبدالحكيم · الرياض</span><h2>{title}</h2><p>{copy}</p></div><a className="button button-glow" href={site.maps} target="_blank" rel="noopener noreferrer"><Navigation size={19} /> افتح الاتجاهات <ArrowLeft size={18} /></a></div></section>;
}

export function Footer() {
  return <footer className="site-footer"><div className="container footer-main"><div className="footer-intro"><Brand footer /><p>وجهة الكهرباء والإنارة الحديثة في حي الفلاح بالرياض. تحقق من الأصناف والمواصفات الحالية مباشرة قبل زيارتك.</p></div><div><h2>تصفح</h2><Link href="/">الرئيسية</Link><Link href="/about">عن النشاط</Link><Link href="/faq">الأسئلة الشائعة</Link><Link href="/contact">الموقع والتواصل</Link></div><div><h2>المجالات</h2>{collections.map((item) => <Link href={`/collections/${item.slug}`} key={item.slug}>{item.shortTitle}</Link>)}</div><div><h2>الموقع</h2><p>{site.addressShort}</p><a className="footer-direction" href={site.maps} target="_blank" rel="noopener noreferrer">افتح في خرائط Google <ArrowUpLeft size={17} /></a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {site.name}</span><span>تصميم وتطوير: <strong>المهندس إسلام الشيخ</strong></span></div></footer>;
}

export function FloatingMap() {
  return <a className="floating-map" href={site.maps} target="_blank" rel="noopener noreferrer" aria-label="فتح موقع عبدالحكيم على خرائط Google"><Navigation size={22} /></a>;
}
