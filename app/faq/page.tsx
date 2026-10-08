import { Breadcrumbs, ClosingCta } from "@/components/shell";
import { StructuredData } from "@/components/structured-data";
import { pageGraph, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const title = "الأسئلة الشائعة";
const description = "إجابات حول نطاق خدمة عبدالحكيم للكهرباء والإنارة الحديثة بالرياض، رقم التواصل وأوقات العمل وكيفية توضيح احتياجات الكهرباء والإنارة.";
export const metadata = pageMetadata("/faq", title, description);
const faqs = [
  { question: "ما نطاق خدمة عبدالحكيم للكهرباء والإنارة الحديثة؟", answer: "نطاق الخدمة مدينة الرياض. تواصل لتوضيح الاحتياج وتنسيق الخدمة في موقعك." },
  { question: "كيف أتواصل مع النشاط؟", answer: `يمكنك الاتصال على ${site.phoneDisplay} أو استخدام زر واتساب وإرسال تفاصيل احتياجك وموقع الخدمة.` },
  { question: "ما أوقات التواصل؟", answer: site.hoursDescription },
  { question: "كيف أبدأ اختيار الإنارة المناسبة؟", answer: "حدد نوع المساحة وأبعادها والغرض من الإضاءة، ثم استفسر عن الخيارات والمواصفات المناسبة." },
  { question: "هل المنتجات المذكورة متوفرة دائمًا؟", answer: "صفحات الموقع تعرض مجالات وأسئلة اختيار، ولا تمثل قائمة مخزون. تحقق من الأصناف والأسعار الحالية مع النشاط قبل تأكيد الطلب." },
  { question: "ماذا أجهز إذا كنت أبحث عن مستلزم كهربائي؟", answer: "اسم الصنف ومقاسه وصورته أو رقم الموديل، بالإضافة إلى مواصفة الاستخدام إن كانت معروفة." },
  { question: "هل أحتاج مراجعة مواصفات التركيب؟", answer: "نعم، راجع التوافق والمواصفات الفنية ومتطلبات السلامة مع المختص المسؤول عن التنفيذ قبل شراء أو تركيب أي قطعة." },
];

export default function Faq() {
  const questions = faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } }));
  return <main id="main"><section className="page-hero simple-hero"><div className="container"><Breadcrumbs items={[{ label: title }]} /><span className="eyebrow eyebrow-light">أجوبة عملية</span><h1>قبل التواصل، <span>اعرف ما يهمك.</span></h1><p>إجابات عن نطاق الخدمة والتواصل وكيفية ترتيب احتياجات الكهرباء والإنارة.</p></div></section><section className="section faq-page"><div className="container faq-layout"><div><span className="eyebrow">سؤال وجواب</span><h2>فكر في احتياجك، <span>وسنرتب البداية.</span></h2><p>توافر الأصناف ومواصفاتها يؤكدها النشاط مباشرة.</p></div><div className="faq-list">{faqs.map(({ question, answer }, i) => <details key={question} open={i === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section><ClosingCta /><StructuredData data={pageGraph("/faq", title, description, "FAQPage", questions)} /></main>;
}

