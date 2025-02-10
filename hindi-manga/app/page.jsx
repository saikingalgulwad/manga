'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Suspense} from 'react';
import Loading from './loading.js'


import Infor from './components/Infor';

import { useSearch } from '@/hooks/search';


import { FiSearch, FiMenu, FiUser, FiHome, FiInfo } from 'react-icons/fi';

import { useState } from 'react';
import Logo from '@/public/logo.webp'
import { UserButton,useUser } from '@clerk/nextjs';





 function Main() {
  const [query, setQuery] = useState("");
  const {search,inputSe}=useSearch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user}=useUser();
  
 // Directly access searchParams without awaiting
 
 
  const geting=async()=>{
    
    const response = await fetch(`https://manga-tau-nine.vercel.app/api/serach?search=${query}`, {
      cache: "no-store", // Disables caching
    });
    if(!response.ok){
      console.log("error");
    }const chapter= await response.json();
  
  
   inputSe(chapter);
 
 }
useEffect(() => {
 geting();
}, [])

 
  return (<> 
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white shadow-lg">
    <div className="container mx-auto flex items-center justify-between p-4">
      {/* Logo Section */}
     
      <div className="flex items-center space-x-2">
        <Image
          src={Logo} // Replace with your logo path
          alt="Logo"
          width={50}
          height={50}
          className='rounded-full'
        />
        <span className="text-1xl font-bold  sm:block">Manga Verce</span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="flex items-center space-x-2 hover:text-gray-400 font-medium">
          <FiHome className="w-5 h-5" />
          <span>Home</span>
        </Link>
        <Link href="/about" className="flex items-center space-x-2 hover:text-gray-400 font-medium">
          <FiInfo className="w-5 h-5" />
          <span>About</span>
        </Link>
      </div>

      {/* Search and Profile */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative hidden sm:block">
          <input
            type="text"
           
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            
            className="bg-gray-800 text-white rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
          /><button onClick={geting} className="absolute top-2/4 right-3 transform -translate-y-2/4 text-gray-400 hover:text-gray-200" >Search</button>
          <FiSearch className="absolute top-2/4 left-3 transform -translate-y-2/4 text-gray-400" size={20} />
        </div>
        {/* Profile Icon */}
        <div className="hidden md:block hover:text-gray-400 cursor-pointer">
       {user?<UserButton />:<Link href={'/sign-up'}>Login</Link>}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          <FiMenu size={24} />
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="md:hidden bg-gray-800 text-white py-4 px-6 space-y-4">
        <Link href="/" className="flex items-center space-x-2 hover:text-gray-400">
          <FiHome className="w-6 h-6" />
          <span>Home</span>
        </Link>
        <Link href="/about" className="flex items-center space-x-2 hover:text-gray-400">
          <FiInfo className="w-6 h-6" />
          <span>About</span>
        </Link>
        <div className="flex items-center mt-3 space-x-2 hover:text-gray-400 cursor-pointer">
         <div className="relative ">
        <input
            type="text"
           
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            
            className="bg-gray-800 text-white rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
          /><button onClick={geting} className="absolute top-2/4 right-3 transform -translate-y-2/4 text-gray-400 hover:text-gray-200" >Search</button>
          <FiSearch className="absolute top-2/4 left-3 transform -translate-y-2/4 text-gray-400" size={20} />
          </div> </div>
        <div className="flex items-center space-x-2 hover:text-gray-400 cursor-pointer">
          <UserButton className="w-6 h-6" />
          {user?<h1>{user?.firstName}</h1>:<Link href={'/sign-up'}>Login</Link>}
        </div>
      </div>
    )}
  </nav>

    <main className="min-h-screen bg-darkBg p-8">
     
      <Infor />
     
<Suspense fallback={<Loading />}>
      
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
         
        {search.map((chapter) = (
          <Link key={chapter._id} href={`/chapter/${chapter._id}`}>
            <div className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 cursor-pointer overflow-hidden">
              <Image
                src={chapter.image} // Rotate through image URLs
                alt={`${chapter.title} Cover`}
                width={300}
                height={200}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl text-neonPink">{chapter.title}</h2>
                <p className="text-gray-400">Chapter {chapter.number}</p>
                <button className="mt-4 px-4 py-2 bg-neonBlue text-darkBg font-bold rounded">
                  Read Now
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div> </Suspense>
    </main></>
  )
}

export default Main
