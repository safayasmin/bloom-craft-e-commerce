import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Safa = () => {
    const [search,setsearch]=useState("");
    const [user,setuser]=useState([]);

    useEffect(()=>{
        getuser();
    },[]);

    const getuser=async()=>{
        const res=await axios.get("http://localhost:5000/users");
        setuser(res.data);
    }

    const handlesearch=user.filter((n)=>(
        n.username.toLowerCase().includes(search.toLowerCase()) ||
        n.email.toLowerCase().includes(search.toLowerCase())
    ))


    const handleblock=async(n)=>{
        const blockdata={
            ...n,
            status:n.status==="active"?"Blocked":"active"
        };
        await axios.put(`http://localhost:5000/users/${n.id}`,blockdata);
        getuser();
    }

  return (
    <div>
        <h1 className='text-2xl font-bold'>USER DATA</h1>
        <input
        type='text'
        placeholder='Search.......'
        value={search}
        onChange={(e)=>setsearch(e.target.value)}
        className='border border-yellow-500 py-3 px-3 m-3' />



        <table>
            <thead>
                <tr className='border border-yellow-500 py-3 px-3 border-collapse'>
                  <th className='border border-yellow-500 py-3 px-3 w-[220px]'>Name</th>
                   <th className='border border-yellow-500 py-3 px-3 w-[220px]'>Email</th>
                    <th className='border border-yellow-500 py-3 px-3 w-[220px]'>Role</th>
                     <th className='border border-yellow-500 py-3 px-3 w-[220px]'>Status</th>
                     <th className='border border-yellow-500 py-3 px-3 w-[220px]'>Action</th>
                </tr>
            </thead>
            <tbody>
                {handlesearch.map((n)=>(
                    <tr key={n.id} className='border border-yellow-500 py-3 px-3 border-collapse'>
                      <td className='border border-yellow-500 py-3 px-3 w-[200px]'>{n.username}</td>
                      <td className='border border-yellow-500 py-3 px-3 w-[200px]'>{n.email}</td>
                      <td className='border border-yellow-500 py-3 px-3 w-[200px]'>{n.role}</td>
                      <td className='border border-yellow-500 py-3 px-3 w-[200px]'>{n.status}</td>
                      <td className='border border-yellow-500 py-3 px-3 w-[200px]'>
                       <button 
                       onClick={()=>handleblock(n)}
                       className='border border-red-500 py-2 px-2 bg-red-500 w-[80px]'>
                        {n.status==="active"?"block":"unblock"}
                       </button>
                      </td>
                    </tr>
                ))}
                
            </tbody>
        </table>
      
    </div>
  )
}

export default Safa
