import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const AdminProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default AdminProtectedRoute;