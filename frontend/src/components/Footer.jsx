function Footer({position}) {
   return (
      <footer className={`absolute bottom-0 ${position} py-4 text-center`}>
         <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} DJILI Mohamed Amine. All rights reserved.
         </p>
      </footer>
   )
}

export default Footer