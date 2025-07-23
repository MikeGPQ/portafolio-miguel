import './App.css';
import { app } from "./firebase";
import { Navbar } from "./Componentes/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
          <Routes>
              <Route path="/*" element={<Navbar/>} />
        </Routes>
    </Router>
  );
}

export default App;
