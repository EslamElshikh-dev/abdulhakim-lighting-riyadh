import Link from "next/link";
import { ArrowUpLeft, Phone, Zap } from "lucide-react";
import { Breadcrumbs, ClosingCta } from "@/components/shell";
import { site } from "@/lib/site";
import { pageGraph, pageMetadata } from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";
const title = "عن عبدالحكيم للكهرباء والإنارة الحديثة";
const description = "تعرف على خدمات تأسيس الكهرباء والإنارة الحديثة من عبدالحكيم داخل مدينة الرياض وكيفية التواصل وتنسيق الخدمة.";
export const metadata = pageMetadata("/about", title, description);

export default function About() {
  return <main id="main"><section className="page-hero simple-hero"><div className="container"><Breadcrumbs items={[{ label: "عن النشاط" }]} /><span className="eyebrow eyebrow-light">عن عبدالحكيم</span><h1>الاختيار الواضح، <span>يصنع فرق الضوء.</span></h1><p>خدمات تأسيس الكهرباء والإنارة الحديثة داخل مدينة الرياض. تعرّف على مجالات النشاط وكيفية التواصل لتنسيق الخدمة في موقعك.</p></div></section>
  <section className="section about-section"><div className="container about-grid"><div className="about-art" aria-hidden="true"><span className="about-circuit" /><span className="about-flare"><Zap size={110} strokeWidth={1.05} /></span><span className="about-number">01 / LIGHT</span></div><div><span className="eyebrow">مساحة للخيارات</span><h2>من فكرة الإضاءة <span>إلى سؤال أدق.</span></h2><p>الإنارة والكهرباء جزء من طريقة استخدام المكان، وليست مجرد أسماء أصناف. لهذا رتبنا الموقع حول المجالات والأسئلة التي تساعدك في تحديد احتياجك قبل الاستفسار عن المنتجات المتوفرة.</p><p>يمكنك تصفح الإنارة الداخلية والخارجية ومستلزمات الكهرباء، ثم التواصل على الرقم المعتمد لتوضيح احتياجك وتنسيق الخدمة في موقعك داخل الرياض.</p><Link className="text-link" href="/#collections">تصفح المجالات <ArrowUpLeft size={18} /></Link></div></div></section>
  <section className="section address-band"><div className="container"><span className="eyebrow">نطاق الخدمة والتواصل</span><h2>{site.serviceArea}</h2><p>{site.hoursLabel} · <bdi dir="ltr">{site.phoneDisplay}</bdi></p><a className="button button-dark" href={site.telephoneUrl}><Phone size={18} /> اتصل بعبدالحكيم</a></div></section><ClosingCta /><StructuredData data={pageGraph("/about", title, description, "AboutPage", undefined, "عن النشاط")} /></main>;
}

