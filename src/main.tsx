import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import Debug from "./pages/Debug";

<Route path="/debug" element={<Debug />} />

createRoot(document.getElementById("root")!).render(<App />);
