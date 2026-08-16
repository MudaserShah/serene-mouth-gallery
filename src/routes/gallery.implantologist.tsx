import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/motion";
import logoAsset from "@/assets/logo.png";
import consultationAsset from "@/assets/consultation.png";
import dentistAsset from "@/assets/dentist-portrait.png";
import clinicChairAsset from "@/assets/clinic-chair.png";
import bannersAsset from "@/assets/clinic-banners.png";

export const Route = createFileRoute("/gallery/implantologist")({
  head: () => ({
    meta: [
      { title: "Implantologist Gallery — Center of Dental Implant & Face Surgery" },
      {
        name: "description",
        content:
          "Dental implant cases, consultations and restorative dentistry by Dr. Sayed Mustafa, certified implantologist in Wah Cantt.",
      },
    ],
  }),
  component: ImplantologistGallery,
});

// NOTE: Client naye images dega — unko src/assets mein daal kar yahan is array
// mein import karke add karna hai (src + alt), grid mein khud show ho jayengi.
const images = [
  { src: consultationAsset, alt: "Implant consultation with patient" },
  { src: dentistAsset, alt: "Dr. Sayed Mustafa — certified implantologist" },
  { src: clinicChairAsset, alt: "Modern implant operatory" },
  { src: bannersAsset, alt: "Clinic entrance — implant & face surgery center" },
];

function ImplantologistGallery() {
  return (
    <div className="min-h-screen bg-[color:var(--cream)] text-foreground">
      {/* HEADER */}
      <header className="py-4">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between gap-4 rounded-full glass shadow-luxe px-4 py-2.5">
            <Link to="/" className="flex items-center gap-3 min-w-0">
              <img src={logoAsset} alt="Clinic logo" className="h-11 w-11 shrink-0 rounded-full object-cover" />
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
                <span className="italic gold-text">Implantologist</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-lg text-muted-foreground">
                Dental implant cases, consultations and restorative work — precision implantology
                by an FCPS certified surgeon.
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
