import axios from 'axios';
import React, { useEffect, useState } from 'react'

const User123 = () => {
  const [user,setuser]=useState([]);
  const [totaluser,settotaluser]=useState(0);
  const [totaladmin,settotaladmin]=useState(0);
  const [totalcustomers,settotalcustomers]=useState(0);
  const [totalactive,settotalactive]=useState(0);
  const [search,setsearch]=useState("");
  const [fltuser,setfltuser]=useState("all");
  const [currentpage,setcurrentpage]=useState(1);

  const userperpage=3;


  useEffect(()=>{
    getdata();
  },[]);

  const getdata=async()=>{
    const res=await axios.get("http://localhost:5000/users");
    setuser(res.data);

    const gettotaluser=
    res.data.filter((sum,n)=>{
      return sum=sum+n.username;
    })
    settotaluser(gettotaluser.length);

    const gettotaladmin=
    res.data.filter((n)=>n.role==="admin");
    settotaladmin(gettotaladmin.length);


    const getcustomers=
    res.data.filter((n)=>n.role==="user");
    settotalcustomers(getcustomers.length);

    const gettotalactive=
    res.data.filter((n)=>n.status==="active");
    settotalactive(gettotalactive.length);
  }

  const handlesearch=user.filter((n)=>{
     const searchMatch=
     n.username.toLowerCase().includes(search.toLowerCase()) ||
     n.email.toLowerCase().includes(search.toLowerCase()) 

     const dropdon=
     fltuser==="all" ||
     n.status.toLowerCase()===fltuser

     return searchMatch && dropdon
  })


  const handleblock=async(n)=>{
    const updateuser={
      ...n,
      status:n.status==="Active"?"Blocked":"Active"
    };

    await axios.put(`http://localhost:5000/users/${n.id}`,updateuser)
    getdata();
  }
 

  const lastindex=currentpage*userperpage;
  const firstindex=lastindex-userperpage;
  const currentuser=handlesearch.slice(
    firstindex,lastindex
  );
  const totalpage=Math.ceil(handlesearch.length/userperpage);


  return (
    <div>
      <h1>USER DATA</h1>
    <div className='flex'>
      <div className='border border-yellow-500 py-3 px-3 m-3'>
        <h1>Total users</h1>
        <h1>{totaluser}</h1>
      </div>

      <div className='border border-yellow-500 py-3 px-3 m-3'>
        <h1>Total admin</h1>
        <h1>{totaladmin}</h1>
      </div>

      <div className='border border-yellow-500 py-3 px-3 m-3'>
        <h1>Total customers</h1>
        <h1>{totalcustomers}</h1>
      </div>

      <div className='border border-yellow-500 py-3 px-3 m-3'>
        <h1>Total active</h1>
        <h1>{totalactive}</h1>
      </div>


    </div>

    <input 
    type='text'
    placeholder='search....'
    value={search}
    onChange={(e)=>setsearch(e.target.value)}
    className='border border-yellow-500 py-3 px-3 m-3' />

    <select
    value={fltuser}
    onChange={(e)=>setfltuser(e.target.value)}
       className='border border-yellow-500 py-3 px-3 m-3'
    >
      <option value="all">ALL</option>
      <option value="active">active</option>
      <option value="blocked">blocked</option>
    </select>

   

    <table>
      <thead>
        <tr className='border border-yellow-500 py-3 px-3 border-collapse w-[200px]'>
          <th className='border border-yellow-500 py-3 px-3 w-[200px]'>Name</th>
          <th className='border border-yellow-500 py-3 px-3 w-[200px]'>email</th>
          <th className='border border-yellow-500 py-3 px-3 w-[200px]'>role</th>
          <th className='border border-yellow-500 py-3 px-3 w-[200px]'>status</th>
          <th className='border border-yellow-500 py-3 px-3 w-[200px]'>action</th>
        </tr>
      </thead>
      <tbody>
        {currentuser.map((n)=>(
          <tr key={n.id}>
            <td className='border border-yellow-500 py-3 px-3 w-[200px]'>{n.username}</td>
            <td className='border border-yellow-500 py-3 px-3 w-[200px]'>{n.email}</td>
            <td className='border border-yellow-500 py-3 px-3 w-[200px]'>{n.role}</td>
            <td className='border border-yellow-500 py-3 px-3 w-[200px]'>{n.status}</td>
            <td className='border border-yellow-500 py-3 px-3 w-[200px]'>
              <button
              onClick={()=>handleblock(n)}
              className='border border-yellow-500'>
                {n.status==="Active"?"Block":"unblock"}
              </button>
            </td>
            
          </tr>
        ))}
      </tbody>
    </table>
    {[...Array(totalpage)].map((_,index)=>(
      <button
      key={index}
      onClick={()=>setcurrentpage(index+1)}
      className='border border-yellow-500 py-3 px-3 m-3'
      >
        {index+1}
      </button>
    ))}
      
      
    </div>
  )
}

export default User123


