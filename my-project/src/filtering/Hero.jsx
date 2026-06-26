import React, { useEffect, useState } from 'react'
import axios from "axios"

const Hero = () => {

    const [products,setproducts]=useState([])
    const [selectedcategory,setselectedcategory]=useState("all")

    useEffect(()=>{
        getproduct()
    },[])
    const getproduct=async()=>{
        try{
            const res=await axios.get("http://localhost:5000/Products");
            setproducts(res.data)
        }catch(err){
            console.log("error happen")
        }
    }

    const filteredproduct=
    selectedcategory==="all"
    ?products:
    products.filter((product)=>product.category===selectedcategory);

  return (
    <div className=' min-h-screen'>
    <h1 className='text-5xl  font-bold tracking-[2xl] px-[305px]'>FILTERING </h1>

    <div>
        <h1 className='font-bold text-3xl'>Categories</h1>

        <button onClick={()=>setselectedcategory("all")}  className='text-xl font-bold  bg-white  text-black w-40  mt-4'>All</button><br />
        <button onClick={()=>setselectedcategory("realflower")} className='text-xl font-bold  bg-white  text-black w-40  mt-4 '>Realflower</button><br />
        <button onClick={()=>setselectedcategory("crochet")} className='text-xl font-bold  bg-white  text-black w-40  mt-4 '>Crochet</button><br />
        <button onClick={()=>setselectedcategory("wedding")} className='text-xl font-bold  bg-white  text-black w-40  mt-4 '>Weddings</button><br />
     </div> 

     <div className='mt-10'>
        {filteredproduct.map((product)=>(
         <div key={product.id}>
            <img src={product.img}
            alt={product.title}
            className='w-20 h-20 object-cover' />

            <h5>{product.title}</h5>
            <h6>{product.price}</h6>
        </div>
        ))}
     </div>

    </div>
  )
}

export default Hero




// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Hero = () => {
//   const [products, setproducts] = useState([]);
//   const [selectedcategory, setselectedcategory] = useState("all");

//   useEffect(() => {
//     getproduct();
//   }, []);

//   const getproduct = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:5000/Products"
//       );
//       setproducts(res.data);
//     } catch (err) {
//       console.log("error happen");
//     }
//   };

//   const filteredproduct =
//     selectedcategory === "all"
//       ? products
//       : products.filter(
//           (product) =>
//             product.category === selectedcategory
//         );

//   return (
//     <div className="min-h-screen p-10">
//       <h1 className="text-5xl font-bold text-center mb-10">
//         FILTERING
//       </h1>

//       {/* Category Dropdown */}
//       <div>
//         <h1 className="font-bold text-3xl mb-4">
//           Categories
//         </h1>

//         <select
//           value={selectedcategory}
//           onChange={(e) =>
//             setselectedcategory(e.target.value)
//           }
//           className="w-52 p-3 border rounded-lg text-black"
//         >
//           <option value="all">All</option>
//           <option value="realflower">
//             Real Flower
//           </option>
//           <option value="crochet">
//             Crochet
//           </option>
//           <option value="wedding">
//             Wedding
//           </option>
//         </select>
//       </div>

//       {/* Products */}
//       <div className="mt-10">
//         {filteredproduct.map((product) => (
//           <div
//             key={product.id}
//             className="mb-6"
//           >
//             <img
//               src={product.img}
//               alt={product.title}
//               className="w-20 h-20 object-cover"
//             />

//             <h5>{product.title}</h5>
//             <h6>₹{product.price}</h6>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Hero;