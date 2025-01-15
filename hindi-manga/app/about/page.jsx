
import Link from 'next/link';
import Navbar from '../components/Navbar';

const ProfilePage = () => {
  return (
    <> <Navbar />
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center py-10">
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 w-full py-6 text-center shadow-lg">
        <h1 className="text-4xl font-extrabold">Saiprasad Algulwad</h1>
      </header>

      <main className="bg-gray-800 shadow-2xl rounded-lg p-8 mt-8 w-11/12 max-w-2xl">
        <section className="flex flex-col items-center">
          {/* <Image
            src="@/public/logo.webp" // Replace with your profile picture path
            alt="Profile Picture of Saiprasad Algulwad"
            width={150}
            height={150}
            className="rounded-full border-4 border-purple-500 shadow-lg"
          /> */}
          <h2 className="text-2xl font-bold text-white mt-4">Saiprasad Algulwad</h2>
          <p className="text-gray-300 mt-2 text-center">
            Welcome to my profile page! Explore my projects, experiences, and more.
          </p>
        </section>

        <section className="mt-8">
          <h3 className="text-xl font-semibold text-purple-400 border-b border-purple-500 pb-2">About Me</h3>
          <p className="text-gray-300 mt-4">
            Hello! I am Saiprasad Algulwad, a Next.js developer working on exciting projects
            like Cotant. I enjoy creating user-friendly and visually appealing web applications.
            All project base on next.js fulstack...

          </p>
          <Link className='text-blue-700 font-semibold hover:text-blue-400 text-lg ' href={`https://github.com/saikingalgulwad`}> Github Link</Link>
        </section>

        <section className="mt-8">
          <h3 className="text-xl font-semibold text-purple-400 border-b border-purple-500 pb-2">My Project</h3>
          <div className="mt-4">
            <h4 className="text-purple-500 font-bold">Cotant</h4>
            <p className="text-gray-300">
              Cotant is a project aimed at revolutionizing the way we manage tasks and collaborate
              with teams. Stay tuned for more updates!
            </p>
           
          </div>
         
          <div className="mt-4">
            <h4 className="text-purple-500 font-bold">Project</h4>
           
            <ol>
               
                    <Link className='text-blue-700 font-semibold hover:text-blue-400 text-lg ' href={`https://marathi-rap.vercel.app/`}> <li>Marathi Rap </li></Link>
                    <Link className='text-blue-700 font-semibold hover:text-blue-400 text-lg ' href={`https://video-call-zeta-nine.vercel.app/`}> <li>Video Call</li></Link>
                    <Link className='text-blue-700 font-semibold hover:text-blue-400 text-lg ' href={`https://saikingnext.vercel.app/`}> <li>Pinterest Clone</li></Link>
                    <Link className='text-blue-700 font-semibold hover:text-blue-400 text-lg ' href={`https://next-js-app-eight-brown.vercel.app/`}> <li>Todo List App</li></Link>
                   
                
            </ol>
          </div>
         
        </section>
      </main>

      <footer className="text-center text-gray-500 mt-10 text-sm">
        &copy; {new Date().getFullYear()} Saiprasad Algulwad. All rights reserved.
      </footer>
    </div></>
  );
};

export default ProfilePage;