import { createContext, useContext, useEffect, useState } from "react";
import { loginUser, registerUser, getUserById } from "../services/authApi";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // LOAD USER
 useEffect(() => {
  const loadUser = async () => {
    const id = localStorage.getItem("userId");

    if (!id) {
      setLoading(false);
      return;
    }

    try {
      const data = await getUserById(id);

      if (data) {
        setUser(data);
      } else {
        localStorage.removeItem("userId");
        localStorage.removeItem("user");
        setUser(null);
      }
    } catch (error) {
      console.log(error);

      localStorage.removeItem("userId");
      localStorage.removeItem("user");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  loadUser();
}, []);

  // LOGIN
  const login = async (email, password) => {
    const found = await loginUser(email, password);

    if (!found) throw new Error("Invalid Credentials");

    localStorage.setItem("userId", found.id);
    localStorage.setItem("user", JSON.stringify(found));

    setUser(found);
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// ✅ ഈ file കൊണ്ട് എന്ത് fix ആവും?
// Login ചെയ്ത user localStorage-ൽ save ചെയ്യും.
// Refresh ചെയ്താലും user login ആയിരിക്കും.
// Logout ചെയ്താൽ user clear ആവും.
// loading state add ചെയ്തു.
// അടുത്ത files-ന് compatible ആണ്.