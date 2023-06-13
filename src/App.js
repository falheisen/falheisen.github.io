import { Routes, Route } from "react-router-dom";
import "./index.css";

import About from "./pages/About";
import Music from "./pages/Music.js";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
// import Travels from "./pages/Travels";
import Projects from "./pages/Projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/CV" element={<CV />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Music" element={<Music />} />
      {/* <Route path="/personal-page/Travels" element={<Travels />} /> */}
      <Route path="/Projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
