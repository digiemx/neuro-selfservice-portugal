import { useEffect, useState } from "react";
import { Brain } from "lucide-react";

const TRIAL_URL = "https://app.neuronup.com/public/trial/request/adults_kids/monthly";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-border shadow-[0_2px_12px_-8px_rgba(0,0,0,0.15)]"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Brain className="text-primary" size={26} strokeWidth={2.2} />
          <span className="text-primary font-bold text-xl tracking-tight">NeuronUP</span>
        </a>
        <nav className="flex items-center gap-3 sm:gap-6">
          <a
            href="https://app.neuronup.com"
            className="hidden sm:inline text-ink text-sm font-medium hover:text-primary transition-colors"
            style={{ color: "var(--color-ink)" }}
          >
            {"\n"}
          </a>
          <a href={TRIAL_URL} className="btn-cta !py-2.5 !px-5 !text-sm">
            Prueba gratis 7 días
          </a>
        </nav>
      </div>
    </header>
  );
}
