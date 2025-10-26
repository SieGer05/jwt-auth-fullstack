import LoginForm from "../components/LoginForm"
import LoginHeader from "../components/LoginHeader"
import { logo } from "../assets/images"

function LoginPage() {

   return (
      <div className="relative min-h-screen bg-gray-300">

         <LoginHeader />
         
         <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2">
            <img 
               src={logo} 
               alt="jwt logo" 
               className="w-100 object-contain"
            />
         </div>

         <LoginForm />

         <footer className="absolute bottom-0 right-1/2 py-4 text-center">
            <p className="text-gray-600 text-sm">
               © {new Date().getFullYear()} DJILI Mohamed Amine. All rights reserved.
            </p>
         </footer>
      </div>
   )
}

export default LoginPage