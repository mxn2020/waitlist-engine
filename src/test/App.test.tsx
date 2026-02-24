import { describe, it, expect } from "vitest"; import { render, screen } from "@testing-library/react"; import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar"; import PublicStatusPage from "../pages/PublicStatusPage"; import DashboardPage from "../pages/DashboardPage"; import RosterPage from "../pages/RosterPage";
function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
    it("Sidebar renders", () => { wrap(<Sidebar />); expect(screen.getByText("Waitlist.Engine")).toBeInTheDocument(); });
    it("PublicStatusPage renders", () => { wrap(<PublicStatusPage />); expect(screen.getByText("The Next Generation of")).toBeInTheDocument(); });
    it("DashboardPage renders", () => { wrap(<DashboardPage />); expect(screen.getByText("Waitlist Overview")).toBeInTheDocument(); });
    it("RosterPage renders", () => { wrap(<RosterPage />); expect(screen.getByText("ceo@startup.io")).toBeInTheDocument(); });
});
