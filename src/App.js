import Contact from "./components/contact";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/contact"  element={<Contact />} />
        {/* <Route path="resume" element={<Resume />} /> */}
      </Routes>

    </BrowserRouter>
  );
}

export default App;