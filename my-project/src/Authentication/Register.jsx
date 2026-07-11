
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { validateEmail } from "../utils/validation";
import { setUser } from "../utils/auth";

const Register = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const [form, setForm] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "", 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    //page refresh no

    if (form.username.length < 3)
      return toast.error("Username must be at least 3 characters");

    if (!validateEmail(form.email))
      return toast.error("Invalid Email");

    if (form.password.length < 6)
      return toast.error("Password must be at least 6 characters");

   
    if (form.password !== form.confirmPassword)
      return toast.error("Password and Confirm Password do not match");

    try {
     const res = await axios.post("http://localhost:5000/users", {
  username: form.username,
  fullName: form.fullName,
  email: form.email,
  password: form.password,
  avatar: `https://i.pravatar.cc/150?u=${form.email}`,
  createdAt: new Date().toISOString(),

  role: "user",
  status: "active",
});


      // Save user
      setUser({
        id: res.data.id,
        email: res.data.email,
        username: res.data.username,
      });

      toast.success("Registration Successful");

      navigate("/login");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiuZQi8OCaHlBBUW2HLmo0LPm1V0S2mwAdm2vmpFYqFbT8Mp72MasnlEBkoz75T5H43dRq7RayDbyGS-eUwV-TjjYIRjoJ2EewK_Z_ExJehWba_ZYX0khjwyNrAilNaNvMYSXwq8pQvjtewsk_T90O_nTqtF-UMKW6ZlHRqG-tydduW5iqkrlc8rZJFJ8Qyz1n02eRI0V_O9ST4_zbEiCXCkLTH08T5jq-sf0GW7ivybw_nHalMnbHnmM5Pio4jHp-QfxxpyjqdAs"
          className="w-full h-full object-cover opacity-40"
          alt="bg"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md bg-black/50 backdrop-blur-xl border border-[#d4af37]/20 rounded-xl p-8"
      >
        <h1 className="text-4xl text-center text-[#d4af37] mb-6">
          Register
        </h1>

        <input
          placeholder="Username"
          className="w-full p-3 mb-3 bg-transparent border border-gray-600 text-white"
          value={form.username}
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
        />

        <input
          placeholder="Full Name"
          className="w-full p-3 mb-3 bg-transparent border border-gray-600 text-white"
          value={form.fullName}
          onChange={(e) =>
            setForm({ ...form, fullName: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 bg-transparent border border-gray-600 text-white"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        
        <input
          type={show ? "text" : "password"}
          placeholder="Password"
          className="w-full p-3 mb-3 bg-transparent border border-gray-600 text-white"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

      
        <input
          type={show ? "text" : "password"}
          placeholder="Confirm Password"
          className="w-full p-3 mb-3 bg-transparent border border-gray-600 text-white"
          value={form.confirmPassword}
          onChange={(e) =>
            setForm({
              ...form,
              confirmPassword: e.target.value,
            })
          }
        />

        {/* Show / Hide */}
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="text-sm text-gray-400 mb-4"
        >
          {show ? "Hide Passwords" : "Show Passwords"}
        </button>

        <button
          type="submit"
          className="w-full bg-[#d4af37] text-black py-3 rounded"
        >
          Register
        </button>

        <p className="text-center mt-4 text-gray-400">
          Already have an account?
          <Link to="/login" className="text-[#d4af37] ml-2">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
