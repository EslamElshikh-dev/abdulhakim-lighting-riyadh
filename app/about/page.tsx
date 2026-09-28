import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpLeft, MapPin, Zap } from "lucide-react";
import { Breadcrumbs, ClosingCta } from "@/components/shell";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "عن عبدالحكيم للكهرباء والإنارة الحديثة", description: "تعرف على عبدالحكيم للكهرباء والإنارة الحديثة وموقعه في شارع الخطابة، حي الفلاح بالرياض.", alternates: { canonical: "/about" } };

export default function About() {
  return <main id="main"><section className="page-hero simple-hero"><div className="container"><Breadcrumbs items={[{ label: "عن النشاط" }]} /><span className="eyebrow eyebrow-light">عن عبدالحكيم</span><h1>الاختيار الواضح، <span>يصنع فرق الضوء.</span></h1><p>صفحة تجمع مجالات الكهرباء والإنارة ومعلومات الوصول إلى النشاط في حي الفلاح بالرياض.</p></div></section>
  <section className="section about-section"><div className="container about-grid"><div className="about-art" aria-hidden="true"><span className="about-circuit" /><span className="about-flare"><Zap size={110} strokeWidth={1.05} /></span><span className="about-number">01 / LIGHT</span></div><div><span className="eyebrow">مساحة للخيارات</span><h2>من فكرة الإضاءة <span>إلى سؤال أدق.</span></h2><p>الإنارة والكهرباء جزء من طريقة استخدام المكان، وليست مجرد أسماء أصناف. لهذا رتبنا الموقع حول المجالات والأسئلة التي تساعدك في تحديد احتياجك قبل الاستفسار عن المنتجات المتوفرة.</p><p>يمكنك تصفح الإنارة الداخلية والخارجية ومستلزمات الكهرباء، ثم فتح الاتجاهات إلى العنوان الذي حدده صاحب النشاط في شارع الخطابة بحي الفلاح.</p><Link className="text-link" href="/#collections">تصفح المجالات <ArrowUpLeft size={18} /></Link></div></div></section>
  <section className="section address-band"><div className="container"><span className="eyebrow">أين تجدنا؟</span><h2>{site.addressShort}</h2><p>{site.address}</p><a className="button button-dark" href={site.maps} target="_blank" rel="noopener noreferrer"><MapPin size={18} /> فتح النقطة على الخريطة</a></div></section><ClosingCta /></main>;
}
