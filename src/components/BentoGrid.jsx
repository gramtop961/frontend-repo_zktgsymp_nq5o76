import { BarChart3, Shield, Wand2, FileSpreadsheet, Download, CheckCircle2, Calculator, Users } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: FileSpreadsheet,
    title: "GST-ready invoices",
    desc: "Auto-calculate CGST/SGST/IGST, apply HSN/SAC, and generate e-invoices that pass audits.",
  },
  {
    icon: BarChart3,
    title: "Real-time analytics",
    desc: "Track sales, tax liabilities, top items, and collections with actionable dashboards.",
  },
  {
    icon: Shield,
    title: "Compliance first",
    desc: "Latest GST rules baked in. Export GSTR-1/3B and share audit-ready reports in clicks.",
  },
  {
    icon: Wand2,
    title: "Brand-perfect templates",
    desc: "Glass-morphic, minimal layouts with your logo, colors, and smart item library.",
  },
  {
    icon: Calculator,
    title: "Smart tax engine",
    desc: "Reverse charge, intra/inter-state, cess, and rounding handled automatically.",
  },
  {
    icon: Users,
    title: "Multi-user roles",
    desc: "Granular permissions for owners, accountants, and operators with full logs.",
  },
];

function BentoCard({ icon: Icon, title, desc, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-indigo-500/0 to-indigo-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">
        <span className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-fuchsia-500 p-2 text-white shadow-md shadow-indigo-500/30">
          <Icon size={18} />
        </span>
        <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
        <button className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
          Learn more
          <Download size={14} />
        </button>
      </div>
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-fuchsia-500/10 blur-2xl" />
    </motion.div>
  );
}

export default function BentoGrid() {
  return (
    <section id="features" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
            Everything you need for GST billing
          </h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">
            Designed for speed, accuracy, and a delightful experience.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-300">
            <CheckCircle2 className="text-emerald-500" size={14} /> No hidden fees
            <CheckCircle2 className="text-emerald-500" size={14} /> Unlimited invoices
            <CheckCircle2 className="text-emerald-500" size={14} /> Secure & compliant
          </div>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((item, i) => (
            <div key={item.title} className={i % 3 === 0 ? "md:col-span-2" : ""}>
              <BentoCard {...item} delay={i * 0.06} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
