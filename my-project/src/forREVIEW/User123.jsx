import axios from 'axios';
import React, { useEffect, useState } from 'react'

const User123 = () => {
    const [search,setSearch]=useState("");
    const [user,setuser]=useState([]);

    const getuser=async()=>{
        const res=await axios.get("http://localhost:5000/users");
        setuser(res.data);     
    }
    useEffect(()=>{
       getuser();
    },[]);

const handleBlock = async (item) => {
  const updatedUser = {
    ...item,
    status: item.status === "Active" ? "Blocked" : "Active",
  };

  await axios.put(
    `http://localhost:5000/users/${item.id}`,
    updatedUser
  );
  getuser(); 
};

  return (
    <div>
      <h1 className='text-3xl font-bold px-10 py-10'>USER SIDE</h1>
      <input
      type='text'
      placeholder='Search......'
      value={search}
      onClick={(e)=>setSearch(e.target.value)} 
      className='bg-white-500 border border-red-500 py-3 px-3 ml-4'
      />

      <table className='border border-red-500 border-collapse m-6'>
        <tr>
            <th className='border border-red-500 p-5 w-70'>Name</th>

            <th className='border border-red-500 p-8 w-110'>Email</th>
            <th className='border border-red-500 p-5 w-50'>Role</th>
            <th className='border border-red-500 p-5 w-50'>Status</th>
            <th className='border border-red-500 p-5 w-50'>Action</th>
        </tr>
    <tbody>
        {user.map((item)=>(
            <tr key={item.id}>
                <td className='border border-red-500 p-8 w-110'>{item.username}</td>
                <td className='border border-red-500 p-8 w-110'>{item.email}</td>
                <td className='border border-red-500 p-8 w-110'>{item.role}</td>
                <td className='border border-red-500 p-8 w-110'>{item.status}</td>

                <td className="border border-red-500 p-8 w-110">
  <button
    onClick={() => handleBlock(item)}
    className='bg-yellow-500'
  >
    {item.status === "Active"
      ? "Block"
      : "Unblock"}
  </button>
</td>
          </tr>
        ))}
        
    </tbody>
      </table>

    </div>
  )
}

export default User123
