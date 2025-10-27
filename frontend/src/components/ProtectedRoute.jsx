import { useEffect, useState } from "react";
import { ApiService } from "../api/api";
import { Navigate } from "react-router-dom"; 

function ProtectedRoute({ children }) {
   const [isAuthorized, setIsAuthorized] = useState(null);
   const [loading, setLoading] = useState(true);
   const [minTimeElapsed, setMinTimeElapsed] = useState(false); 

   useEffect(() => {
      const timer = setTimeout(() => {
         setMinTimeElapsed(true);
      }, 3000); 

      return () => clearTimeout(timer);
   }, []);

   useEffect(() => {
      const token = localStorage.getItem("jwt");
      if (!token) {
         setIsAuthorized(false);
         setLoading(false);
         return;
      }

      ApiService.getHello(token)
         .then(() => setIsAuthorized(true))
         .catch(() => setIsAuthorized(false))
         .finally(() => setLoading(false)); 
   }, []);

   if (loading || !minTimeElapsed) {
      return (
         <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
         <div className="flex items-center justify-center space-x-2">
            <div className="h-4 w-4 animate-pulse rounded-full bg-purple-500 [animation-delay:-0.3s]"></div>
            <div className="h-4 w-4 animate-pulse rounded-full bg-green-500 [animation-delay:-0.15s]"></div>
            <div className="h-4 w-4 animate-pulse rounded-full bg-purple-500"></div>
         </div>
         <p className="mt-6 text-lg text-gray-500">Checking access...</p>
         </div>
      );
   }

   return isAuthorized ? children : <Navigate to="/not-authorized" />;
}

export default ProtectedRoute;