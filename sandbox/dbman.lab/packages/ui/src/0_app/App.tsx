import { Routes, Route } from "react-router";
import MainLayout from "./layout/MainLayout";
import { DashboardPage } from "@/1_pages/dashboard/ui/DashboardPage";
import { SettingsPage } from "@/1_pages/settings/ui/SettingsPage";
import { PackagePage } from "@/1_pages/package/ui/PackagePage";
import { ConnectionPage } from "@/1_pages/connection/ui/ConnectionPage";
import { DesignPage } from "@/1_pages/design/ui/DesignPage";
import { QueryPage } from "@/1_pages/query/ui/QueryPage";
import { DocumentingPage } from "@/1_pages/documenting/ui/DocumentingPage";
import { ValidationPage } from "@/1_pages/validation/ui/ValidationPage";
import { MockingPage } from "@/1_pages/mocking/ui/MockingPage";
import { HomePage } from "@/1_pages/home/ui/HomePage";


function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="package" element={<PackagePage />} />
        <Route path="connection" element={<ConnectionPage />} />
        <Route path="design" element={<DesignPage />} />
        <Route path="query" element={<QueryPage />} />
        <Route path="documenting" element={<DocumentingPage />} />
        <Route path="validation" element={<ValidationPage />} />
        <Route path="mocking" element={<MockingPage />} />
        {/* {import.meta.env.MODE === "development" && (
          <Route path="sandbox" element={<SandboxPage />} />
        )} */}
      </Route>
    </Routes>
  );
}

export default App;
