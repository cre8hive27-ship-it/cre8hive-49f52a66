import { useEffect, useState } from "react";
import { X } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/2348084321154?text=Hi%20Jerry!%20I%20found%20your%20portfolio%20and%20I'm%20interested%20in%20working%20with%20you%20on%20a%20project.";

const SESSION_KEY = "wa_bubble_dismissed";

export function WhatsAppButton() {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY) === "1") return;
    const t = window.setTimeout(() => setShowBubble(true), 8000);
    return () => window.clearTimeout(t);
  }, []);

  const dismissBubble = () => {
    setShowBubble(false);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  const handleClick = () => {
    try {
      // Basic analytics hook — works with GA / Plausible / gtag if present
      const w = window as unknown as {
        gtag?: (...args: unknown[]) => void;
        plausible?: (...args: unknown[]) => void;
        dataLayer?: unknown[];
      };
      if (typeof w.gtag === "function") {
        w.gtag("event", "whatsapp_click", { event_category: "engagement" });
      }
      if (typeof w.plausible === "function") {
        w.plausible("WhatsApp Click");
      }
      if (Array.isArray(w.dataLayer)) {
        w.dataLayer.push({ event: "whatsapp_click" });
      }
    } catch {
      /* ignore */
    }
    dismissBubble();
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 md:bottom-6 md:right-6">
      {showBubble && (
        <div
          role="dialog"
          aria-label="Chat prompt"
          className="relative max-w-[260px] animate-fade-in rounded-2xl border border-border bg-background px-4 py-3 pr-8 text-sm text-foreground shadow-lift"
        >
          <p className="leading-snug">
            👋 Need a website, AI automation, or CRM setup? Let's chat!
          </p>
          <button
            type="button"
            onClick={dismissBubble}
            aria-label="Dismiss chat prompt"
            className="absolute right-1.5 top-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          <span
            aria-hidden="true"
            className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 border-b border-r border-border bg-background"
          />
        </div>
      )}

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Chat with me on WhatsApp"
        title="Chat with me on WhatsApp"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lift transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
        style={{ backgroundColor: "#25D366" }}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full"
          style={{
            backgroundColor: "#25D366",
            animation: "wa-pulse 2s ease-out infinite",
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="relative h-7 w-7"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.13-.616.13-.918 0-.286-2.207-1.174-2.593-1.174zM16.15 3.203c-7.176 0-13 5.822-13 13 0 2.406.654 4.75 1.897 6.798L3.087 29.005c-.061.181.001.386.152.502.111.086.24.128.371.128a.6.6 0 0 0 .166-.023l6.242-1.902a12.87 12.87 0 0 0 6.13 1.549c7.176 0 13-5.822 13-13S23.325 3.203 16.15 3.203zm0 24.284a11.24 11.24 0 0 1-5.669-1.53.607.607 0 0 0-.481-.062l-4.735 1.442 1.446-4.599a.6.6 0 0 0-.056-.501 11.253 11.253 0 0 1-1.717-5.988c0-6.229 5.056-11.286 11.286-11.286 6.229 0 11.284 5.056 11.284 11.286s-5.056 11.286-11.286 11.286z" />
        </svg>
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
          Chat with me on WhatsApp
        </span>
      </a>

      <style>{`
        @keyframes wa-pulse {
          0% { transform: scale(1); opacity: 0.6; }
          70% { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
