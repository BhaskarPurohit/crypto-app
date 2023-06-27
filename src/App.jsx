import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CoinDetails from "./components/CoinDetails"
import Coins from "./components/Coins";
import Home  from "./components/Home";
import React from "react";
import Exchanges from "./components/Exchanges";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path="/exchanges" element={<Exchanges/>}/>
        <Route path="/coin/:id" element={<CoinDetails/>}/>
      </Routes>
    </Router>
    
    
  );
}

export default App;
