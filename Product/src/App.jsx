import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Description from "./pages/Description";
import Documentation from "./pages/Documentation";
import VideoDemo from "./pages/Video";
import Team from "./pages/Team";
import Repository from "./pages/Repository";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Wrapper untuk mendorong footer ke bawah */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/description" element={<Description />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/video" element={<VideoDemo />} />
          <Route path="/team" element={<Team />} />
          <Route path="/repository" element={<Repository />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
