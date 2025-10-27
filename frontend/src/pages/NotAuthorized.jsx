import { Link } from "react-router-dom";
import LoginHeader from "../components/Header";
import Footer from "../components/Footer";

function NotAuthorized() {
  return (
   <>
      <LoginHeader />
      <div className="flex min-h-screen items-center justify-center bg-gray-200 p-4">
         <div className="relative w-full max-w-lg rounded-xl bg-neutral-900 p-8 text-center shadow-2xl shadow-purple-500/10">
            
            <div className="absolute top-0 left-0 -mt-2 -ml-2 h-6 w-6 rounded-br-full bg-green-500"></div>
            <div className="absolute bottom-0 right-0 -mb-2 -mr-2 h-6 w-6 rounded-tl-full bg-purple-500"></div>

            <header>
               <h1 className="mb-4 text-8xl font-extrabold text-purple-500">
                  403
               </h1>
               <h2 className="mb-3 text-4xl font-bold text-white">
                  Access Denied
               </h2>
            </header>

            <main>
               <p className="mb-8 text-lg text-gray-400">
                  Sorry, you do not have permission to access this resource.
               </p>
            </main>

            <footer>
               <Link
                  to="/"
                  className="inline-block transform rounded-lg bg-green-500 px-6 py-3 
                           font-semibold text-neutral-900 shadow-lg transition-all duration-300
                           ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-green-400
                           focus:outline-none focus:ring-2 focus:ring-green-500
                           focus:ring-offset-2 focus:ring-offset-neutral-950"
               >
                  Back to Home
               </Link>
            </footer>
         </div>
      </div>
      <Footer position="left-1/2 -translate-x-1/2" />
   </>
  );
}

export default NotAuthorized;