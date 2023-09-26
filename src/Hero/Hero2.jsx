const Hero2 = () => {
  return (
    <div className="flex items-center justify-center xs:flex-col md:flex-row mt-32">
       <div className="relative xs:p-20 justify-center mt-60 md:mt-0">
         <img src="/Rectangle 2880.png" alt="Image 1" className="w-80 border-8 border-green-200" />
         <img src="/Rectangle 2882.png" alt="Image 2" className="absolute w-90 h-60 top-1/2 left-52 border-8 border-green-200" />
       </div>

       <div className="justify-start items-start">
        <h6>About us</h6>
        <h6 className="text-3xl font-bold">Your Support is Really</h6>
        <h6 className="text-3xl font-bold">Powerful.</h6>
        <h6>The secret to happiness lies in helping others. Never</h6>
        <h6>underestimate the difference YOU can make in the</h6>
        <h6>lives of the poor, the abused and the helpless.</h6>
       </div>
    </div>
  )
}

export default Hero2