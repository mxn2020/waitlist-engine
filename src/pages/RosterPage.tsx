import { Users, Search, Download, Mail, Trophy } from "lucide-react";
import { Button, Card, Input } from "@geenius-ui/react-css";

const signups = [
    { id: "1", email: "mehdi@openclaw.dev", referrals: 42, position: 1, date: "Oct 20, 2026", source: "Twitter" },
    { id: "2", email: "ceo@startup.io", referrals: 28, position: 2, date: "Oct 21, 2026", source: "Direct" },
    { id: "3", email: "early.adopter@gmail.com", referrals: 15, position: 3, date: "Oct 22, 2026", source: "Newsletter" },
    { id: "4", email: "sarah@example.com", referrals: 0, position: 14235, date: "Today", source: "Organic Search" }
];

export default function RosterPage() {
    return (<div style={{ padding: "var(--space-8)", maxWidth: 1200 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 800, display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Users style={{ color: "var(--color-accent-primary)" }} /> Waitlist Roster</h1>
            <div style={{ display: "flex", gap: "var(--space-2)" }}>
                <Button variant="outline" icon={<Download size={16} />}>Export CSV</Button>
                <Button variant="primary" icon={<Mail size={16} />}>Email Top 100</Button>
            </div>
        </div>

        <Card padding="sm" style={{ marginBottom: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-2)", borderRadius: "var(--radius-full)" }}>
            <Search size={18} style={{ color: "var(--color-text-tertiary)", marginLeft: "var(--space-3)" }} />
            <Input placeholder="Search by email..." style={{ border: "none", background: "transparent", width: "100%", padding: "8px 16px", outline: "none", fontSize: "14px", boxShadow: "none" }} />
        </Card>

        <Card padding="none">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-secondary)" }}>
                        <th style={{ textAlign: "left", padding: "16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)", fontWeight: 800, letterSpacing: 0.5 }}>Pos</th>
                        <th style={{ textAlign: "left", padding: "16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)", fontWeight: 800, letterSpacing: 0.5 }}>Email</th>
                        <th style={{ textAlign: "left", padding: "16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)", fontWeight: 800, letterSpacing: 0.5 }}>Referrals</th>
                        <th style={{ textAlign: "left", padding: "16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)", fontWeight: 800, letterSpacing: 0.5 }}>Source</th>
                        <th style={{ textAlign: "right", padding: "16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)", fontWeight: 800, letterSpacing: 0.5 }}>Joined</th>
                    </tr>
                </thead>
                <tbody>
                    {signups.map(s => (<tr key={s.id} style={{ borderBottom: "1px solid var(--color-border)" }}>
                        <td style={{ padding: "16px", fontWeight: 800, display: "flex", alignItems: "center", gap: 6 }}>
                            {s.position <= 3 ? <Trophy size={16} style={{ color: "#F59E0B" }} /> : <span style={{ width: 16 }}></span>}
                            #{s.position.toLocaleString()}
                        </td>
                        <td style={{ padding: "16px", fontWeight: 600 }}>{s.email}</td>
                        <td style={{ padding: "16px" }}>
                            <span style={{ display: "inline-block", padding: "2px 8px", background: "var(--color-bg-secondary)", borderRadius: 999, fontWeight: 700, fontSize: 13, color: s.referrals > 0 ? "var(--color-accent-primary)" : "var(--color-text-tertiary)" }}>{s.referrals}</span>
                        </td>
                        <td style={{ padding: "16px", color: "var(--color-text-secondary)", fontSize: "14px", fontWeight: 500 }}>{s.source}</td>
                        <td style={{ padding: "16px", textAlign: "right", color: "var(--color-text-tertiary)", fontSize: "14px" }}>{s.date}</td>
                    </tr>))}
                </tbody>
            </table>
        </Card>
    </div>);
}
