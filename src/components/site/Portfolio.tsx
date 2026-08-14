import { ArrowUpRight, ExternalLink, FileText } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import gentlePathAsset from "@/assets/gentle-path-hero.jpg.asset.json";
import noorAsset from "@/assets/noor-al-hidayah-hero.jpg.asset.json";
import neatNoteAsset from "@/assets/neat-note-hero.jpg.asset.json";
import deenFlowAsset from "@/assets/deen-flow-hero.jpg.asset.json";
import niyyahCoreAsset from "@/assets/niyyah-core-hero.jpg.asset.json";
import smoothAsset from "@/assets/smooth-design-replicator-hero.jpg.asset.json";
import kitchenArtistryAsset from "@/assets/kitchen-artistry-hero.jpg.asset.json";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const p1 = gentlePathAsset.url;
const pNoor = noorAsset.url;
const pNeatNote = neatNoteAsset.url;
const pDeenFlow = deenFlowAsset.url;
const pNiyyahCore = niyyahCoreAsset.url;
const pSmooth = smoothAsset.url;
const pKitchenArtistry = kitchenArtistryAsset.url;

type Project = {
  img: string;
  category: string;
  title: string;
  desc: string;
  liveUrl?: string;
  liveLabel?: string;
  caseStudyTo?: string;
  tech?: string[];
};

const projects: Project[] = [
  {
    img: pSmooth,
    category: "UI/UX • Frontend Development • Design Replication",
    title: "Smooth Design Replicator",
    desc: "A pixel-perfect recreation of a modern landing page built with Lovable — responsive, production-ready, and finely tuned for smooth interactions and excellent UX.",
    liveUrl: "https://smooth-design-replicator.lovable.app",
    liveLabel: "View Live Demo",
    tech: ["Lovable", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    img: p1,
    category: "Healthcare • Mental Health • Therapy • AI Web Application",
    title: "AI Mental Health & Therapy Practice Website Built with Lovable AI",
    desc: "A calming, AI-powered website for a private therapy practice with booking, therapist profiles and mood tracking.",
    liveUrl: "https://gentle-path-create.lovable.app/",
    caseStudyTo: "/portfolio/ai-mental-health",
  },
  {
    img: pNoor,
    category: "Website Development",
    title: "Noor Al-Hidayah Portal",
    desc: "A modern Islamic education and community platform for students, teachers, and administrators.",
    liveUrl: "https://noor-al-hidayah-portal.lovable.app",
  },
  {
    img: pNeatNote,
    category: "Landing Page",
    title: "Neat Note",
    desc: "A modern, minimal landing page for a distraction-free note-taking app.",
    liveUrl: "https://neat-note-home.lovable.app",
  },
  {
    img: pDeenFlow,
    category: "Web Application",
    title: "Deen Flow",
    desc: "A modern Islamic productivity and habit-tracking web app for daily worship and personal goals.",
    liveUrl: "https://deen-flow-app.lovable.app",
  },
  {
    img: pNiyyahCore,
    category: "Web Application",
    title: "Niyyah Core",
    desc: "A modern Islamic web application that helps Muslims build consistent worship habits through daily reflection and intentional spiritual growth.",
    liveUrl: "https://niyyah-core.lovable.app",
  },
  {
    img: p3,
    category: "Mobile App",
    title: "Muni Finance",
    desc: "A minimal, fast personal finance app for iOS & Android.",
  },
  {
    img: p4,
    category: "AI Automation",
    title: "Asalon Workflows",
    desc: "Visual AI workflow builder saving 20+ hours a week.",
  },
  {
    img: p5,
    category: "Website",
    title: "Marta Filly Kitchen",
    desc: "Story-driven restaurant site with reservations.",
  },
  {
    img: p6,
    category: "Branding",
    title: "The Naide Identity",
    desc: "A complete brand system for a luxury studio.",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-muted/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Selected Work
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl">
              Products we've helped ship.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A snapshot of recent work across web, mobile, AI and brand.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const hasLive = Boolean(p.liveUrl);
            const CardWrapper = ({ children }: { children: React.ReactNode }) =>
              hasLive ? (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  aria-label={`${p.title} — open live project`}
                >
                  {children}
                </a>
              ) : (
                <div>{children}</div>
              );

            return (
              <Reveal key={p.title} delay={i * 50}>
                <article className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                  <CardWrapper>
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={p.img}
                        alt={p.title}
                        loading="lazy"
                        width={1200}
                        height={900}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="flex items-start justify-between gap-4 p-6">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {p.category}
                        </p>
                        <h3 className="mt-2 text-lg">{p.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {p.desc}
                        </p>
                        {p.tech && p.tech.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {p.tech.map((t) => (
                              <span
                                key={t}
                                className="inline-flex items-center rounded-full border border-border bg-muted px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-foreground"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </CardWrapper>

                  {hasLive && (
                    <div className="flex flex-wrap gap-2 border-t border-border p-4">
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        {p.liveLabel ?? "View Live Project"}
                      </a>
                      {p.caseStudyTo && (
                        <Link
                          to={p.caseStudyTo}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
                        >
                          <FileText className="h-3.5 w-3.5" />
                          View Case Study
                        </Link>
                      )}
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
