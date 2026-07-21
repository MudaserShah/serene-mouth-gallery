import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/motion";
import logoAsset from "@/assets/logo.png";
import surgery1 from "@/assets/surgery-1.png";
import surgery2 from "@/assets/surgery-2.png";
import surgery3 from "@/assets/surgery-3.png";
import surgery4 from "@/assets/surgery-4.png";
import patientAsset from "@/assets/patient-treatment.png";

export const Route = createFileRoute("/gallery/impactions")({
  head: () => ({
    meta: [
      { title: "Impactions Gallery — Center of Dental Implant & Face Surgery" },
      {
        name: "description",
        content:
          "Wisdom tooth impaction removal and maxillofacial surgical procedures by Dr. Sayed Mustafa in Wah Cantt.",
      },
    ],
  }),
  component: ImpactionsGallery,
});

// NOTE: Client naye images dega — unko src/assets mein daal kar yahan is array
// mein import karke add karna hai (src + alt), grid mein khud show ho jayengi.
const images = [
  { src: surgery1, alt: "Impaction surgery in progress" },
  { src: surgery2, alt: "Surgical team during wisdom tooth removal" },
  { src: surgery3, alt: "Focused surgical work" },
  { src: surgery4, alt: "Operating theatre" },
  { src: patientAsset, alt: "Patient care after treatment" },
];

function ImpactionsGallery() {
  return (
    <div className="min-h-screen bg-[color:var(--cream)] text-foreground">
      {/* HEADER */}
      <header className="py-4">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between gap-4 rounded-full glass shadow-luxe px-4 py-2.5">
            <Link to="/" className="flex items-center gap-3 min-w-0">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary">
                <img src={logoAsset} alt="Clinic logo" className="h-8 w-8 object-contain" />
              </span>
              <span className="hidden sm:flex flex-col leading-tight min-w-0">
                <span className="text-display text-[15px] truncate">Center of Dental Implant</span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  & Face Surgery
                </span>
              </span>
            </Link>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground shrink-0"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-[color:var(--gold)] text-[color:var(--ink)] transition-transform group-hover:-translate-x-0.5">
                ←
              </span>
              Back to home
            </Link>
          </div>
        </div>
      </header>

      {/* GALLERY */}
      <main className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Gallery
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-3 text-display text-4xl md:text-5xl lg:text-6xl">
                <span className="italic gold-text">Impactions</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-lg text-muted-foreground">
                Painless wisdom tooth impaction removal and maxillofacial surgical procedures —
                performed in a sterile, modern theatre.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((g, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-luxe">
                  <img
                    src={g.src}
                    alt={g.alt}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
