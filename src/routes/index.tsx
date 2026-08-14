import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Trust } from "@/components/site/Trust";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

const SITE = "https://cre8hive.lovable.app";
const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2fcfbf98-d8d7-433c-add8-f11cca4b638d/id-preview-258aef1c--9e97f157-30c2-4998-857b-657f13985606.lovable.app-1783385867378.png";

const TITLE = "Cre8Hive — AI-Powered Web, App & Automation Agency";
const DESCRIPTION =
  "Cre8Hive is a digital agency building AI-powered websites, mobile apps, automations, CRM setups and brands. Launch in weeks, not quarters.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "digital agency, web development, AI automation, mobile app development, CRM setup, UI/UX design, branding",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Cre8Hive",
          url: `${SITE}/`,
          image: OG_IMAGE,
          description: DESCRIPTION,
          email: "hello@cre8hive.com",
          telephone: "+2348084321154",
          areaServed: "Worldwide",
          serviceType: [
            "Web Development",
            "Mobile App Development",
            "AI Automation",
            "CRM & Email Marketing",
            "Branding",
            "UI/UX Design",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Portfolio />
        <Process />
        <WhyUs />
        <Testimonials />
        <Stats />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
