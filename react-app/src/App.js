import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";
import Contact from "./Contact";
import Header from "./component/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
