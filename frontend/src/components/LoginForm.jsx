import { useState } from "react";

function LoginForm() {
   const [showNotification, setShowNotification] = useState(false);

   const handleUnavailableClick = (e) => {
      e.preventDefault();
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 4000);
   };

   return (
      <div className='absolute bottom-0 right-[15%] bg-black w-96 h-150 rounded-t-4xl p-8'>

         {showNotification && (
            <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 bg-black border border-gray-500 text-white px-4 py-3 rounded-xl shadow-lg z-10 max-w-xs text-center">
               <p className="text-sm">
                  This option is currently unavailable — this project is for educational purposes (JWT demo).
               </p>
            </div>
         )}

         <div className="flex flex-col items-center mb-8">
            <h2 className="text-white text-4xl font-bold mb-2">Welcome Back</h2>
            <p className="text-gray-500 text-sm">Please sign in to your account</p>
         </div>

         <form className="space-y-6">
            <div className="space-y-2">
               <label htmlFor="username" className="block text-white text-sm font-medium">
                  Username
               </label>
               <input
                  id="username"
                  type="text"
                  className="w-full px-4 py-3 bg-black border border-gray-400 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                  placeholder="Enter your username"
               />
            </div>

            <div className="space-y-2">
               <label htmlFor="password" className="block text-white text-sm font-medium">
                  Password
               </label>
               <input
                  id="password"
                  type="password"
                  className="w-full px-4 py-3 bg-black border border-gray-400 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                  placeholder="Enter your password"
               />
            </div>

            <div className="flex items-center justify-between text-sm">
               <label className="flex items-center text-gray-400 cursor-pointer">
                  <input 
                     type="checkbox" 
                     className="rounded border-gray-600 bg-gray-700 text-white focus:ring-white mr-2 cursor-pointer" 
                     onClick={handleUnavailableClick}
                  />
                  Remember me
               </label>
               <a 
                  href="#" 
                  className="text-green-500 hover:text-green-900 transition-colors"
                  onClick={handleUnavailableClick}
               >
                  Forgot password?
               </a>
            </div>

            <button
               type="submit"
               className="w-full bg-white text-black py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black transition-colors"
            >
               Sign In
            </button>
         </form>

         <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
               Don't have an account?{' '}
               <a 
                  href="#" 
                  className="text-fuchsia-500 hover:text-fuchsia-900 font-medium transition-colors"
                  onClick={handleUnavailableClick}
               >
                  Sign up
               </a>
            </p>
         </div>
      </div>
   );
}

export default LoginForm;