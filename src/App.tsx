import { Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import AdminVerify from "./pages/AdminVerify";
import AdminDashboard from "./pages/AdminDashboard";
import Debug from "./pages/Debug";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/admin" element={<AdminVerify />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/debug" element={<Debug />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
