import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";
import AuthProvider from "./contexts/AuthContext";
import { ShopProvider } from "./context/ShopContext";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ShopProvider>
      <App />
    </ShopProvider>
  </AuthProvider>
);

