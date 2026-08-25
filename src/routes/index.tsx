import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal, Counter } from "@/components/motion";
import logoAsset from "@/assets/gallery/logo.png";
import dentistAsset from "@/assets/gallery/dentist-portrait.png";
import consultationAsset from "@/assets/gallery/clinic-office-1.jpeg";
import treatmentRoomAsset from "@/assets/gallery/clinic-treatment-room-1.jpeg";
import { services, clinicGallery } from "@/lib/services-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Center of Dental Implant & Face Surgery — Dr. Sayed Mustafa | Wah Cantt" },
      {
        name: "description",
        content:
          "Premium dental, implant & maxillofacial surgery clinic in Wah Cantt led by Dr. Sayed Mustafa (BDS, FCPS). Implants, braces, wisdom tooth surgery, TMJ, cosmetic facial surgery.",
      },
      { property: "og:title", content: "Center of Dental Implant & Face Surgery — Dr. Sayed Mustafa" },
      { property: "og:description", content: "FCPS Oral & Maxillofacial Surgeon. Implants, orthodontics, facial trauma & cosmetic surgery in Wah Cantt." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: dentistAsset },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: dentistAsset },
    ],
  }),
  component: Home,
});

const whyUs = [
  { t: "FCPS Qualified Surgeon", d: "Dual specialty: implantologist & orthodontist." },
  { t: "State-of-the-Art Clinic", d: "Modern operatory, sterile theatre, digital imaging." },
  { t: "329+ Five-Star Reviews", d: "4.9 average across Google and Marham." },
  { t: "Painless Procedures", d: "Gentle protocols with post-op follow-ups." },
];

const process = [
  { n: "01", t: "Consultation", d: "Comprehensive exam, imaging and honest advice." },
  { n: "02", t: "Personal Plan", d: "Treatment mapped around your goals and budget." },
  { n: "03", t: "Precision Care", d: "Performed by an FCPS qualified surgeon." },
  { n: "04", t: "Aftercare", d: "Post-op check-ins and long-term follow-up." },
];

const testimonials = [
  {
    n: "Hoor Ul Ain",
    r: "Dr Mustafa diagnosed a cyst in my tooth and extracted it with so much perfection. Painless process — truly impressed. Highly recommend for any dental procedure.",
  },
  {
    n: "Ahsan Khan",
    r: "I recently had a root canal by Dr. Sayed Mustafa and I'm extremely satisfied with the entire experience. Professional, calm and clearly world-class.",
  },
  {
    n: "Sayed Shah",
    r: "He diagnosed a pathology that could have broken my jaw. He operated and placed a graft. I am so thankful to Dr Sayed Mustafa.",
  },
  {
    n: "M.H (Marham)",
    r: "Took my son for a mucocele — the doctor treated him gently and professionally, and even called after surgery to check in. Highly recommended.",
  },
];

