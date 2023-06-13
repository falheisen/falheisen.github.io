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
      <Route path="/personal-page" element={<About />} />
      <Route path="/personal-page/CV" element={<CV />} />
      <Route path="/personal-page/Contact" element={<Contact />} />
      <Route path="/personal-page/Music" element={<Music />} />
      {/* <Route path="/personal-page/Travels" element={<Travels />} /> */}
      <Route path="/personal-page/Projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
