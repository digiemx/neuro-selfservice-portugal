import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "¿Qué incluye la prueba gratuita de 7 días?",
    a: "Acceso completo a todas las funcionalidades de rehabilitación: actividades, sesiones, programas, telerrehabilitación y seguimiento de usuarios. Sin restricciones durante los 7 días.",
  },
  {
    q: "¿Se requiere tarjeta de crédito?",
    a: "Sí, se solicita tarjeta de crédito para activar la prueba. Si cancelas antes de que finalicen los 7 días, no se realizará ningún cargo.",
  },
  {
    q: "¿Puedo trabajar con mis pacientes reales durante la prueba?",
    a: "Sí. Puedes crear perfiles de usuarios, asignarles sesiones y hacer seguimiento de sus resultados desde el primer día.",
  },
  {
    q: "¿Puedo enviar sesiones a mis pacientes para que trabajen desde casa?",
    a: "Sí. NeuronUP2GO te permite asignar sesiones de telerrehabilitación para que tus pacientes trabajen en remoto durante tu periodo de prueba.",
  },
  {
    q: "¿Qué pasa cuando termina la prueba?",
    a: "Al finalizar los 7 días, tu cuenta pasará automáticamente al plan de pago seleccionado. Si cancelaste antes, no se realizará ningún cobro y tu cuenta se desactivará.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="bg-white rounded-2xl border border-border overflow-hidden transition-shadow hover:shadow-[var(--shadow-card)]"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-bold text-ink text-lg" style={{ color: "var(--color-ink)" }}>
                {f.q}
              </span>
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary-soft flex items-center justify-center text-primary">
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-base leading-relaxed">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
