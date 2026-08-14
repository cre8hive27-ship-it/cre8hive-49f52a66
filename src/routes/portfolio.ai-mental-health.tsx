import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/Reveal";
import heroAsset from "@/assets/gentle-path-hero.jpg.asset.json";

const hero = heroAsset.url;

const LIVE_URL = "https://gentle-path-create.lovable.app/";

const features = [
  "Responsive Design",
  "Appointment Booking",
  "Therapist Profiles",
  "Service Pages",
  "Contact Forms",
  "AI Therapy Assistant",
  "AI Mood Tracker",
  "CRM Ready",
  "SEO Optimized",
  "Mobile Optimized",
  "Fast Performance",
];

const technologies = [
  "Lovable AI",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Vite",
  "Supabase",
  "Framer Motion",
];

const roles = [
  "Lovable AI Developer",
  "Full-Stack Web Developer",
  "UI/UX Designer",
  "AI Product Builder",
];

const designStyle = [
  "Calm",
  "Minimal",
  "Premium",
  "Healthcare",
  "Soft Animations",
  "Accessibility Focused",
];

export const Route = createFileRoute("/portfolio/ai-mental-health")({
  head: () => ({
    meta: [
      {
        title:
          "AI Mental Health & Therapy Practice Website — Cre8Hive Case Study",
      },
      {
        name: "description",
        content:
          "Case study: a calming AI-powered website for a private mental health and therapy practice, built with Lovable AI.",
      },
      {
        property: "og:title",
        content: "AI Mental Health & Therapy Practice — Cre8Hive Case Study",
      },
      {
        property: "og:description",
        content:
          "A modern AI-powered therapy practice website with booking, therapist profiles and mood tracking.",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content: "https://cre8hive.lovable.app/portfolio/ai-mental-health",
      },
      { property: "og:image", content: hero },
      {
        name: "twitter:title",
        content: "AI Mental Health & Therapy Practice — Cre8Hive Case Study",
      },
      {
        name: "twitter:description",
        content:
          "A modern AI-powered therapy practice website with booking, therapist profiles and mood tracking.",
      },
      { name: "twitter:image", content: hero },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://cre8hive.lovable.app/portfolio/ai-mental-health",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "AI Mental Health & Therapy Practice Website — Cre8Hive Case Study",
          image: hero,
          author: { "@type": "Organization", name: "Cre8Hive" },
          publisher: { "@type": "Organization", name: "Cre8Hive" },
          mainEntityOfPage:
            "https://cre8hive.lovable.app/portfolio/ai-mental-health",
        }),
      },
    ],
  }),
  component: CaseStudy,
});

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground">
      {label}
    </span>
  );
}

function CaseStudy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-24">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-5 pb-16 pt-8 md:px-8 md:pb-24 md:pt-12">
          <Reveal>
            <Link
              to="/"
              hash="portfolio"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to portfolio
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Healthcare • Mental Health • Therapy • AI Web Application
            </p>
            <h1 className="mt-4 text-4xl leading-tight md:text-6xl">
              AI Mental Health & Therapy Practice Website Built with Lovable AI
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
              A calming, trustworthy digital experience for a private therapy
              practice — with online booking, therapist profiles, service pages
              and an AI-powered mood tracker and therapy assistant.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="relative mt-14 overflow-hidden rounded-3xl border border-border bg-muted shadow-[var(--shadow-lift)]">
              <a
                href={LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                aria-label="Open live project"
              >
                <img
                  src={hero}
                  alt="AI Mental Health & Therapy Practice Website preview"
                  className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </a>
            </div>
          </Reveal>
        </section>

        {/* Overview */}
        <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-12 md:grid-cols-3">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Overview
              </p>
            </Reveal>
            <Reveal delay={80} className="md:col-span-2">
              <p className="text-lg leading-relaxed text-foreground">
                This project is a modern AI-powered website for a private mental
                health and therapy practice. It was designed to create a
                calming, trustworthy experience while allowing clients to learn
                about therapy services, book appointments, and access mental
                wellness resources.
              </p>
            </Reveal>
          </div>
        </section>

        {/* My Role */}
        <section className="border-t border-border bg-muted/40 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-3 md:px-8">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                My Role
              </p>
            </Reveal>
            <Reveal delay={80} className="md:col-span-2">
              <div className="flex flex-wrap gap-2">
                {roles.map((r) => (
                  <Chip key={r} label={r} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-3 md:px-8">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Features
              </p>
              <h2 className="mt-4 text-3xl">
                Everything a modern therapy practice needs.
              </h2>
            </Reveal>
            <Reveal delay={80} className="md:col-span-2">
              <div className="grid gap-3 sm:grid-cols-2">
                {features.map((f) => (
                  <div
                    key={f}
                    className="rounded-xl border border-border bg-card p-4 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
                  >
                    {f}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Technologies */}
        <section className="border-t border-border bg-muted/40 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-3 md:px-8">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Technologies
              </p>
            </Reveal>
            <Reveal delay={80} className="md:col-span-2">
              <div className="flex flex-wrap gap-2">
                {technologies.map((t) => (
                  <Chip key={t} label={t} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Design Style */}
        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-3 md:px-8">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Design Style
              </p>
            </Reveal>
            <Reveal delay={80} className="md:col-span-2">
              <div className="flex flex-wrap gap-2">
                {designStyle.map((d) => (
                  <Chip key={d} label={d} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card/60 p-10 backdrop-blur-md md:p-16">
                <h2 className="text-3xl md:text-5xl">
                  Explore the Live Website
                </h2>
                <p className="mt-4 text-muted-foreground">
                  See the full experience — booking flow, AI assistant, mood
                  tracker and more.
                </p>
                <a
                  href={LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground hover:shadow-[var(--shadow-lift)]"
                >
                  <ExternalLink className="h-4 w-4" />
                  Launch Live Demo
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
