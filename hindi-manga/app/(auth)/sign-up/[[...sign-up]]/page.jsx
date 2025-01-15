import Navbar from '@/app/components/Navbar'
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (<> <Navbar /><div className='flex items-center justify-center h-screen'><SignUp /></div> </> ) 
}