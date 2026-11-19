import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Totalproduct = () => {
    const [product,setproduct]=useState([]);
    const [users,setusers]=useState([]);
    const [orders,setorders]=useState([]);
    const [reveniew,setreveniew]=useState(0);
    
   

    useEffect(()=>{
        getproduct();
        getusers();
        getorders();
        gettotal();
       
    },[]);

    const getproduct=async()=>{
        const res=await axios.get("http://localhost:5000/Products");
        setproduct(res.data);
    }

    const getusers=async()=>{
        const res=await axios.get("http://localhost:5000/users");
        setusers(res.data);
    }
    
    const getorders=async()=>{
        const res=await axios.get("http://localhost:5000/orders");
        setorders(res.data);
    }

    const gettotal=async()=>{
        const res=await axios.get("http://localhost:5000/orders");

        const totalreveniew=res.data.reduce((sum,n)=>{
            return sum=sum+n.total;
        },0);
        setreveniew(totalreveniew);
    }

    


  return (
    <div>
        <h1>total product</h1>
        <h1>{product.length}</h1>

        <h1>total users</h1>
        <h1>{users.length}</h1>

        <h1>total orders</h1>
        <h1>{orders.length}</h1>

        <h1>total price</h1>
        <h1>{reveniew}</h1>

      
    </div>
  )
}

export default Totalproduct




