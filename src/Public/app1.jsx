import { Routes, Route } from "react-router-dom";

import Header from "./header.jsx";
import Home from "./home.jsx";
import Products from "./pro.jsx";
import Consultation from "./consulation.jsx";
import Connect from "./contect.jsx";

function Publicapp1() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </>
  );
}

export default Publicapp1;
