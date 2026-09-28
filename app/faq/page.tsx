import type { Metadata } from "next";
import { Breadcrumbs, ClosingCta } from "@/components/shell";
import { site, siteUrl } from "@/lib/site";

export const metadata: Metadata = { title: "الأسئلة الشائعة", description: "أسئلة عملية حول موقع عبدالحكيم للكهرباء والإنارة الحديثة في حي الفلاح بالرياض وكيفية الاستعداد للاستفسار عن الإنارة والكهرباء.", alternates: { canonical: "/faq" } };
const faqs = [
  { question: "أين يقع عبدالحكيم للكهرباء والإنارة الحديثة؟", answer: `العنوان المحدد هو ${site.address}، ويمكن فتح النقطة مباشرة من زر الاتجاهات.` },
  { question: "كيف أصل إلى موقع النشاط؟", answer: "افتح رابط خرائط Google من صفحة الموقع والتواصل، ثم اتبع الاتجاهات إلى النقطة المحددة في حي الفلاح." },
  { question: "كيف أبدأ اختيار الإنارة المناسبة؟", answer: "حدد نوع المساحة، وأبعادها، والغرض من الإضاءة، ثم استفسر عن الخيارات والمواصفات المتوفرة." },
  { question: "هل المنتجات المذكورة متوفرة دائمًا؟", answer: "صفحات الموقع تعرض مجالات وأسئلة اختيار، ولا تمثل قائمة مخزون. تحقق من الأصناف والأسعار الحالية مع النشاط قبل الزيارة." },
  { question: "ماذا أجهز إذا كنت أبحث عن مستلزم كهربائي؟", answer: "اسم الصنف ومقاسه وصورته أو رقم الموديل، بالإضافة إلى مواصفة الاستخدام إن كانت معروفة." },
  { question: "هل أحتاج مراجعة مواصفات التركيب؟", answer: "نعم، راجع التوافق والمواصفات الفنية ومتطلبات السلامة مع المختص المسؤول عن التنفيذ قبل شراء أو تركيب أي قطعة." }
];
export default function Faq() {
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl }, { "@type": "ListItem", position: 2, name: "الأسئلة الشائعة", item: `${siteUrl}/faq` }] };
  return <main id="main"><section className="page-hero simple-hero"><div className="container"><Breadcrumbs items={[{ label: "الأسئلة الشائعة" }]} /><span className="eyebrow eyebrow-light">أجوبة عملية</span><h1>قبل الزيارة، <span>اعرف ما يهمك.</span></h1><p>أسئلة عن الوصول والإنارة وكيفية ترتيب استفسارك قبل اختيار الصنف.</p></div></section><section className="section faq-page"><div className="container faq-layout"><div><span className="eyebrow">سؤال وجواب</span><h2>فكر في احتياجك، <span>وسنرتب البداية.</span></h2><p>توافر الأصناف ومواصفاتها يؤكدها النشاط مباشرة.</p></div><div className="faq-list">{faqs.map(({ question, answer }, i) => <details key={question} open={i === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section><ClosingCta /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([schema, breadcrumb]).replace(/</g, "\\u003c") }} /></main>;
}
