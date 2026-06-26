import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./component/Home";

import Category from "./category/Category";
import About from "./about/About";
import Page from "./realflrpage/Page";
import Crochet from "./crochet/Crochet";
import Wedding from "./wedding/Wedding";

import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import Login from "./Authentication/Login";
import Register from "./Authentication/Register";

import ProtectedRoute from "./routes/ProtectedRoute";
import ExploreHome from "./explore/Explorehome";
import Razorpay from "./pages/Razorpay";
import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";
import Filtering from "./filtering/Filtering";


function App() {
  return (
    <>
      <Toaster position="top-right" />

      <BrowserRouter>
        <Routes>
          <Route path="/filtering" element={<Filtering />}/>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<Category />} />
    
          <Route path="/about" element={<About />} />
          <Route path="/flowers" element={<Page />} />
          <Route path="/crochet" element={<Crochet />} />
          <Route path="/wedding" element={<Wedding />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/wishlist" element={<Wishlist />} />

          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />

          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />


          <Route path="/explore" element={<ExploreHome />} />

          <Route path="/razorpay" element={<Razorpay />} />
          <Route path="/order-success" element={<OrderSuccess />} />

          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;



























// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./component/Home";

// import Gift from "./gifting/Gift";
// import Category from "./category/Category";
// import About from "./about/About";
// import Page from "./realflrpage/Page";
// import Crochet from "./crochet/Crochet"; 
// import Wedding from "./wedding/Wedding";
// import Wishlist from "./pages/Wishlist";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import Login from "./Authentication/Login";



// function App() {
//   return (
  
//     <BrowserRouter>
//       <Routes>

//         <Route path="/" element={<Home />} />
//         <Route path="home" element={<Home />} />
//         <Route path="category" element={<Category />}/>
//         <Route path="/gift" element={<Gift />}/>
//         <Route path="/about" element={<About />}/>
//         <Route path="/flowers" element={<Page />} />
//         <Route path="/crochet" element={<Crochet />} />
//         <Route path="/wedding" element={<Wedding />} />
//          <Route path="/wishlist" element={<Wishlist />} />
//          <Route path="/cart" element={<Cart />} />
//          <Route path="/checkout" element={<Checkout />} />
//          <Route path="/login" element={<Login />} />


//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;