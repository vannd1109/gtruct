import "./App.css";
import Header from "./components/Header";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./features/Product";
import Order from "./features/Order";
import Synthetic from "./features/Synthetic";
import Account from "./features/Account";
import Media from "./features/Media";
import Analysis from "./features/Analysis";
import Master from "./features/Master";
import Home from "./features/Home";

function App() {
  const [title, setTitle] = useState("");

  const handleSetTitle = () => {
    console.log(title);
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/product"
            element={
              <Product
                handleSetTitle={handleSetTitle}
                title={title}
                setTitle={setTitle}
              />
            }
          />
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
