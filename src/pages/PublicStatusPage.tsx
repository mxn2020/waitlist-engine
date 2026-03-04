import { Rocket, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
import { Button, Input } from "@geenius-ui/react-css";

export default function PublicStatusPage() {
    return (<div style={{ minHeight: "100vh", background: "radial-gradient(circle at top center, var(--color-bg-secondary) 0%, var(--color-bg-primary) 100%)", display: "flex", flexDirection: "column" }}>
        <header style={{ padding: "var(--space-6)", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 1200, margin: "0 auto", width: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", fontWeight: 800, fontSize: "1.2rem", letterSpacing: "-0.5px" }}>
                <Rocket size={24} style={{ color: "var(--color-accent-primary)" }} /> ACME CORP
            </div>
            <ThemeToggle />
        </header>

        <main style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "var(--space-8)", textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 12px", borderRadius: 999, background: "var(--color-accent-soft)", color: "var(--color-accent-primary)", fontWeight: 800, fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: "var(--space-6)", border: "1px solid rgba(16,185,129,0.3)" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-accent-primary)", boxShadow: "0 0 10px var(--color-accent-primary)" }}></span> Beta Launching Soon
            </div>

            <h1 className="glowing-text" style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-2px", marginBottom: "var(--space-6)" }}>
                The Next Generation of <br /> <span style={{ color: "var(--color-accent-primary)" }}>Productivity</span>
            </h1>

            <p style={{ fontSize: "1.2rem", color: "var(--color-text-secondary)", marginBottom: "var(--space-8)", maxWidth: 600, lineHeight: 1.6 }}>
                Join 14,235 others on the waitlist and get early access to features that will change how your team operates forever.
            </p>

            <form style={{ display: "flex", gap: "var(--space-3)", width: "100%", maxWidth: 500, marginBottom: "var(--space-8)" }} onSubmit={e => { e.preventDefault(); }}>
                <Input type="email" placeholder="Enter your email address" required style={{ flex: 1, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.3)" }} />
                <Button type="submit" variant="primary" style={{ padding: "0 32px" }}>Join <ArrowRight size={18} /></Button>
            </form>

            <div style={{ display: "flex", gap: "var(--space-6)", color: "var(--color-text-secondary)", fontSize: "14px", fontWeight: 600 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}><ShieldCheck size={16} style={{ color: "var(--color-accent-primary)" }} /> No spam ever</div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}><Zap size={16} style={{ color: "var(--color-accent-primary)" }} /> Instant access for top referrers</div>
            </div>
        </main>
    </div>);
}
