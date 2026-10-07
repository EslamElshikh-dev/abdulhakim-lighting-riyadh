"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpLeft, MapPin, Menu, Phone } from "lucide-react";
import { Brand } from "@/components/brand";
import { collections } from "@/lib/collections";
import { site } from "@/lib/site";

const navigation = [
  { href: "/", label: "الرئيسية" },
  { href: "/#collections", label: "المجالات" },
  { href: "/about", label: "عن النشاط" },
  { href: "/faq", label: "الأسئلة الشائعة" },
  { href: "/contact", label: "التواصل ونطاق الخدمة" }
];

export function Header() {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);

  useEffect(() => { if (menu.current) menu.current.open = false; }, [pathname]);

  return <header className="site-header">
    <div className="top-strip"><div className="container strip-inner"><span>عبدالحكيم للكهرباء والإنارة الحديثة</span><span><MapPin size={13} /> نخدم مدينة الرياض</span></div></div>
    <div className="container header-inner">
      <Brand />
      <nav className="desktop-nav" aria-label="القائمة الرئيسية">
        {navigation.map(({ href, label }) => <Link key={href} href={href} aria-current={pathname === href && href !== "/#collections" ? "page" : undefined}>{label}</Link>)}
      </nav>
      <a className="header-action" href={site.telephoneUrl}><Phone size={18} /> اتصل الآن <ArrowUpLeft size={15} /></a>
      <details className="mobile-menu" ref={menu}><summary aria-label="فتح قائمة التنقل"><Menu size={24} /></summary><nav aria-label="قائمة الجوال" onClick={() => { if (menu.current) menu.current.open = false; }}>
        {navigation.slice(0, 2).map(({ href, label }) => <Link key={href} href={href}>{label}</Link>)}
        {collections.map((item) => <Link href={`/collections/${item.slug}`} key={item.slug}>{item.shortTitle}</Link>)}
        {navigation.slice(2).map(({ href, label }) => <Link key={href} href={href}>{label}</Link>)}
        <a className="mobile-menu-map" href={site.telephoneUrl}><Phone size={17} /> اتصل بعبدالحكيم</a>
      </nav></details>
    </div>
  </header>;
}
