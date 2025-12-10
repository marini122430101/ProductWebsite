import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Description from "./pages/Description";
import Documentation from "./pages/Documentation";
import VideoDemo from "./pages/Video";
import Team from "./pages/Team";
import Repository from "./pages/Repository";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>

        <Navbar />

        {/* Konten akan memenuhi ruang kosong */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/description" element={<Description />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/video" element={<VideoDemo />} />
            <Route path="/team" element={<Team />} />
            <Route path="/repository" element={<Repository />} />
          </Routes>
        </main>

        <Footer />

      </BrowserRouter>
    </div>
  );
}
