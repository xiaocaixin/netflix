import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";

/*
https://www.figma.com/design/1Mf6jFMoOrqB2vlEMGQagr/Netflix-Design-System-2024-(Website-ver.)-%F0%9F%8E%A5-(Community)?node-id=212-22353&t=zdBpZKA4ewlY1zO2-0
*/

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="outlet-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
