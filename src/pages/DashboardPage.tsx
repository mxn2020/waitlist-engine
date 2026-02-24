import { BarChart2, TrendingUp, Users, Share2 } from "lucide-react";
export default function DashboardPage() {
    return (<div style={{ padding: "var(--space-8)", maxWidth: 1200 }}>
        <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 800, marginBottom: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><BarChart2 style={{ color: "var(--color-accent-primary)" }} /> Waitlist Overview</h1>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--space-4)", marginBottom: "var(--space-8)" }}>
            <div className="card" style={{ padding: "var(--space-5)", background: "linear-gradient(135deg, var(--color-bg-card) 0%, var(--color-bg-secondary) 100%)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", right: -20, top: -20, opacity: 0.05 }}><Users size={120} /></div>
                <div style={{ fontSize: "13px", fontWeight: 800, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: 1 }}>Total Signups</div>
                <div className="glowing-text" style={{ fontSize: "3rem", fontWeight: 800, marginTop: 8, color: "var(--color-text-primary)" }}>14,235</div>
            </div>
            <div className="card" style={{ padding: "var(--space-5)" }}>
                <div style={{ fontSize: "13px", fontWeight: 800, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: 1, display: "flex", justifyContent: "space-between" }}>Conversion Rate <TrendingUp size={16} style={{ color: "var(--color-accent-primary)" }} /></div>
                <div style={{ fontSize: "3rem", fontWeight: 800, marginTop: 8 }}>18.4%</div>
                <div style={{ fontSize: "13px", color: "var(--color-text-tertiary)", fontWeight: 600, marginTop: 4 }}>from 77k unique visitors</div>
            </div>
            <div className="card" style={{ padding: "var(--space-5)" }}>
                <div style={{ fontSize: "13px", fontWeight: 800, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: 1, display: "flex", justifyContent: "space-between" }}>Viral Factor <Share2 size={16} style={{ color: "#8B5CF6" }} /></div>
                <div style={{ fontSize: "3rem", fontWeight: 800, marginTop: 8 }}>1.24x</div>
                <div style={{ fontSize: "13px", color: "var(--color-text-tertiary)", fontWeight: 600, marginTop: 4 }}>Avg referrals per user</div>
            </div>
        </div>

        <div className="card" style={{ padding: "var(--space-6)", minHeight: 300, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <BarChart2 size={48} style={{ color: "var(--color-border-strong)", marginBottom: "var(--space-4)" }} />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "var(--space-2)" }}>Growth Chart</h3>
            <p style={{ color: "var(--color-text-secondary)", fontWeight: 500 }}>Chart visualization requires a charting library.</p>
        </div>
    </div>);
}
