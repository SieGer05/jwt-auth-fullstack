import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react"
import { ApiService } from "../api/api";

function PublicRoute({ children }) {
   const [isAuthorized, setIsAuthorized] = useState(null);

   useEffect(() => {
      const token = localStorage.getItem("jwt");
      if (!token) {
         setIsAuthorized(false);
         return;
      }

      ApiService.getHello(token)
         .then(() => setIsAuthorized(true))
         .catch(() => setIsAuthorized(false))
   }, []);

   return isAuthorized ? <Navigate to="/hello" replace /> : children;
}

export default PublicRoute