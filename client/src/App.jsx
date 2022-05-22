import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./App.css"

import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Queens from "./pages/Queens.jsx";
import Players from "./pages/Players.jsx";
import Rules from "./pages/Rules.jsx";
import Weeks from "./pages/Weeks.jsx";
import Draft from "./pages/Draft.jsx";
import Admin from "./pages/Admin.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Players />}/>
          <Route exact path="/queens" element={<Queens />}/>
          <Route exact path="/players" element={<Players />}/>
          <Route exact path="/weeks" element={<Weeks />}/>
          <Route exact path="/rules" element={<Rules />}/>
          <Route exact path="/draft" element={<Draft />}/>
          <Route exact path="/admin" element={<Admin />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
