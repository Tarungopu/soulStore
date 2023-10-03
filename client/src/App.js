import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import Cart from "./Pages/Cart/Cart.js";
import SingleProduct from "./components/ProductCard/SingleProduct";
import Signin from "./Pages/Signin/Signin";
import Registration from "./Pages/Registration/Registration";
import Myorders from "./Pages/Myorders/Myorders";
import Shipping from "./Pages/Shipping/Shipping";
import Payment from "./Pages/Shipping/Payment";
import PlaceOrder from "./Pages/Shipping/PlaceOrder";
import NotFound from "./Pages/NotFound/NotFound";
import EditingUsers from "./Pages/Admin/EditingUsers/EditingUsers";
import AllProducts from "./Pages/Admin/AllProducts/AllProducts";
import Allusers from "./Pages/Admin/Allusers/Allusers";
import ProductForm from "./Pages/Admin/ProductForm";
import EditProduct from "./Pages/Admin/EditProduct/EditProduct.js";
import Allorders from "./Pages/Admin/Allorders/Allorders";
import About from "./Pages/About/About.js";

function App() {
  return (
    <>
      <div className="container1" style={{ minHeight: "90vh" }}>
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<ProductCard />} />
            <Route path="/search/:words" element={<ProductCard />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/cart" element={<Cart />}>
              <Route path=":id/:qty" element={<Cart />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/placeorder" element={<PlaceOrder />} />
            <Route path="*" element={<NotFound />} />

            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/myorders" element={<Myorders />} />

            {/* admin routes        */}
            <Route path="/allusers" element={<Allusers />} />
            <Route path="/users/:id" element={<EditingUsers />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route path="/productform" element={<ProductForm />} />
            <Route path="/edit/:id" element={<EditProduct />} />
            <Route path="/allorders" element={<Allorders />} />
          </Routes>
        </Router>
      </div>

      <Footer />
    </>
  )
}

export default App;
