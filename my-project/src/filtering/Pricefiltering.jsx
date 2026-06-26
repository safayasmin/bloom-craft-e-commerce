import React, { useEffect, useState } from 'react'
import axios from "axios"

const Pricefiltering = () => {
   const [prices,setprices]=useState([])
   const [selectedprice,setselectedprice]=useState("all")

   useEffect(()=>{
    getprice()
   },[])

   const getprice=async()=>{
    try{
       const res=await axios.get("http://localhost:5000/Products")
        setprices(res.data)
    }catch(err){
        console.log("error")
    }
    };

    const filteredproduct=prices.filter((item)=>{
        if(selectedprice==="all"){
            return true
        }
        if(selectedprice==="500-1000"){
            return item.price>=500&&item.price<=1000;
        }
        if(selectedprice==="1000-2000"){
            return item.price>=1000&&item.price<=2000;
        }
        if(selectedprice==="2000+"){
            return item.price>=2000;
        }
        return true;
});

  return (
    <div>
        <h2 className=' mt-20 text-3xl font-bold'>Price</h2>
        <button onClick={()=>setselectedprice("all")} className='bg-white text-black mt-5 w-30 h-10 text-xl'>all</button><br></br>
        <button onClick={()=>setselectedprice("500-1000")} className='bg-white text-black mt-5 w-30 h-10 text-xl'>500-1000</button><br />
        <button onClick={()=>setselectedprice("1000-2000")} className='bg-white text-black mt-5 w-30 h-10 text-xl'>1000-2000</button><br />
        <button onClick={()=>setselectedprice("2000+")} className='bg-white text-black mt-5 w-30 h-10 text-xl'>2000+</button>
        
        <div>
            {filteredproduct.map((item)=>(
                <div key={item.id}>
                    <img
                    src={item.img}
                    alt={item.title}
                    className='w-24 h-24 object-cover'
                    />
                    <h3>{item.title}</h3>
                    <h3>{item.price}</h3>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricefiltering


