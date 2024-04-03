import Contact from "./components/contact";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/contact"  element={<Contact />} />
        <Route path="resume" element={<Resume />} />
        <Route path="/projects"  element={<Portfolio />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;