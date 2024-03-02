import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Footer from "./custome/Footer";
import HomePage from "./custome/HomePage";
import About from "./custome/About";
import TitlePage from "./custome/TitlePage";
import Courses from "./custome/Courses";
import Careers from "./custome/Careers";

function App() {
  return (
    <Router>
      <div>
        <TitlePage />
        <Routes>
          <Route path="/genius-tech" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
