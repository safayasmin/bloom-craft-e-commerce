import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  deleteProduct,
} from "../../redux/productSlice";

const Products = () => {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

const [currentPage, setCurrentPage] = useState(1);

const productsPerPage = 3;

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  // Fetch Products
  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/Products");

      dispatch(setProducts(res.data));
    } catch (error) {
      console.log(error);
    }
  };


  const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this product?"
  );

  if (!confirmDelete) return;

  try {
    await axios.delete(`http://localhost:5000/Products/${id}`);

    dispatch(deleteProduct(id));
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
  console.log(products);
}, [products]);



const filteredProducts = products.filter((item) => {

  const matchSearch =
    item.title.toLowerCase().includes(search.toLowerCase());

  const matchCategory =
    category === "All"
      ? true
      : item.category === category;

  return matchSearch && matchCategory;

});




const lastIndex = currentPage * productsPerPage;

const firstIndex = lastIndex - productsPerPage;

const currentProducts = filteredProducts.slice(
  firstIndex,
  lastIndex
);

const totalPages = Math.ceil(
  filteredProducts.length / productsPerPage
);


  return (
    <div className="min-h-screen bg-gradient-to-r from-[#222222] via-[#2d2823] to-[#3a3128] p-8">

      {/* Top */}

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-[#d4af37]">
            Products
          </h1>

          <p className="text-gray-400 mt-2">
            Manage all BloomCraft products
          </p>
        </div>

        <Link
          to="/admin/add-product"
          className="bg-[#d4af37] hover:bg-[#c19a2b]
text-black
font-semibold
px-6
py-3
rounded-xl
transition"
        >
          + Add Product
        </Link>

      </div>

<div className="mb-5 flex justify-between items-center">

  <div className="flex gap-4">

    {/* Search */}

    <input
      type="text"
      placeholder="Search Products..."
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        setCurrentPage(1);
      }}
      className="bg-[#111]
border
border-[#d4af37]/40
text-white
placeholder-gray-500
rounded-xl
px-5
py-3
w-80
focus:outline-none
focus:border-[#d4af37]"
    />

    {/* Category */}

    <select
      value={category}
      onChange={(e) => {
        setCategory(e.target.value);
        setCurrentPage(1);
      }}
      className="bg-[#111]
border
border-[#d4af37]/40
text-white
rounded-xl
px-5
py-3
focus:outline-none
focus:border-[#d4af37]"
    >
      <option value="All">All Categories</option>
      <option value="realflower">Real Flower</option>
      <option value="crochet">Crochet</option>
      <option value="wedding">Wedding</option>
    </select>

  </div>

</div>




      {/* Table */}

     <div className="bg-[#111]
border
border-[#d4af37]/20
rounded-2xl
overflow-hidden
shadow-xl">

        <table className="w-full table-fixed">

         <thead className="bg-[#0b0b0b] text-[#d4af37]">
  <tr>
    <th className="w-32 p-4 text-left">Image</th>
    <th className="w-70 p-4 text-left">Product Name</th>
    <th className="w-48 p-4 text-left">Category</th>
    <th className="w-40 p-4 text-left">Price</th>
    <th className="w-56 p-4 text-center">Actions</th>
  </tr>
</thead>

          <tbody>

            {filteredProducts.length === 0 ? (
              <tr>

                <td
                  colSpan="5"
                  className="text-center p-10 text-gray-500"
                >
                  No Products Found
                </td>

              </tr>

            ) : (

              currentProducts.map((item) => (

                <tr
                  key={item.id}
                  className="border-b border-[#d4af37]/10 hover:bg-[#1b1611] transition"
                >

                  <td className="p-4 text-gray-300">

                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded"
                    />

                  </td>

                  <td className="p-4 font-semibold text-white">
                    {item.title}
                  </td>

                  <td className="p-4 text-white font-semibold">
                    {item.category}
                  </td>

                  <td className="p-4 text-white font-semibold">
                    ₹{item.price}
                  </td>

                  <td className="p-4 flex gap-3">

                    <Link
                      to={`/admin/edit-product/${item.id}`}
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Edit
                    </Link>

                   <button
  onClick={() => handleDelete(item.id)}
  className="bg-red-800 hover:bg-red-700 text-white px-4 py-2 rounded"
>
  Delete
</button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>




<div className="flex justify-center mt-5 gap-3">

  {[...Array(totalPages)].map((_, index) => (

    <button
      key={index}
      onClick={() => setCurrentPage(index + 1)}
    className={`px-4 py-2 rounded-lg font-semibold border transition
${
  currentPage === index + 1
    ? "bg-[#d4af37] text-black border-[#d4af37]"
    : "bg-[#1b1611] text-[#d4af37] border-[#d4af37]/40 hover:bg-[#2a2218]"
}`}

    >
      {index + 1}
    </button>

  ))}

</div>




      </div>

    </div>
  );
};

export default Products;