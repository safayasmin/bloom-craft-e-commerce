import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";


const Login = () => {
  const { login, user } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const [show, setShow] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

// After login redirect to wishlist/cart
//  useEffect(() => {
//   if (!user) return;
//   const from = location.state?.from || "/home";

//   navigate(from, { replace: true });
// }, [user]);



  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await login(form.email, form.password);
  //     toast.success("Login Success");

  //     // Normal login → Home
  //     if (!location.state?.action) {
  //       navigate("/home", {
  //         replace: true,
  //       });
  //     }

  //   } catch (err) {
  //     toast.error(
  //       err.message || "Login Failed"
  //     );
  //   }
  // };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const loggedUser = await login(form.email, form.password);

    console.log("Logged User:", loggedUser);
console.log("Role:", loggedUser?.role);

    toast.success("Login Success");

    if (loggedUser.role === "admin") {
      navigate("/admin/dashboard", { replace: true });
    } else {
      const from = location.state?.from || "/home";
      navigate(from, { replace: true });
    }

  } catch (err) {
    toast.error(err.message || "Login Failed");
  }
};

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden px-4">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiuZQi8OCaHlBBUW2HLmo0LPm1V0S2mwAdm2vmpFYqFbT8Mp72MasnlEBkoz75T5H43dRq7RayDbyGS-eUwV-TjjYIRjoJ2EewK_Z_ExJehWba_ZYX0khjwyNrAilNaNvMYSXwq8pQvjtewsk_T90O_nTqtF-UMKW6ZlHRqG-tydduW5iqkrlc8rZJFJ8Qyz1n02eRI0V_O9ST4_zbEiCXCkLTH08T5jq-sf0GW7ivybw_nHalMnbHnmM5Pio4jHp-QfxxpyjqdAs"
          alt="bg"
          className="w-full h-full object-cover scale-110 opacity-40"
        />

        <div className="absolute inset-0 bg-black/80" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md bg-black/50 backdrop-blur-xl border border-yellow-500/20 rounded-xl p-8"
      >
        <h1 className="text-4xl text-center text-[#d4af37] mb-2">
          BloomCraft
        </h1>

        <p className="text-center text-gray-400 mb-6">
          Welcome Back
        </p>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 mb-4 bg-transparent border border-gray-600 text-white rounded"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <div className="relative">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 mb-4 bg-transparent border border-gray-600 text-white rounded"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
          />

          <button
            type="button"
            onClick={() =>
              setShow(!show)
            }
            className="absolute right-3 top-3 text-sm text-gray-400"
          >
            {show ? "Hide" : "Show"}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-[#d4af37] text-black py-3 rounded font-semibold hover:opacity-90 transition"
        >
          Login
        </button>

        <p className="text-center mt-4 text-gray-400">
          No account?

          <Link
            to="/register"
            className="text-[#d4af37] ml-2"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;