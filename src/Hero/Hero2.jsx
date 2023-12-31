const Hero2 = () => {
  return (
    <div className="flex items-center justify-center xs:flex-col mt-60 md:flex-row">
       <div className="relative xs:p-20 justify-center xs:mt-60 md:mt-32">
         <img src="/Rectangle 2881.png" alt="Image 1" className="w-80 border-8 border-green-100" />
         <img src="/Rectangle 2882.png" alt="Image 2" className="border-8 border-green-100 mt-8 ml-8 xs:absolute mr-40 xs: top-1/2 xs:w-1/2 z-10 xs:left-1/3 md:absolute w-90 h-1/2 left-1/2 " />
       </div>
       
       <div>
         <div className="xs:mt-20 md:mt-0 ml-8">
          <h6>About us</h6>
          <h6 className="text-3xl font-bold">Your Support is Really</h6>
          <h6 className="text-3xl font-bold">Powerful.</h6>
          <h6>The secret to happiness lies in helping others. Never</h6>
          <h6>underestimate the difference YOU can make in the</h6>
          <h6>lives of the poor, the abused and the helpless.</h6>
         </div>
  
         <div className="xs:mt-8 md:flex-col">
           <button className="bg-green-500 hover:bg-green-300 text-white font-bold py-2 px-4 rounded xs:mt-8 md:flex-col">
               Read More
           </button>
         </div>
       </div>
    </div>
  )
}

export default Hero2