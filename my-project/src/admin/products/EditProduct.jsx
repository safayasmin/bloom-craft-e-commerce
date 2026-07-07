import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../redux/productSlice";

const EditProduct = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "",
    category: "",
    price: "",
    stock: "",
    img: "",
    description: "",
  });

  const getProduct = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/Products/${id}`
      );

      setForm(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.title ||
      !form.category ||
      !form.price ||
      !form.stock ||
      !form.img ||
      !form.description
    ) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const res = await axios.put(
        `http://localhost:5000/Products/${id}`,
        form
      );

      dispatch(updateProduct(res.data));

      toast.success("Product Updated");

      navigate("/admin/products");
    } catch (error) {
      console.log(error);
      toast.error("Update Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#222222] via-[#2d2823] to-[#3a3128] p-8">

      <div className="max-w-3xl mx-auto bg-[#111] border border-[#d4af37]/20 rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-[#d4af37] mb-8">
          Edit Product
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full bg-[#1b1611] border border-[#d4af37]/30 text-white placeholder-gray-500 rounded-xl p-3 focus:outline-none focus:border-[#d4af37] transition"
          />

          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full bg-[#1b1611] border border-[#d4af37]/30 text-white placeholder-gray-500 rounded-xl p-3 focus:outline-none focus:border-[#d4af37] transition"
          />

          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full bg-[#1b1611] border border-[#d4af37]/30 text-white placeholder-gray-500 rounded-xl p-3 focus:outline-none focus:border-[#d4af37] transition"
          />

          <input
            type="number"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            placeholder="Stock"
           className="w-full bg-[#1b1611] border border-[#d4af37]/30 text-white placeholder-gray-500 rounded-xl p-3 focus:outline-none focus:border-[#d4af37] transition"
          />

          <input
            type="text"
            name="img"
            value={form.img}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full bg-[#1b1611] border border-[#d4af37]/30 text-white placeholder-gray-500 rounded-xl p-3 focus:outline-none focus:border-[#d4af37] transition"
          />

          <textarea
            rows="5"
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full bg-[#1b1611] border border-[#d4af37]/30 text-white placeholder-gray-500 rounded-xl p-3 focus:outline-none focus:border-[#d4af37] transition"
          />

          <div className="flex justify-end gap-4">

            <button
              type="button"
              onClick={() => navigate("/admin/products")}
              className="bg-[#1b1611] border border-[#d4af37]/30 text-[#d4af37] px-6 py-3 rounded-xl hover:bg-[#2a2218] transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-[#d4af37] hover:bg-[#c19a2b] text-black font-semibold px-6 py-3 rounded-xl transition"
            >
              Update Product
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EditProduct;