import { CreditCard, Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-16 border-t border-black/5 dark:border-white/10 bg-white/50 dark:bg-neutral-950/50 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-500/30">
                <CreditCard size={18} />
              </span>
              <span className="font-semibold text-neutral-900 dark:text-white">GST BillPro</span>
            </div>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
              Simplifying GST invoicing for startups, SMEs, and enterprise teams.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex overflow-hidden rounded-xl border border-black/10 dark:border-white/10"
            >
              <div className="flex items-center gap-2 bg-white/70 dark:bg-neutral-900/70 px-3">
                <Mail size={16} className="text-neutral-500" />
                <input
                  type="email"
                  required
                  placeholder="Get product updates"
                  className="w-full bg-transparent py-2 text-sm text-neutral-800 dark:text-neutral-200 placeholder-neutral-400 focus:outline-none"
                />
              </div>
              <button className="bg-neutral-900 px-4 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <div className="text-sm font-semibold text-neutral-900 dark:text-white">Product</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li><a href="#features" className="hover:text-neutral-900 dark:hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-neutral-900 dark:hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white">Changelog</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-neutral-900 dark:text-white">Resources</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white">API</a></li>
              <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white">Status</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-neutral-900 dark:text-white">Follow</div>
            <div className="mt-3 flex gap-3 text-neutral-600 dark:text-neutral-300">
              <a href="#" aria-label="Facebook" className="hover:text-neutral-900 dark:hover:text-white"><Facebook size={18} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-neutral-900 dark:hover:text-white"><Instagram size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-neutral-900 dark:hover:text-white"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-black/5 dark:border-white/10 pt-6 text-sm text-neutral-600 dark:text-neutral-300 sm:flex-row">
          <p>© {new Date().getFullYear()} GST BillPro. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Privacy</a>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Terms</a>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
