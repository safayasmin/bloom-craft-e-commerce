import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditforRview = () => {
    const {id}=useParams();
    const navigate=useNavigate();

    const [form,setForm]=useState({
        title:"",
        category:"",
        price:"",
        img:""
    });

    const getProduct=async()=>{
        const res=await axios.get(`http://localhost:5000/Products/${id}`);
        setForm(res.data);
    }
    useEffect(()=>{
        getProduct();
    },[]);

    const handleUpdate=async()=>{
        await axios.put(`http://localhost:5000/Products/${id}`,
            form);
            navigate("/Hero");
    };

  return (
    <div>
        <h1 className='mt-6 font-bold text-2xl'>edit page</h1><br></br>
         
         <h1>name</h1>
         <input
         type='text'
         value={form.title}
         onChange={(e)=>
            setForm({...form,title:e.target.value})
         }
         placeholder='enter title'
         className='border border-yellow-500'
         /><br></br>
         <br />


         <h1>category</h1>
         <input
         type='text'
         value={form.category}
         onChange={(e)=>
            setForm({...form,category:e.target.value})
         }
         placeholder='enter category'
         className='border border-yellow-500'
         /><br></br>
          <br />


        <h1>Price</h1>
        <input
         type='number'
         value={form.price}
         onChange={(e)=>
            setForm({...form,price:e.target.value})
         }
         placeholder='enter price'
         className='border border-yellow-500'
         /><br></br>
          <br />



        <h1>image</h1>
         <input
         type='text'
         value={form.img}
         onChange={(e)=>
            setForm({...form,img:e.target.value})
         }
         placeholder="Enter image URL"
         className='border border-yellow-500'
         /><br></br>
        <br />

        <button onClick={handleUpdate} className='border border-yellow-500'>update</button>
    </div>
  )
}

export default EditforRview
