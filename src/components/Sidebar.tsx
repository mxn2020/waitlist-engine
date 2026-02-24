import { Link, useLocation } from "react-router-dom";
import { Rocket, BarChart2, Users, Settings, Target } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
export default function Sidebar() {
    const loc = useLocation();
    const links = [
        { to: "/admin", icon: BarChart2, label: "Dashboard" },
        { to: "/admin/roster", icon: Users, label: "Waitlist Roster" },
        { to: "/", icon: Target, label: "Public Landing" },
        { to: "/settings", icon: Settings, label: "Settings" }
    ];
    return (<aside style={{ width: "var(--sidebar-width)", background: "var(--color-bg-card)", borderRight: "1px solid var(--color-border)", height: "100vh", position: "fixed", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-3)", borderBottom: "1px solid var(--color-border)" }}>
            <div style={{ background: "var(--color-accent-primary)", borderRadius: "8px", padding: 8, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 15px rgba(16,185,129,0.4)" }}><Rocket size={18} style={{ color: "var(--color-text-inverse)" }} /></div>
            <strong style={{ fontSize: "1.1rem", fontWeight: 800, letterSpacing: "-0.5px", textTransform: "uppercase" }}>Waitlist.Engine</strong>
        </div>
        <nav style={{ padding: "var(--space-4)", flex: 1, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            {links.map(l => <Link key={l.to} to={l.to} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "var(--space-3)", borderRadius: "var(--radius-sm)", color: loc.pathname === l.to ? "var(--color-accent-primary)" : "var(--color-text-secondary)", background: loc.pathname === l.to ? "var(--color-accent-soft)" : "transparent", fontWeight: 700, fontSize: "14px", transition: "all var(--transition-fast)" }}><l.icon size={18} />{l.label}</Link>)}
        </nav>
        <div style={{ padding: "var(--space-4)", borderTop: "1px solid var(--color-border)", display: "flex", justifyContent: "flex-end" }}><ThemeToggle /></div>
    </aside>);
}
