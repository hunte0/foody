import { Input } from '../../components/Input';
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react';

function Signin() {
  
  return (
   <div className="relative w-full h-screen flex flex-col md:flex-row bg-white ">
      <Link href='/login'>
      <div className=' rounded-2xl hover:bg-gray-500 mt-5 ml-5 max-h-6'>
          <ArrowLeft className='text-black' />
        </div>
        </Link>
    
      
      <div className="w-full md:w-1/2 flex items-center justify-center p-10 ">
        

        <div className="w-full max-w-sm">
          <h2 className="text-4xl font-bold text-slate-800 mb-8">Sign In</h2>
          
          <form className="space-y-6">
            <Input label="Username" phtext="Username"/>
            <Input label="Email" phtext="Enter your email" />
            <Input label="Password" phtext="Enter your password" />
            <Input label="Confirm Password" phtext="Re enter your password" />
            
            <button className="w-full bg-[#008645] hover:bg-opacity-90 text-white font-semibold py-4 rounded-2xl ">
              Sign In
            </button>
          </form>
        </div>
      </div>

      
      <div className="hidden md:block md:w-1/2 h-full">
        <img 
          src="/images/imagev.png" 
    alt="Fresh Greens" 
    className="w-full h-full object-cover" 
        />
      </div>

    </div>
  );
}
export default Signin;