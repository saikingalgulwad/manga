'use client'
import React from 'react';
import Image from 'next/image';
import { FiSearch, FiMenu, FiUser, FiHome, FiInfo } from 'react-icons/fi';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '@/public/logo.webp'
import { UserButton,useUser } from '@clerk/nextjs';
import { useSearch } from '@/hooks/search';


const Navbar =() => {
  const [query, setQuery] = useState("");
  const {inputSe}=useSearch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user}=useUser();
  
  // const data1 = await data();
  // inputSe(data1);
 const geting=async()=>{
    console.log(query);
    const response = await fetch(`https://manga-tau-nine.vercel.app/api/serach?search=${query}`, {
      cache: "no-store", // Disables caching
    });
    if(!response.ok){
      console.log("error");
    }const chapter= await response.json();
  
  
   inputSe(chapter);
   
  
 }
 
   
  return (
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
          <div className="flex items-center space-x-2 hover:text-gray-400 cursor-pointer">
            <FiSearch className="w-6 h-6" />
            <span>Search</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-gray-400 cursor-pointer">
            <UserButton className="w-6 h-6" />
            {user?<h1>{user?.firstName}</h1>:<Link href={'/sign-up'}>Login</Link>}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
