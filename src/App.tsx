import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import PublicStatusPage from "./pages/PublicStatusPage";
import DashboardPage from "./pages/DashboardPage";
import RosterPage from "./pages/RosterPage";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (<div style={{ display: "flex" }}>
    <Sidebar />
    <main style={{ marginLeft: "var(--sidebar-width)", flex: 1, minHeight: "100vh" }}>{children}</main>
  </div>);
}

export default function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<PublicStatusPage />} />
      <Route path="/admin" element={<AdminLayout><DashboardPage /></AdminLayout>} />
      <Route path="/admin/roster" element={<AdminLayout><RosterPage /></AdminLayout>} />
      <Route path="/settings" element={<AdminLayout><DashboardPage /></AdminLayout>} />
    </Routes>
  </BrowserRouter>);
}
