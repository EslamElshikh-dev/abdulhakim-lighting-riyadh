import Link from "next/link";
import { Zap } from "lucide-react";

export function Brand({ footer = false }: { footer?: boolean }) {
  return <Link className={`brand ${footer ? "brand-footer" : ""}`} href="/" aria-label="عبدالحكيم للكهرباء والإنارة الحديثة، الرئيسية">
    <span className="brand-mark" aria-hidden="true"><Zap size={26} fill="currentColor" /></span>
    <span className="brand-name"><strong>عبدالحكيم</strong><small>للكهرباء والإنارة الحديثة</small></span>
  </Link>;
}
