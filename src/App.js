import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Firmlist from "./components/firmlist/Firmlist";
import Firmadd from "./components/firmadd/Firmadd";
function App() {
  return (
    <>
      <Router>
        <div className="page">
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/firmlist" element={<Firmlist />} />
              <Route path="/firmadd" element={<Firmadd />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
