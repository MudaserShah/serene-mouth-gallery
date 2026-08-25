import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/motion";
import logoAsset from "@/assets/gallery/logo.png";
import { getServiceBySlug, services } from "@/lib/services-data";

export const Route = createFileRoute("/gallery/$service")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.service);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.title} Gallery — Center of Dental Implant & Face Surgery`
          : "Gallery — Center of Dental Implant & Face Surgery",
      },
      {
        name: "description",
        content: loaderData?.desc ?? "Dental, jaw & face treatment gallery.",
      },
    ],
  }),
  component: ServiceGallery,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center text-center px-4">
      <div>
        <h1 className="text-display text-3xl">Service not found</h1>
        <Link to="/" className="mt-4 inline-block text-sm underline">
          Back to home
        </Link>
      </div>
    </div>
  ),
});

function ServiceGallery() {
  const service = Route.useLoaderData();

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
              hash="services"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground shrink-0"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-[color:var(--gold)] text-[color:var(--ink)] transition-transform group-hover:-translate-x-0.5">
                ←
              </span>
              Back to services
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
                Service Gallery
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-3 text-display text-4xl md:text-5xl lg:text-6xl">
                <span className="italic gold-text">{service.title}</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-lg text-muted-foreground">{service.desc}</p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.gallery.map((g, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="group relative w-full overflow-hidden rounded-3xl bg-[color:var(--ink)]/5 shadow-luxe">
                  <img
                    src={g.src}
                    alt={g.alt}
                    className="max-h-[70vh] w-full object-contain transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Other services */}
          <div className="mt-20 border-t border-border pt-10">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground text-center">
              Other services
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {services
                .filter((s) => s.slug !== service.slug)
                .map((s) => (
                  <Link
                    key={s.slug}
                    to="/gallery/$service"
                    params={{ service: s.slug }}
                    className="rounded-full border border-border px-4 py-2 text-sm hover:bg-[color:var(--gold-soft)] transition"
                  >
                    {s.title}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
