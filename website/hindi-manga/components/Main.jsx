import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { connectToDatabase } from '@/app/lib/db';
import { users } from '@/app/lib/model/user';

import Infor from './Infor';


 async function Main() {
 
  await connectToDatabase();
    const chapters = await users.find();

 
  return (
    <main className="min-h-screen bg-darkBg p-8">
     
      <Infor />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {chapters.map((chapter) => (
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
      </div>
    </main>
  )
}

export default Main
