import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Navbar } from "components";
import Cart from "pages/cart/container/Cart";
import Home from "pages/home/container/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <ToastContainer style={{ zIndex: 1000001 }} />
    </div>
  );
}

export default App;
