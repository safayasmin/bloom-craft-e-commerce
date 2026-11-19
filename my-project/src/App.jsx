import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { setCart } from "./redux/cartSlice";
import { setWishlist } from "./redux/wishlistSlice";
import { useAuth } from "./contexts/AuthContext";
import PageLoader from "./component/PageLoader";

// Lazy-loaded public & shop routes
const Home = lazy(() => import("./component/Home"));
const Category = lazy(() => import("./category/Category"));
const About = lazy(() => import("./about/About"));
const CategoryPage = lazy(() => import("./pages/CategoryPages"));
const ExploreHome = lazy(() => import("./explore/Explorehome"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Orders = lazy(() => import("./pages/Orders"));
const OrderSuccess = lazy(() => import("./pages/OrderSuccess"));
const Razorpay = lazy(() => import("./pages/Razorpay"));
const Login = lazy(() => import("./Authentication/Login"));
const Register = lazy(() => import("./Authentication/Register"));

// Route guards
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminProtectedRoute from "./routes/AdminProtectedRoute";

// Lazy-loaded admin routes
const AdminLayout = lazy(() => import("./admin/components/AdminLayout"));
const Dashboard = lazy(() => import("./admin/dashboard/Dashboard"));
const Products = lazy(() => import("./admin/products/Products"));
const AddProduct = lazy(() => import("./admin/products/AddProduct"));
const EditProduct = lazy(() => import("./admin/products/EditProduct"));
const Users = lazy(() => import("./admin/users/Users"));
const AdminOrders = lazy(() => import("./admin/orders/AdminOrders"));
const OrderDetails = lazy(() => import("./admin/orders/OrderDetails"));
const Safa = lazy(() => import("./admin/Safa"));

function App() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) return;

    let isMounted = true;
    const loadUserData = async () => {
      try {
        const [cartRes, wishlistRes] = await Promise.all([
          axios.get(`http://localhost:5000/cart?userId=${user.id}`),
          axios.get(`http://localhost:5000/wishlist?userId=${user.id}`),
        ]);
        if (isMounted) {
          dispatch(setCart(cartRes.data));
          dispatch(setWishlist(wishlistRes.data));
        }
      } catch (err) {
        console.error("Error loading user cart/wishlist:", err);
      }
    };

    loadUserData();
    return () => {
      isMounted = false;
    };
  }, [user, dispatch]);

  return (
    <>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/about" element={<About />} />
            <Route path="/:category" element={<CategoryPage />} />
            <Route path="/explore" element={<ExploreHome />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/wishlist"
              element={
                <ProtectedRoute>
                  <Wishlist />
                </ProtectedRoute>
              }
            />

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

            <Route path="/razorpay" element={<Razorpay />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/orders" element={<Orders />} />

            {/* Admin Routes */}
            <Route
              path="/admin"
              element={
                <AdminProtectedRoute>
                  <AdminLayout />
                </AdminProtectedRoute>
              }
            >
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="products" element={<Products />} />
              <Route path="add-product" element={<AddProduct />} />
              <Route path="edit-product/:id" element={<EditProduct />} />
              <Route path="users" element={<Users />} />
              <Route path="orders" element={<AdminOrders />} />
              <Route path="orders/:id" element={<OrderDetails />} />
              <Route path="safa" element={<Safa />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
