import { createFileRoute } from "@tanstack/react-router";
import {
  Gamepad2,
  Settings2,
  CalendarDays,
  TrendingUp,
  Home,
  FolderKanban,
  Star,
  ArrowRight,
  Linkedin,
  Youtube,
  Instagram,
  Facebook,
} from "lucide-react";
import logoNeuronup from "@/assets/logo-neuronup.svg";
import { Navbar } from "@/components/site/Navbar";
import { Faq } from "@/components/site/Faq";
import { useReveal } from "@/hooks/use-reveal";

import heroImg from "@/assets/hero-replacement.png";
import therapyImg from "@/assets/therapy-replacement.png";
import tPaula from "@/assets/testimonial-paula.webp";
import tGloria from "@/assets/testimonial-gloria.webp";
import tRocio from "@/assets/testimonial-rocio.webp";
import logoSanitas from "@/assets/logo-sanitas.webp";
import logoFremap from "@/assets/logo-fremap.webp";
import logoMenni from "@/assets/logo-red-menni.webp";
import logoRuber from "@/assets/logo-ruber.webp";
import logoAdembi from "@/assets/logo-adembi.webp";
import logoGaliani from "@/assets/logo-galiani.webp";
import logoAfa from "@/assets/logo-afa-alcala.webp";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "NeuronUP — Plataforma de Rehabilitación Cognitiva | Prueba 7 días" },
      {
        name: "description",
        content:
          "Planifica sesiones, personaliza ejercicios y demuestra resultados. Activa tu prueba gratuita de 7 días con acceso completo a NeuronUP.",
      },
      { property: "og:title", content: "NeuronUP — Rehabilitación Cognitiva Profesional" },
      {
        property: "og:description",
        content:
          "Más de 4.500 profesionales confían en NeuronUP. Prueba gratuita 7 días sin compromiso.",
      },
    ],
  }),
});

const TRIAL_URL = "https://app.neuronup.com/public/trial/request/adults_kids/monthly";

const FEATURES = [
  {
    icon: Gamepad2,
    title: "Cientos de actividades cognitivas",
    desc: "Juegos, fichas y generadores organizados por área de intervención: atención, memoria, funciones ejecutivas, lenguaje, praxias, orientación y más.",
  },
  {
    icon: Settings2,
    title: "Personalización total",
    desc: "Adapta cada actividad al nivel cognitivo y necesidades de tu usuario. Introduce estímulos familiares y define tu propio catálogo reutilizable.",
  },
  {
    icon: CalendarDays,
    title: "Sesiones individuales y grupales",
    desc: "Crea sesiones en minutos, asígnalas a uno o varios usuarios simultáneamente y planifícalas en tu calendario con fecha y modalidad.",
  },
  {
    icon: TrendingUp,
    title: "Seguimiento en tiempo real",
    desc: "El progreso se actualiza automáticamente al finalizar cada actividad. Compara con resultados anteriores usando NeuronUP Score.",
  },
  {
    icon: Home,
    title: "Telerrehabilitación (NeuronUP2GO)",
    desc: "Envía sesiones para que tus usuarios trabajen en remoto. Mantén la continuidad terapéutica sin importar la distancia.",
  },
  {
    icon: FolderKanban,
    title: "Programas de intervención",
    desc: "Planifica conjuntos de sesiones con semanas o meses de anticipación. Asígnalos a múltiples usuarios con ajuste de nivel automático e individual.",
  },
];

const STATS = [
  { num: "+4.500", label: "Profesionales activos" },
  { num: "+100.000", label: "Sesiones realizadas" },
  { num: "+75 países", label: "donde se utiliza NeuronUP" },
  { num: "+15 años", label: "desarrollando neurorrehabilitación digital" },
];

const STEPS = [
  {
    n: "1",
    title: "Crea el perfil de tu usuario",
    desc: "Registra su nombre, diagnóstico e historial clínico. La plataforma configura automáticamente los niveles adecuados para cada caso.",
  },
  {
    n: "2",
    title: "Diseña y asigna la sesión",
    desc: "Elige entre generadores, juegos y fichas clasificados por proceso cognitivo. Personaliza, ordena y asigna en segundos a uno o varios usuarios.",
  },
  {
    n: "3",
    title: "Analiza y ajusta la terapia",
    desc: "Consulta los resultados en tiempo real al terminar cada actividad. Usa los datos para redefinir la intervención y mostrar evolución objetiva.",
  },
];

