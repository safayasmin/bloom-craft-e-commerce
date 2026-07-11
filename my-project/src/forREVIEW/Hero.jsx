import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const [product,setproduct]=useState([]);
    const [fltproduct,setfltproduct]=useState("all");
    const [currentPage,setcurrentPge]=useState(1);
    const navigate=useNavigate();

    const productperpage=3;
    

    useEffect(()=>{
        getdata();
    },[]);
    const getdata=async()=>{
        const res=await axios.get("http://localhost:5000/Products");
        setproduct(res.data);
    }

    const filterevery=
    fltproduct==="all"?
    product:
    product.filter((item)=>item.category===fltproduct);


    const lastIndex=currentPage*productperpage;
    const firstIndex=lastIndex-productperpage;
    const currentProducts=filterevery.slice(
        firstIndex,
        lastIndex
    )

    const totalPages=Math.ceil(filterevery.length/productperpage);

    const handledelete=async(id)=>{
        const res=await axios.delete(`http://localhost:5000/Products/${id}`);
        setproduct(res.data);
    }

     const handleedit=(id)=>{
         navigate(`/EditforRview/${id}`);
    }

  return (
    <div>
        <h1 className='text-3xl folt-bold mt-5'>BloomCraft Admin</h1>
        <select 
        value={fltproduct}
        onChange={(e)=>{
            setfltproduct(e.target.value)
            setcurrentPge(1)
        }}
        className='border border-yellow-500 py-2 px-2 mt-4'
        >
        
        <option value="all" >all product</option>
        <option value="realflower">realflower</option>
        <option value="crochet">crochet</option>
        <option value="wedding">wedding</option>
        </select>


        <table className="mt-6 border-collapse">
            <tr>
                <th className='border border-yellow-500 py-4 px-20'>image</th>
                <th className='border border-yellow-500 py-4 px-20'>Product Name</th>
                <th className='border border-yellow-500 py-4 px-20'>Category</th>
                <th className='border border-yellow-500 py-4 px-20'>price</th>
                <th className='border border-yellow-500 py-4 px-20'>Actions</th>   
            </tr>
            <tbody>
                {currentProducts.map((n)=>( 
                        <tr key={n.id}>
                            <td className='border border-yellow-500 py-4 px-20'>
                                <img
                                src={n.img}
                                className='w-20 h-20 object-cover  '
                                />
                            </td>
                            <td className='border border-yellow-500 py-4 px-20' >{n.title}</td>
                            <td className='border border-yellow-500 py-4 px-20'>{n.category}</td>
                            <td className='border border-yellow-500 py-4 px-20'>{n.price}</td>
                            <td className='border border-yellow-500 py-4 px-20'>
                            <button onClick={()=>handledelete(n.id)}
                                className='border border-yellow-500 py-2 px-2 mr-18'  
                                >delete</button>

                                <button onClick={()=>handleedit(n.id)}className='border border-yellow-500 py-2 px-2 mr-18' >Edit</button>
                            </td>
                      </tr>
                  ))}
            </tbody>
        </table> 
     <div>
        {[...Array(totalPages)].map((_,index) => (
            <button
            key={index}
            onClick={()=>setcurrentPge(index+1)}
            className='border border-yellow-500 py-2 px-2 mr-4'
            >
             {index+1}
            </button>
        ))}
     </div>

    </div>
  )
}

export default Hero
