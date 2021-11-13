import "./App.css";
import Header from "./components/Header";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./features/Product";
import Order from "./features/Order";
import Synthetic from "./features/Synthetic";
import Account from "./features/Account";
import Media from "./features/Media";
import Analysis from "./features/Analysis";
import Master from "./features/Master";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Order />} />
          <Route path="/synthetic" element={<Synthetic />} />
          <Route path="/account" element={<Account />} />
          <Route path="/media" element={<Media />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/master" element={<Master />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
