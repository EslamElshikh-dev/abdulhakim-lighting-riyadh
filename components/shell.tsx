import Link from "next/link";
import { ArrowLeft, ArrowUpLeft, MessageCircle, Phone } from "lucide-react";
import { Brand } from "@/components/brand";
import { site } from "@/lib/site";
import { collections } from "@/lib/collections";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav className="breadcrumbs" aria-label="مسار الصفحة"><Link href="/">الرئيسية</Link>{items.map((item) => <span key={item.label} className="crumb"><span aria-hidden="true">/</span>{item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</span>)}</nav>;
}

export function ClosingCta({ title = "احتياجك يبدأ باتصال", copy = "أرسل صورة أو مواصفة المطلوب وموقع الخدمة داخل الرياض، ونسّق التفاصيل مع عبدالحكيم." }: { title?: string; copy?: string }) {
  return <section className="closing-cta"><div className="container closing-inner"><div><span className="eyebrow eyebrow-light">عبدالحكيم · الرياض</span><h2>{title}</h2><p>{copy}</p></div><div className="contact-actions"><a className="button button-glow" href={site.telephoneUrl}><Phone size={19} /> اتصل الآن <ArrowLeft size={18} /></a><a className="button button-outline" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={19} /> تواصل عبر واتساب</a></div></div></section>;
}

export function Footer() {
  return <footer className="site-footer"><div className="container footer-main"><div className="footer-intro"><Brand footer /><p>خدمات الكهرباء والإنارة الحديثة داخل مدينة الرياض. تواصل لتوضيح احتياجك وتنسيق الخدمة.</p></div><div><h2>تصفح</h2><Link href="/">الرئيسية</Link><Link href="/about">عن النشاط</Link><Link href="/faq">الأسئلة الشائعة</Link><Link href="/contact">التواصل ونطاق الخدمة</Link></div><div><h2>المجالات</h2>{collections.map((item) => <Link href={`/collections/${item.slug}`} key={item.slug}>{item.shortTitle}</Link>)}</div><div><h2>التواصل</h2><p>{site.serviceArea} · {site.hoursLabel}</p><a className="footer-direction" href={site.telephoneUrl}><Phone size={17} /><bdi dir="ltr">{site.phoneDisplay}</bdi></a><a className="footer-direction" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">واتساب <ArrowUpLeft size={17} /></a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {site.name}</span><span>تصميم وتطوير: <strong>المهندس إسلام الشيخ</strong></span></div></footer>;
}

export function FloatingContact() {
  return <a className="floating-map" href={site.telephoneUrl} aria-label={`الاتصال بعبدالحكيم على ${site.phoneDisplay}`}><Phone size={22} /></a>;
}
