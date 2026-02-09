import { Routes, Route } from "react-router-dom";
import Debug from "./pages/Debug";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home Page</div>} />
      <Route path="/admin" element={<div>Admin Page</div>} />
      <Route path="/admin/dashboard" element={<div>Dashboard</div>} />

      {/* DEBUG ROUTE */}
      <Route path="/debug" element={<Debug />} />
    </Routes>
  );
}

export default App;