const faqs = [
  {
    q: "Where is the clinic located?",
    a: "Main Shah Wali Road, near Uppal Chowk, over the ground floor of Amin & Sons Book Store, Shah Wali Colony, Wah Cantt, 47010.",
  },
  {
    q: "What are the clinic timings?",
    a: "Open every day, Monday to Sunday, 4:00 PM – 9:00 PM at the clinic. Online video consultation is available 5:00 AM – 10:00 PM.",
  },
  {
    q: "What is Dr. Sayed Mustafa's qualification?",
    a: "BDS from Khyber Medical University and FCPS in Oral & Maxillofacial Surgery from the College of Physicians and Surgeons Pakistan. 8 years of experience.",
  },
  {
    q: "How much is the consultation fee?",
    a: "PKR 2,000 for in-clinic or online video consultation.",
  },
  {
    q: "Do you offer dental implants and braces?",
    a: "Yes — dental implants, orthodontic braces (visible & invisible), clear aligners, and full mouth rehabilitation.",
  },
  {
    q: "How do I book an appointment?",
    a: "Call or WhatsApp 0330 7644000, or fill out the appointment form on this page.",
  },
];

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div
            className={`flex items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-500 ${
              scrolled ? "glass shadow-luxe" : ""
            }`}
          >
            <a href="#top" className="flex items-center gap-3 min-w-0">
              <img src={logoAsset} alt="Clinic logo" className="h-12 w-12 shrink-0 rounded-full object-cover" />
              <span className="hidden sm:flex flex-col leading-tight min-w-0">
                <span className="text-display text-[15px] truncate">Center of Dental Implant</span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  & Face Surgery
                </span>
              </span>
            </a>
            <nav className="hidden lg:flex items-center gap-8 text-sm text-muted-foreground">
              <a href="#about" className="hover:text-foreground transition">About</a>
              <a href="#dentist" className="hover:text-foreground transition">Dentist</a>
              <a href="#services" className="hover:text-foreground transition">Services</a>
              <a href="#gallery" className="hover:text-foreground transition">Gallery</a>
              <a href="#reviews" className="hover:text-foreground transition">Reviews</a>
              <a href="#contact" className="hover:text-foreground transition">Contact</a>
            </nav>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground shrink-0"
            >
              <span className="hidden sm:inline">Book Appointment</span>
              <span className="sm:hidden">Book</span>
              <span className="grid h-6 w-6 place-items-center rounded-full bg-[color:var(--gold)] text-[color:var(--ink)] transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Decorative bg */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-[color:var(--gold-soft)] opacity-40 blur-3xl animate-float-slower" />
          <div className="absolute top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/15 blur-3xl animate-float-slow" />
          <svg className="absolute inset-x-0 top-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
                  FCPS Qualified · Wah Cantt
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-6 text-display text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-[88px]">
                  Precision dentistry,
                  <br />
                  <span className="italic gold-text">crafted around you.</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                  Center of Dental Implant &amp; Face Surgery — led by
                  <span className="text-foreground"> Dr. Sayed Mustafa</span>, FCPS Oral &amp;
                  Maxillofacial Surgeon. Implants, orthodontics, and cosmetic facial surgery
                  delivered with quiet luxury.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-primary-foreground shadow-luxe transition hover:-translate-y-0.5"
                  >
                    Book Consultation
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-[color:var(--gold)] text-[color:var(--ink)] transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3.5 backdrop-blur transition hover:bg-card"
                  >
                    Explore Services
                  </a>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-12 flex flex-wrap items-center gap-8 text-sm">
                  <div>
                    <div className="text-display text-3xl">
                      <Counter end={4.9} />
                      <span className="text-[color:var(--gold)]">★</span>
                    </div>
                    <div className="text-muted-foreground">329+ Google reviews</div>
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div>
                    <div className="text-display text-3xl">
                      <Counter end={8} suffix="+" />
                    </div>
                    <div className="text-muted-foreground">Years experience</div>
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div>
                    <div className="text-display text-3xl">100%</div>
                    <div className="text-muted-foreground">Patient satisfaction</div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Hero visual */}
            <Reveal delay={200} className="relative">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
                <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-primary to-[color:var(--ink)] shadow-luxe" />
                <img
                  src={dentistAsset}
                  alt="Dr. Sayed Mustafa at Center of Dental Implant & Face Surgery"
                  className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-[28px] object-cover object-top"
                />
                {/* floating cards */}
                <div className="absolute -left-6 top-10 glass rounded-2xl px-4 py-3 shadow-luxe animate-float-slow">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Today</div>
                  <div className="text-display text-lg">4 PM – 9 PM</div>
                </div>
                <div className="absolute -right-4 bottom-14 glass rounded-2xl px-4 py-3 shadow-luxe animate-float-slower">
                  <div className="flex items-center gap-2">
                    <span className="text-[color:var(--gold)]">★★★★★</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">329 reviews</div>
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-dark text-primary-foreground rounded-full px-5 py-2.5 text-sm shadow-luxe whitespace-nowrap">
                  Dr. Sayed Mustafa · BDS, FCPS
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section aria-hidden className="border-y border-border bg-primary text-primary-foreground py-5 overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap text-display text-2xl md:text-3xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16 pr-16">
              <span>Implants</span><span className="text-[color:var(--gold)]">✦</span>
              <span>Orthodontics</span><span className="text-[color:var(--gold)]">✦</span>
              <span>Maxillofacial Surgery</span><span className="text-[color:var(--gold)]">✦</span>
              <span>Cosmetic Facial</span><span className="text-[color:var(--gold)]">✦</span>
              <span>TMJ Care</span><span className="text-[color:var(--gold)]">✦</span>
              <span>Wisdom Tooth</span><span className="text-[color:var(--gold)]">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img src={treatmentRoomAsset} alt="Dental treatment room" className="rounded-3xl object-cover aspect-[3/4] shadow-luxe" />
                <div className="mt-12 space-y-4">
                  <img src={consultationAsset} alt="Patient consultation" className="rounded-3xl object-cover aspect-square shadow-luxe" />
                </div>
              </div>
            </Reveal>
            <div>
              <Reveal>
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  About the clinic
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-4 text-display text-4xl md:text-5xl lg:text-6xl">
                  A calm, modern practice where dentistry feels
                  <span className="italic gold-text"> effortless.</span>
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 text-lg text-muted-foreground">
                  The Center of Dental Implant &amp; Face Surgery is a full-service clinic in Wah
                  Cantt offering routine, cosmetic and specialist maxillofacial care under one
                  roof. Every visit is designed to feel unhurried, precise, and personal.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {whyUs.map((w) => (
                    <div key={w.t} className="rounded-2xl border border-border bg-card p-5">
                      <div className="text-display text-lg">{w.t}</div>
                      <p className="mt-1 text-sm text-muted-foreground">{w.d}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* DENTIST */}
      <section id="dentist" className="relative py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="pointer-events-none absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-[color:var(--gold)]/15 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 relative">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-center">
            <Reveal>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
                <div className="absolute inset-0 rounded-[36px] border border-[color:var(--gold)]/40" />
                <img
                  src={dentistAsset}
                  alt="Dr. Sayed Mustafa portrait"
                  className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] rounded-[28px] object-cover object-top"
                />
                <div className="absolute -bottom-5 -left-5 glass rounded-2xl px-5 py-4 text-foreground">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Consultation</div>
                  <div className="text-display text-2xl">PKR 2,000</div>
                </div>
              </div>
            </Reveal>
            <div>
              <Reveal>
                <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold-soft)]">
                  Meet the surgeon
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-4 text-display text-4xl md:text-5xl lg:text-6xl">
                  Dr. Sayed Mustafa
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-2 text-[color:var(--gold-soft)] tracking-widest text-sm">
                  BDS · FCPS ORAL &amp; MAXILLOFACIAL SURGERY
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl">
                  An FCPS-qualified Oral &amp; Maxillofacial Surgeon with 8 years of specialist
                  experience. Trained at Khyber Medical University and the College of Physicians
                  and Surgeons Pakistan. Consultant at Center of Dental Implant &amp; Face Surgery, Wah Cantt.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <dl className="mt-8 grid gap-6 sm:grid-cols-2 max-w-xl">
                  {[
                    ["Certified Implantologist", "C-Implant"],
                    ["Certified Orthodontist", "C-Ortho"],
                    ["Patient Satisfaction", "100%"],
                    ["Average Wait Time", "10 mins"],
                  ].map(([t, v]) => (
                    <div key={t} className="border-t border-[color:var(--gold)]/25 pt-4">
                      <dt className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold-soft)]">{t}</dt>
                      <dd className="mt-1 text-display text-2xl">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <Reveal>
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Services
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-3 text-display text-4xl md:text-5xl lg:text-6xl max-w-2xl">
                  A complete range of dental & facial care.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <p className="text-muted-foreground max-w-sm">
                From routine hygiene to complex reconstructive surgery — every procedure delivered
                with the same standard of care.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link
                  to="/gallery/$service"
                  params={{ service: s.slug }}
                  className="group block relative h-full overflow-hidden rounded-3xl shadow-luxe transition duration-500 hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={s.cover}
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/85 via-[color:var(--ink)]/10 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                    <div className="h-px w-10 bg-[color:var(--gold)] transition-all duration-500 group-hover:w-16" />
                    <h3 className="mt-3 text-display text-xl md:text-2xl">{s.title}</h3>
                    <p className="mt-1.5 text-xs text-primary-foreground/80 line-clamp-2">{s.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-2 text-xs text-[color:var(--gold-soft)]">
                      View gallery
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-[color:var(--gold)] text-[color:var(--ink)] transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 md:py-32 bg-[color:var(--cream)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Inside the practice
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 text-display text-4xl md:text-5xl lg:text-6xl">
                Clinic &amp; surgery moments.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-muted-foreground">
                A look inside the clinic — for photos of a specific procedure, open that
                service above.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clinicGallery.map((g, i) => (
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
      </section>

      {/* STATS */}
      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-[36px] bg-primary text-primary-foreground p-8 md:p-14 shadow-luxe relative overflow-hidden">
            <div className="pointer-events-none absolute -top-24 -right-24 h-[400px] w-[400px] rounded-full bg-[color:var(--gold)]/20 blur-3xl" />
            <div className="grid gap-10 md:grid-cols-4 relative">
              {[
                { n: 329, s: "+", t: "Patient Reviews" },
                { n: 8, s: "+", t: "Years Experience" },
                { n: 4.9, s: "★", t: "Average Rating" },
                { n: 100, s: "%", t: "Satisfaction" },
              ].map((s, i) => (
                <Reveal key={s.t} delay={i * 100}>
                  <div>
                    <div className="text-display text-6xl md:text-7xl">
                      <Counter end={s.n} suffix={s.s} />
                    </div>
                    <div className="mt-2 text-sm uppercase tracking-[0.25em] text-[color:var(--gold-soft)]">
                      {s.t}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                How it works
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 text-display text-4xl md:text-5xl lg:text-6xl">
                Your treatment, step by step.
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 relative">
            <div className="hidden md:block absolute left-0 right-0 top-8 h-px gold-line" />
            <div className="grid gap-10 md:grid-cols-4">
              {process.map((p, i) => (
                <Reveal key={p.n} delay={i * 120}>
                  <div className="relative">
                    <div className="grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground text-display text-lg shadow-luxe">
                      {p.n}
                    </div>
                    <h3 className="mt-6 text-display text-2xl">{p.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="py-24 md:py-32 bg-[color:var(--cream)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <Reveal>
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Patient stories
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-3 text-display text-4xl md:text-5xl lg:text-6xl max-w-2xl">
                  Loved by 329+ patients.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <div className="flex items-center gap-3 rounded-full glass px-5 py-3">
                <span className="text-[color:var(--gold)] text-lg">★★★★★</span>
                <span className="text-sm">4.9 / 5 · Google &amp; Marham</span>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.n} delay={i * 90}>
                <figure className="h-full rounded-3xl bg-card p-8 border border-border relative">
                  <div className="text-[color:var(--gold)] text-display text-6xl leading-none">
                    &ldquo;
                  </div>
                  <blockquote className="-mt-4 text-lg leading-relaxed">{t.r}</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground text-display">
                      {t.n[0]}
                    </span>
                    <div>
                      <div className="text-display">{t.n}</div>
                      <div className="text-xs text-muted-foreground">Verified review</div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Frequently asked
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 text-display text-4xl md:text-5xl lg:text-6xl">
                Answers, up front.
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <Reveal key={f.q} delay={i * 60}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    className={`w-full text-left rounded-2xl border transition-all duration-500 ${
                      open ? "border-primary/30 bg-card shadow-luxe" : "border-border bg-card/50"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-6 px-6 py-5">
                      <span className="text-display text-lg md:text-xl">{f.q}</span>
                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border transition-transform duration-500 ${
                          open ? "rotate-45 bg-primary text-primary-foreground border-primary" : ""
                        }`}
                        aria-hidden
                      >
                        +
                      </span>
                    </div>
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-muted-foreground">{f.a}</p>
                      </div>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[color:var(--gold)]/15 blur-3xl animate-float-slower" />
        <div className="mx-auto max-w-7xl px-4 relative">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <Reveal>
                <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold-soft)]">
                  Get in touch
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-3 text-display text-4xl md:text-5xl lg:text-6xl">
                  Ready to book your visit?
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 text-lg text-primary-foreground/80 max-w-lg">
                  Call, WhatsApp or drop by the clinic. We&apos;ll help you plan the right
                  treatment.
                </p>
              </Reveal>

              <Reveal delay={220}>
                <div className="mt-10 space-y-6">
                  {[
                    {
                      t: "Clinic",
                      v: "Main Shah Wali Road, near Uppal Chowk, over Amin & Sons Book Store, Shah Wali Colony, Wah Cantt, 47010, Pakistan",
                    },
                    { t: "Phone / WhatsApp", v: "+92 330 7644000" },
                    { t: "Email", v: "smustafa455@gmail.com" },
                    { t: "Hours", v: "Mon – Sun · 4:00 PM – 9:00 PM  |  Online 5 AM – 10 PM" },
                  ].map((row) => (
                    <div key={row.t} className="border-t border-[color:var(--gold)]/25 pt-4">
                      <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold-soft)]">
                        {row.t}
                      </div>
                      <div className="mt-1 text-lg">{row.v}</div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={280}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href="tel:+923307644000"
                    className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3 text-[color:var(--ink)]"
                  >
                    Call now
                  </a>
                  <a
                    href="https://wa.me/923307644000"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 px-6 py-3"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="https://www.google.com/maps/place/(Dentist+)CENTER+OF+DENTAL+IMPLANT+%26+FACE+SURGERY+(Dr+Sayed+Mustafa)/@33.7904432,72.7230269,17z"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 px-6 py-3"
                  >
                    Directions
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const f = new FormData(e.currentTarget);
                  const text = `Appointment request:%0AName: ${f.get("name")}%0APhone: ${f.get("phone")}%0AService: ${f.get("service")}%0AMessage: ${f.get("message")}`;
                  window.open(`https://wa.me/923307644000?text=${text}`, "_blank");
                }}
                className="rounded-3xl glass p-8 text-foreground shadow-luxe"
              >
                <div className="text-display text-2xl">Book an appointment</div>
                <p className="text-sm text-muted-foreground mt-1">
                  We&apos;ll confirm your slot on WhatsApp.
                </p>
                <div className="mt-6 grid gap-4">
                  {[
                    { name: "name", label: "Full name", type: "text" },
                    { name: "phone", label: "Phone number", type: "tel" },
                    { name: "service", label: "Service of interest", type: "text" },
                  ].map((f) => (
                    <label key={f.name} className="block">
                      <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                        {f.label}
                      </span>
                      <input
                        required
                        name={f.name}
                        type={f.type}
                        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-[color:var(--gold)] focus:ring-2 focus:ring-[color:var(--gold)]/30 transition"
                      />
                    </label>
                  ))}
                  <label className="block">
                    <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                      Message
                    </span>
                    <textarea
                      name="message"
                      rows={3}
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-[color:var(--gold)] focus:ring-2 focus:ring-[color:var(--gold)]/30 transition resize-none"
                    />
                  </label>
                  <button
                    type="submit"
                    className="mt-2 group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-3.5 text-primary-foreground transition hover:-translate-y-0.5"
                  >
                    Send request
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-[color:var(--gold)] text-[color:var(--ink)] transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[color:var(--ink)] text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <img src={logoAsset} alt="Logo" className="h-12 w-12 rounded-full object-cover" />
                <div className="leading-tight">
                  <div className="text-display">Center of Dental Implant</div>
                  <div className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--gold-soft)]">
                    &amp; Face Surgery
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-primary-foreground/70 max-w-sm">
                Premium dental, implant and maxillofacial care led by Dr. Sayed Mustafa in Wah
                Cantt, Pakistan.
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold-soft)]">
                Explore
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {["About", "Dentist", "Services", "Gallery", "Reviews", "Contact"].map((l) => (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase()}`}
                      className="text-primary-foreground/80 hover:text-[color:var(--gold)] transition"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold-soft)]">
                Contact
              </div>
              <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
                <li>+92 330 7644000</li>
                <li>smustafa455@gmail.com</li>
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold-soft)]">
                Follow
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.facebook.com/p/Center-Of-Dental-Implant-Face-Surgery-61559146971072/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-foreground/80 hover:text-[color:var(--gold)] transition"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.marham.pk/hospitals/wah-cantt/center-of-dental-implant-face-surgery/wah-cantt"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-foreground/80 hover:text-[color:var(--gold)] transition"
                  >
                    Marham
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-14 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-primary-foreground/60">
            <div>© {new Date().getFullYear()} Center of Dental Implant &amp; Face Surgery. All rights reserved.</div>
            <div>Wah Cantt, Pakistan · QPRG+56</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
