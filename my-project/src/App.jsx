import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./component/Home";

import Category from "./category/Category";
import About from "./about/About";


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

import { useDispatch, useSelector } from "react-redux";
import { setCart } from "./redux/cartSlice";
import { useAuth } from "./contexts/AuthContext";
import { useEffect } from "react";
import axios from "axios";
import { setWishlist } from "./redux/wishlistSlice";
import CategoryPage from "./pages/CategoryPages";
import AdminLayout from "./admin/components/AdminLayout";
import Dashboard from "./admin/dashboard/Dashboard";

import Products from "./admin/products/Products";
import AddProduct from "./admin/products/AddProduct";
import EditProduct from "./admin/products/EditProduct";
import Users from "./admin/users/Users";
import AdminOrders from "./admin/orders/AdminOrders";
import OrderDetails from "./admin/orders/OrderDetails";
import AdminProtectedRoute from "./routes/AdminProtectedRoute";



import Hero from "./forREVIEW/Hero";
import EditforRview from "./forREVIEW/EditforRview";
import User123 from "./forREVIEW/User123";




function App() {
  const { user } = useAuth();

  const dispatch = useDispatch();

const cart = useSelector(
  (state) => state.cart.cart
);

  useEffect(() => {
  if (!user) {
    return;
  }

  const loadCart = async () => {
    const res = await axios.get(
      `http://localhost:5000/cart?userId=${user.id}`
    );
    dispatch(setCart(res.data));

    const wishlistRes = await axios.get(
   `http://localhost:5000/wishlist?userId=${user.id}`
     );

    dispatch(setWishlist(wishlistRes.data));
  };

  loadCart();
}, [user, dispatch]);

  return (
    <>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<Category />} />
    
          <Route path="/about" element={<About />} />
          <Route path="/:category" element={<CategoryPage />}/>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
  path="/wishlist" element={
    <ProtectedRoute>
      <Wishlist />
    </ProtectedRoute>}/>

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

<Route
  path="/admin"
  element={
    <AdminProtectedRoute>
      <AdminLayout />
      </AdminProtectedRoute>}>

   <Route path="dashboard" element={<Dashboard />} />

   <Route path="products" element={<Products />} />

   <Route path="add-product" element={<AddProduct />} />

   <Route path="edit-product/:id" element={<EditProduct />} />

   <Route path="users" element={<Users />} />

   <Route path="orders" element={<AdminOrders />} />

   <Route
      path="orders/:id"
      element={<OrderDetails />}
   />

</Route>

          <Route path="hero" element={<Hero />}/>
          <Route path="/editforrview/:id" element={<EditforRview />}/>
          <Route path="/user123" element={<User123 />}/>
         
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