import "./App.css";
import Product from "./components/Product";

import Topnav from "./components/Topnav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topnav />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
