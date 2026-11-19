
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./ProductGrid";

const Explore = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState("all");

  useEffect(() => {
    let isMounted = true;
    axios
      .get("http://localhost:5000/Products")
      .then((res) => {
        if (isMounted) {
          setProducts(res.data);
        }
      })
      .catch((err) => console.error("Error loading products:", err))
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchSearch = product.title
        ?.toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "all" || product.category === category;

      const numPrice = Number(product.price) || 0;
      let matchPrice;

      switch (price) {
        case "0-1000":
          matchPrice = numPrice <= 1000;
          break;
        case "1000-1500":
          matchPrice = numPrice > 1000 && numPrice <= 1500;
          break;
        case "1500-2000":
          matchPrice = numPrice > 1500 && numPrice <= 2000;
          break;
        case "2000+":
          matchPrice = numPrice > 2000;
          break;
        default:
          matchPrice = true;
      }

      return matchSearch && matchCategory && matchPrice;
    });
  }, [products, search, category, price]);

  return (

    <div className="min-h-screen bg-[#131313] px-6 py-10">

      <h1
        className="text-white text-5xl text-center mb-10"
      >
        Explore Collection
      </h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="grid lg:grid-cols-4 gap-8 mt-8">

        <FilterSidebar
          category={category}
          setCategory={setCategory}
          price={price}
          setPrice={setPrice}
        />

        <div className="lg:col-span-3">

          {
            loading ?

              <h2 className="text-white">
                Loading...
              </h2>

              :

              <ProductGrid
                products={filteredProducts}
              />
          }
        </div>

      </div>

    </div>

  );

};

export default Explore;