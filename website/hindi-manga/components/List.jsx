import { connectToDatabase } from '@/app/lib/db';
import { users } from '@/app/lib/model/user';
import Link from 'next/link';
import React from 'react'


async function List({id,number}) {
  
    await connectToDatabase();
    const data = await users.find({title:id});

  return (
    <div className='mt-2 ml-5'>
        <h2 className='text-white font-extrabold md:mb-2 md:ml-2 md:text-[20px]'>{id}</h2>
        
      {
        data.map((data,item)=>(
      number==data._id? <div key={item}><h1 className='text-red-950'>Chapter : {data.number}</h1> </div>:<div key={item}> <Link href={`${data._id}`} >Chapter : {data.number}</Link> </div>
        ))
      }
    </div>
  )
}

export default List
