import { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-xl flex-col items-center justify-center px-4 py-10">
        {children}
      </div>
    </div>
  );
}

export function TapeCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative w-full animate-fade-in ${className}`}>
      <div
        aria-hidden
        className="absolute -top-4 left-1/2 z-10 h-7 w-28 -translate-x-1/2 -rotate-3 rounded-sm opacity-90"
        style={{
          background: "var(--tape)",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0 6px, rgba(255,255,255,0.25) 6px 8px)",
        }}
      />
      <div className="rounded-3xl border-2 border-dashed border-primary/40 bg-card p-6 sm:p-8 shadow-[0_18px_50px_-20px_rgba(190,40,120,0.35)]">
        {children}
      </div>
    </div>
  );
}