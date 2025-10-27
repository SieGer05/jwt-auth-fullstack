import LoginForm from "../components/LoginForm"
import LoginHeader from "../components/Header"
import Footer from "../components/Footer"
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

         <Footer position="right-1/2" />
      </div>
   )
}

export default LoginPage