const AREAS = [
  "Atención",
  "Memoria",
  "Funciones Ejecutivas",
  "Orientación",
  "Lenguaje",
  "Praxias",
  "Gnosias",
  "Habilidades Visoespaciales",
  "Cognición Social",
  "Actividades de la Vida Diaria",
  "Habilidades Sociales",
];

const PROFILES = [
  "Neuropsicólogos",
  "Psicólogos clínicos",
  "Terapeutas ocupacionales",
  "Logopedas y fonoaudiólogos",
];

const CLIENT_LOGOS = [
  { src: logoSanitas, alt: "Sanitas" },
  { src: logoFremap, alt: "Fremap" },
  { src: logoMenni, alt: "Red Menni" },
  { src: logoRuber, alt: "Ruber Internacional" },
  { src: logoAdembi, alt: "ADEMBI" },
  { src: logoGaliani, alt: "Galiani" },
  { src: logoAfa, alt: "AFA Alcalá" },
];

const TESTIMONIALS = [
  {
    img: tPaula,
    name: "Paula Rodríguez",
    role: "Neuropsicóloga",
    quote:
      "Llevo más de dos años utilizando NeuronUP en la asociación de daño cerebral y los usuarios están muy contentos de trabajar con las actividades de la plataforma.",
  },
  {
    img: tGloria,
    name: "Gloria Cano",
    role: "Neuropsicóloga",
    quote:
      "Me parece una plataforma que todo psicólogo y neuropsicólogo debe tener. Te proporciona el material necesario para trabajar de manera cómoda y sencilla la estimulación cognitiva de forma presencial y desde casa.",
  },
  {
    img: tRocio,
    name: "Rocío Mendoza",
    role: "Neuropsicóloga",
    quote:
      "Con NeuronUP el seguimiento del avance de los niños es más objetivo y demostrable a los padres.",
  },
];

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <span className="pill mb-6">✓ +4.500 profesionales ya confían en NeuronUP</span>
            <h1 className="mb-6">
              La plataforma que <span className="underline-brand">transforma</span> cómo intervienes
              con tus usuarios
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-xl">
              Planifica sesiones, personaliza ejercicios, trabaja en remoto y demuestra resultados
              con datos reales. Todo en una sola herramienta diseñada para profesionales de la
              neurorrehabilitación.
            </p>
            <a href={TRIAL_URL} className="btn-cta text-base sm:text-lg">
              Empieza tu prueba gratuita <ArrowRight size={20} />
            </a>
            <p className="mt-4 text-sm" style={{ color: "color-mix(in oklab, var(--ink) 60%, white)" }}>
              Se requiere tarjeta de crédito · Cancela antes de los 7 días y no se te cobrará nada
            </p>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-xs uppercase tracking-wider mb-5 font-medium opacity-60">
                Utilizado en centros como
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                {CLIENT_LOGOS.slice(0, 4).map((l) => (
                  <img
                    key={l.alt}
                    src={l.src}
                    alt={l.alt}
                    loading="lazy"
                    className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="reveal relative">
            <div className="absolute -inset-4 bg-primary-soft rounded-3xl -z-10 rotate-2" />
            <img
              src={heroImg}
              alt="Neuropsicóloga revisando una sesión de rehabilitación cognitiva en su tablet"
              width={1280}
              height={1280}
              className="rounded-3xl shadow-[var(--shadow-card)] w-full h-auto object-cover aspect-square"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: "var(--color-surface-soft)" }} className="py-14 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label} className="reveal">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{s.num}</div>
              <div className="text-ink text-sm sm:text-base font-medium" style={{ color: "var(--color-ink)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* FEATURES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14 reveal">
            <h2 className="mb-5">Acceso completo a todas las funcionalidades durante 7 días</h2>
            <p className="text-lg">
              Desde el primer día tendrás disponibles todas las herramientas de intervención y
              seguimiento. Sin limitaciones, sin tutoriales obligatorios. Solo entra y empieza.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="reveal group p-7 rounded-2xl bg-white border-2 border-primary-soft hover:border-primary transition-all hover:shadow-[var(--shadow-card)]"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--color-ink)" }}>
                  {title}
                </h3>
                <p className="text-base leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ backgroundColor: "var(--color-surface-neutral)" }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h2 className="mb-4">De la primera sesión al seguimiento, en minutos</h2>
          </div>

          <div className="relative grid md:grid-cols-3 gap-10 md:gap-6">
            <div
              className="hidden md:block absolute top-8 left-[16%] right-[16%] border-t-2 border-dashed border-primary/40"
              aria-hidden="true"
            />
            {STEPS.map((s) => (
              <div key={s.n} className="reveal text-center md:text-left relative">
                <div className="mx-auto md:mx-0 mb-5 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold shadow-[0_8px_20px_-8px_rgba(0,171,199,0.6)] relative z-10 ring-8 ring-[var(--color-surface-neutral)]">
                  {s.n}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--color-ink)" }}>
                  {s.title}
                </h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14 reveal">
            <a href={TRIAL_URL} className="btn-cta">
              Quiero probarlo gratis <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="mb-5 reveal">Ejercicios para cada proceso cognitivo</h2>
          <p className="text-lg mb-10 reveal">
            Encuentra rápidamente lo que necesitas gracias a una clasificación clara por áreas de
            intervención. Todos los ejercicios son personalizables y disponibles en formato digital
            o imprimible.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10 reveal">
            {AREAS.map((a) => (
              <span key={a} className="pill text-base px-5 py-2.5">
                {a}
              </span>
            ))}
          </div>

          <p className="text-sm max-w-2xl mx-auto reveal">
            Cada área incluye actividades en tres formatos:{" "}
            <strong style={{ color: "var(--color-ink)" }}>Generadores</strong> (versiones
            infinitas), <strong style={{ color: "var(--color-ink)" }}>Juegos</strong> (con niveles
            automáticos) y <strong style={{ color: "var(--color-ink)" }}>Fichas</strong> (en digital
            o papel).
          </p>
        </div>
      </section>

      {/* FOR WHOM */}
      <section style={{ backgroundColor: "var(--color-surface-soft)" }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <img
              src={therapyImg}
              alt="Terapeuta latinoamericana trabajando con un usuario adulto mayor en una sesión de rehabilitación cognitiva"
              width={1280}
              height={1280}
              loading="lazy"
              className="rounded-3xl shadow-[var(--shadow-card)] w-full h-auto object-cover aspect-square"
            />
          </div>
          <div className="reveal">
            <h2 className="mb-6">Diseñado para profesionales de la neurorrehabilitación</h2>
            <p className="text-lg mb-8">
              NeuronUP está pensado para los profesionales que trabajan día a día con personas que
              necesitan rehabilitación o estimulación cognitiva.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-8">
              {PROFILES.map((p) => (
                <span key={p} className="pill bg-white">
                  {p}
                </span>
              ))}
            </div>

            <p className="text-base">
              <strong style={{ color: "var(--color-ink)" }}>Ideal para trabajar con personas con:</strong>{" "}
              Daño cerebral adquirido · Alzheimer y otras demencias · Discapacidad intelectual ·
              TDAH y trastornos del neurodesarrollo · Enfermedad mental · Envejecimiento normal
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-14 reveal">
            Profesionales que ya cambiaron su forma de trabajar
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="reveal bg-white rounded-2xl p-7 shadow-[var(--shadow-card)] border-l-[3px] border-primary"
              >
                <div className="flex gap-1 mb-4" style={{ color: "var(--color-accent)" }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="italic mb-6 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-primary">{t.name}</div>
                    <div className="text-sm" style={{ color: "color-mix(in oklab, var(--ink) 60%, white)" }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "var(--color-surface-neutral)" }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-14 reveal">Preguntas frecuentes sobre la prueba gratuita</h2>
          <div className="reveal">
            <Faq />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: "var(--color-primary)" }} className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="text-white mb-6" style={{ color: "#fff" }}>
            7 días para descubrir una forma mejor de intervenir
          </h2>
          <p className="text-lg mb-10 text-white/90" style={{ color: "rgba(255,255,255,0.9)" }}>
            Únete a más de 4.500 profesionales que ya usan NeuronUP para planificar, personalizar y
            demostrar sus intervenciones cognitivas. Cancela antes de los 7 días y no pagas nada.
          </p>
          <a href={TRIAL_URL} className="btn-cta text-lg">
            Activar mi prueba gratuita <ArrowRight size={20} />
          </a>
          <p className="mt-5 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
            Se requiere tarjeta de crédito · Cancela cuando quieras antes de los 7 días sin ningún
            cargo
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "var(--color-ink)" }} className="text-white py-14 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="mb-2">
              <img src={logoNeuronup} alt="NeuronUP" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/60 text-sm">Rehabilitación Cognitiva Profesional</p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Política de privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Aviso legal</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Condiciones de servicio</a>
          </div>
          <div className="flex md:justify-end gap-4">
            <a href="#" aria-label="LinkedIn" className="text-white hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="text-white hover:text-primary transition-colors">
              <Youtube size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="text-white hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="text-white hover:text-primary transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10 text-sm text-white/50">
          © 2026 NeuronUP
        </div>
      </footer>
    </div>
  );
}
