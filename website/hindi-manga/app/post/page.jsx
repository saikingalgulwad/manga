'use client'
import { CldUploadWidget } from 'next-cloudinary';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


function upload() {
const router = useRouter();
const [title,setTitle]=useState();
const [number,setNumber]=useState();
const [image,setImage]=useState();
const [pdf,setpdf]=useState();

const onSave=()=>{
      
 
 console.log(title,number,image,pdf);
 uploadFile();


}
const uploadFile=async()=>{
 
  let req= await fetch("https://hindi-manga.vercel.app/api/userpost",{
     method:"POST",
     body: JSON.stringify({ title:title,number:number,image:image,pdf:pdf}),
   })
  if(req){ router.push('/');}
   
  
  
 }



  return (
    <>
     {
          image? <h1 className='text-white m-auto w-full items-center'>{image}</h1>:<h1 className='text-white m-auto w-full items-center'>image url not showing</h1>
        }{
           pdf?<h1 className='text-white m-auto w-full items-center'>{pdf}</h1>:<h1 className='text-white m-auto w-full items-center'>pdf url not showing</h1>
        }
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
       
    <h2 className="text-2xl font-bold mb-6 text-center text-black">Add New Pdf</h2>
    <div  className="space-y-4">
      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          
         onChange={(e)=>setTitle(e.target.value)}
          
          placeholder="Enter topic title"
          required
          className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Number */}
      <div>
        <label htmlFor="number" className="block text-sm font-medium text-gray-700">
          Chapter
        </label>
        <input
          type="number"
          id="number"
          name="number"
           
           onChange={(e)=>setNumber(e.target.value)}
          placeholder="Enter topic number"
          required
          className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Image URL */}
      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <CldUploadWidget uploadPreset="animeImage" onSuccess={(result)=>setImage(result?.info?.url)}>{({ open }) => {
    return (
      <button className=' border text-black rounded-lg ' onClick={() => open()}>
        Upload an Image
      </button>
    );
  }}
</CldUploadWidget>
      </div>

      {/* PDF URL */}
      <div>
        <label htmlFor="pdf" className="block text-sm font-medium text-gray-700">
          PDF URL
        </label>
        <input
          type="text"
          id="pdf"
          name="pdf"
           
           onChange={(e)=>setpdf(e.target.value)}
          placeholder="Enter topic number"
          required
          className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Submit Button */}
      <button
       onClick={()=>onSave()}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </div>
  </div></>
  )
}

export default upload
