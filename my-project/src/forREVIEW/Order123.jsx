import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Order123 = () => {
    const [order,setorder]=useState(0);
    const [placed,setplaced]=useState(0);
    const [shipped,setshipped]=useState(0);
    const [delivered,setdelivered]=useState(0);
    const [data1,setdata1]=useState([]);
    const [currentpage,setcurrentpage]=useState(1)

    const productperpage=3;
    

    const [search,setsearch]=useState("");

    useEffect(()=>{
        getorder()
        getuserdata();
    },[]);

    const getorder=async()=>{
        const res=await axios.get("http://localhost:5000/orders");  
        setorder(res.data.length);
 
     const orderplaced=res.data.filter((item)=>(
        item.status==="Order Placed"
     ));
     setplaced(orderplaced.length);



     const shippedorder=res.data.filter((item)=>(
        item.status==="Shipped"
     ));
     setshipped(shippedorder.length);


     const deleveredproduct=res.data.filter((item)=>(
        item.status==="Delivered"
     ));
     setdelivered(deleveredproduct.length);
    }

   const getuserdata=async()=>{
        const res=await axios.get("http://localhost:5000/orders");
        setdata1(res.data);
    }


    const handleStatusChange = async(id,status)=>{
        await axios.patch(`http://localhost:5000/orders/${id}`,{
            status:status,
        });
        getorder()
        getuserdata();
    }

    const handlesearch=data1.filter((n)=>(
        n.username?.toLowerCase().includes(search.toLowerCase()) ||
        n.payment?.toLowerCase().includes(search.toLowerCase()) ||
        n.status?.toLowerCase().includes(search.toLowerCase()) 
    ))


    const lastindex=currentpage*productperpage;
    const firstindex=lastindex-productperpage;
    const currentproduct=handlesearch.slice(
        firstindex,lastindex
    );
    const totalpages=Math.ceil(handlesearch.length/productperpage);
    

  return (
    <div>
    <div className='flex'>
        <div className=' border border-yellow-500 py-3 px-4 m-3'>
        <h1>TOTAL Orders</h1>
        <h1>{order}</h1>
        </div>

        <div className=' border border-yellow-500 py-3 px-4 m-3'>
        <h1>placed</h1>
        <h1>{placed}</h1>
        </div>


        <div className=' border border-yellow-500 py-3 px-4 m-3'>
        <h1>shipped</h1>
        <h1>{shipped}</h1>
        </div>


        
        <div className=' border border-yellow-500 py-3 px-4 m-3'>
        <h1>Delivered</h1>
        <h1>{delivered}</h1>
        </div>
    </div>

     <input 
     type='text'
     placeholder='search.....'
     value={search}
     onChange={(e)=>{
        setsearch(e.target.value)
        setcurrentpage(1);
    }}
      className='border border-yellow-500 py-3 px-3 m-3'
     />

     <table>
        <thead>
            <tr  className='border border-yellow-500 border-collapse'>
                <th className='border border-yellow-500 py-4 px-4 w-[270px] '>Customer</th>
                <th className='border border-yellow-500 py-3 px-3 w-[270px]'>payment</th>
                <th className='border border-yellow-500 py-3 px-3 w-[270px]'>Total</th>
                <th className='border border-yellow-500 py-3 px-3 w-[270px]'>Status</th>
                <th className='border border-yellow-500 py-3 px-3 w-[270px]'>Action</th>

            </tr>
        </thead>
        <tbody>
            {currentproduct.map((n)=>(
            <tr  key={n.id} className='border border-yellow-500 py-4 px-4 w-[270px]'>
                
                   
                        <td className='border border-yellow-500 py-4 px-4 w-[270px] '>{n.username}</td>
                        <td className='border border-yellow-500 py-4 px-4 w-[270px] '>{n.payment}</td>
                        <td className='border border-yellow-500 py-4 px-4 w-[270px] '>{n.total}</td>
                        <td className='border border-yellow-500 py-4 px-4 w-[270px] '>    
                    <select 
                    value={n.status}
                    onChange={(e)=>handleStatusChange(n.id ,e.target.value)}    
                    className='border border-yellow-500'>
                        <option value="Order Placed">Order placed</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                        </td>
                    </tr>
                ))}  
        </tbody>

     </table>
     {[...Array(totalpages)].map((_,index)=>(
        <button 
        key={index}
        onClick={()=>setcurrentpage(index+1)}
        className='border border-yellow-500 py-2 px-2'
        >
            {index+1}
        </button>
     ))}
  </div>
  )
}

export default Order123
