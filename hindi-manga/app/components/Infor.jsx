'use client'
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react'

function Infor() {

     const {user}=useUser();
     
  return (
    <div>
     <h1 className="text-center text-5xl text-neonPink font-anime mb-6">
        Hindi Manga
      </h1>
    {user?<p className="text-center text-neonBlue text-lg mb-10">
        Welcome to <span className='text-red-700 font-semibold'>{user?.fullName}</span> in the world of anime.
      </p>:<p className="text-center text-neonBlue text-lg mb-10">
        Please <Link href={`/sign-up`}><span className='text-red-700 font-semibold'>Login</span></Link> and enjoy more features 
      </p>}
    </div>
  )
}

export default Infor