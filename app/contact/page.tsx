import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/shell";
import { StructuredData } from "@/components/structured-data";
import { pageGraph, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const title = "التواصل ونطاق الخدمة في الرياض";
const description = `تواصل مع ${site.name} على ${site.phoneDisplay} عبر الاتصال أو واتساب. نطاق الخدمة مدينة الرياض. ${site.hoursDescription}`;
export const metadata = pageMetadata("/contact", title, description);

export default function Contact() {
  return <main id="main"><section className="page-hero simple-hero"><div className="container"><Breadcrumbs items={[{ label: title }]} /><span className="eyebrow eyebrow-light">تواصل مع عبدالحكيم</span><h1>وضّح احتياجك، <span>ونرتّب التفاصيل.</span></h1><p>اتصل أو أرسل رسالة واتساب فيها نوع الاحتياج وموقع الخدمة داخل مدينة الرياض.</p></div></section>
  <section className="section contact-section"><div className="container contact-grid"><div><span className="eyebrow">{site.name}</span><h2>خدمتنا داخل <span>مدينة الرياض.</span></h2><div className="contact-line"><span><Phone size={24} /></span><div><h3>رقم التواصل</h3><a href={site.telephoneUrl}><bdi dir="ltr">{site.phoneDisplay}</bdi></a></div></div><div className="contact-line"><span><MapPin size={24} /></span><div><h3>نطاق الخدمة</h3><p>{site.serviceArea} — تواصل لتنسيق الخدمة في موقعك.</p></div></div><div className="contact-line"><span><Clock size={24} /></span><div><h3>أوقات التواصل</h3><p>{site.hoursDescription}</p></div></div><div className="contact-actions"><a className="button button-dark" href={site.telephoneUrl}><Phone size={19} /> اتصل الآن</a><a className="button button-outline-dark" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={19} /> واتساب</a></div></div><div className="contact-visual"><div className="contact-map" aria-hidden="true"><span className="route-line route-one" /><span className="route-line route-two" /><span className="route-line route-three" /><span className="route-line route-four" /><span className="big-pin"><MapPin size={43} fill="currentColor" /></span><span className="map-disclaimer">رسم توضيحي لنطاق الخدمة</span></div><div className="contact-map-caption"><small>نطاق الخدمة</small><strong>مدينة الرياض</strong><span>أرسل موقع الخدمة عند التواصل</span></div></div></div></section><StructuredData data={pageGraph("/contact", title, description, "ContactPage")} /></main>;
}

