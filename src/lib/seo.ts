/**
 * Site-wide SEO configuration.
 *
 * GOOGLE_SITE_VERIFICATION: paste the token value from Google Search Console
 * (the `content` value of the HTML tag method, e.g. "abc123..."). Leave it as
 * an empty string to omit the verification meta tag entirely.
 *
 * It can also be supplied at build time via VITE_GOOGLE_SITE_VERIFICATION.
 */
export const SITE_URL = "https://cre8hive.lovable.app";

export const GOOGLE_SITE_VERIFICATION =
  import.meta.env["VITE_GOOGLE_SITE_VERIFICATION"] ?? "";

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Cre8Hive",
  legalName: "Cre8Hive",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/favicon.ico`,
  },
  slogan: "Create • Build • Grow",
  description:
    "Digital agency building AI-powered websites, apps, automations and brands.",
  email: "hello@cre8hive.com",
  areaServed: "Worldwide",
  knowsAbout: [
    "Web Development",
    "Mobile App Development",
    "AI Automation",
    "CRM & Email Marketing",
    "Branding",
    "UI/UX Design",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+2348084321154",
      email: "hello@cre8hive.com",
      availableLanguage: ["en"],
    },
  ],
};
