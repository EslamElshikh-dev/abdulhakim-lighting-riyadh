import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpLeft, Check, Phone } from "lucide-react";
import { Breadcrumbs, ClosingCta } from "@/components/shell";
import { collections, getCollection } from "@/lib/collections";
import { businessId, serviceArea, site, siteUrl } from "@/lib/site";
import { pageGraph, pageMetadata } from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return collections.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCollection(slug);
  if (!item) return {};
  return pageMetadata(`/collections/${slug}`, item.title, `${item.description} تواصل مع عبدالحكيم للكهرباء والإنارة الحديثة في الرياض على ${site.phoneDisplay}.`);
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const item = getCollection(slug);
  if (!item) notFound();
  const others = collections.filter((collection) => collection.slug !== slug);
  const service = {
    "@type": "Service", "@id": `${siteUrl}/collections/${slug}#service`,
    name: item.title, serviceType: item.shortTitle, description: item.description,
    url: `${siteUrl}/collections/${slug}`, provider: { "@id": businessId },
    areaServed: serviceArea,
  };
  const schema = pageGraph(`/collections/${slug}`, item.title, item.description, "WebPage", service, item.shortTitle);
  return <main id="main">
    <section className={`page-hero collection-hero visual-${item.visual}`}><div className="container"><Breadcrumbs items={[{ label: item.shortTitle }]} /><div className="page-hero-grid"><div><span className="eyebrow eyebrow-light">{item.eyebrow} · الرياض</span><h1>{item.title}</h1><p>{item.intro}</p><a className="button button-glow" href={site.telephoneUrl}><Phone size={19} /> استفسر عن الخدمة <ArrowLeft size={18} /></a></div><div className="detail-art" aria-hidden="true"><span className="detail-beam" /><span className="detail-ring ring-one" /><span className="detail-ring ring-two" /><span className="detail-glyph">{item.visual === "electric" ? "⚡" : "✦"}</span></div></div></div></section>
    <section className="section detail-section"><div className="container"><div className="section-header"><div><span className="eyebrow">قبل الاختيار</span><h2>ابدأ من <span>التفاصيل المهمة.</span></h2></div><p>هذه نقاط عملية لترتيب استفسارك. توافر الأصناف والمواصفات يؤكدها النشاط مباشرة.</p></div><div className="detail-grid">{item.points.map((point, i) => <article key={point.title}><span className="detail-number">0{i + 1}</span><Check size={22} /><h3>{point.title}</h3><p>{point.body}</p></article>)}</div></div></section>
    <section className="section practical-section"><div className="container practical-grid"><div><span className="eyebrow">سؤال يتكرر</span><h2>{item.question}</h2><p>{item.answer}</p></div><div><span className="eyebrow">نطاق الخدمة</span><h2>داخل مدينة الرياض.</h2><p>{site.hoursLabel} · <bdi dir="ltr">{site.phoneDisplay}</bdi></p><a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-link">أرسل تفاصيل احتياجك <ArrowUpLeft size={18} /></a></div></div></section>
    <section className="section related-section"><div className="container"><span className="eyebrow">استكشف أيضًا</span><h2>مجالات مرتبطة.</h2><div className="related-grid">{others.map((other) => <Link key={other.slug} href={`/collections/${other.slug}`}>{other.shortTitle}<ArrowUpLeft size={20} /></Link>)}</div></div></section>
    <ClosingCta title="خطة الاختيار تبدأ بسؤال واضح" copy="جهز مقاس المكان أو مواصفة الصنف، وأرسل موقع الخدمة داخل الرياض." />
    <StructuredData data={schema} />
  </main>;
}

