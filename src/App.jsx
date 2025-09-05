import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Forecast from "./pages/Forecast";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-blue-600 text-white flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/forecast">Forecast</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forecast" element={<Forecast />} />
      </Routes>
    </BrowserRouter>
  );
}
