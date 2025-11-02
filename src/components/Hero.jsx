import Spline from "@splinetool/react-spline";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        {/* Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 px-3 py-1 text-xs text-neutral-700 dark:text-neutral-300 backdrop-blur"
          >
            <Sparkles size={14} className="text-fuchsia-500" />
            Next‑gen GST billing on a futuristic canvas
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-5xl"
          >
            Create compliant GST invoices with premium, glass‑morphic style
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-neutral-700 dark:text-neutral-300 text-base sm:text-lg"
          >
            Auto GST, HSN/SAC, smart catalog, and one‑click GSTR exports. Fast, accurate, and visually stunning for your brand.
          </motion.p>

          <motion.div
            id="get-started"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-indigo-600 to-fuchsia-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-600/30 hover:brightness-110"
            >
              Start Free Trial
              <ArrowRight size={16} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center rounded-xl px-5 py-3 text-sm font-medium border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5"
            >
              See Features
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 grid grid-cols-3 gap-6 text-center sm:max-w-md"
          >
            <div>
              <div className="text-2xl font-semibold text-neutral-900 dark:text-white">2x</div>
              <div className="text-xs text-neutral-500">Faster billing</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-neutral-900 dark:text-white">99.9%</div>
              <div className="text-xs text-neutral-500">Accuracy</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-neutral-900 dark:text-white">24/7</div>
              <div className="text-xs text-neutral-500">Support</div>
            </div>
          </motion.div>
        </div>

        {/* 3D Spline - dark surface to match animation theme */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-[440px] sm:h-[540px] lg:h-[600px] rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black"
        >
          <Spline
            scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />

          {/* Soft gradient accents - ensure not blocking interaction */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
            <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
