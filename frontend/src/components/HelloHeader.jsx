
function HelloHeader() {
   return (
       <div className="text-center mt-10 mb-12">
         <div className="flex justify-center my-4">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-lg shadow-black-500/30">
            <svg className="w-8 h-8 text-fuchsia-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            </div>
         </div>
         <h1 className="text-4xl font-bold text-green-600">
            Welcome to Protected Area
         </h1>
         <p className="text-xl text-green-400">
            You have successfully logged in!
         </p>
      </div>
   )
}

export default HelloHeader