const Hero3 = () => {
  return (
  <div className="flex mt-20 gap-8 justify-center xs:flex-col lg:flex-row" id="hero3">
     <div className="flex-row justify-center items-center">

     <div className="flex-row">
      <h6>Welcome to Charity</h6>
          <div className="text-2xl font-mono">
          <h6>Let Us Come Together</h6>
          <h6>To Make a Difference</h6>
          </div>
          <div className="text-sm">
          <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</h6>
          <h6>nonumy tempor invidunt ut labore et dolore magna aliquyam</h6>
          <h6>erat, sed diam voluptua. At vero eos et accusam et justo.</h6>
          </div>
    {/* green bg for mission and vision */}
      <div className="flex gap-2 items-center justify-center mt-8">
          <div className="flex-col bg-green-100 xs:h-40 sm:w-56 h-28">
          <div className="xs:mt-2 sm:mt-8">
            <div className="flex gap-2">
             <img src="/Vector.png" className="w-6 h-7 ml-2"/>
             <h6 className="">Our Mission</h6>
            </div>
            <h6>Lorem ipsum dolor sit amet,</h6>
            <h6>consetetur sadipscing elitr,</h6>
            <h6>sed diam</h6>
          </div>
          </div>

          <div className="bg-green-100 xs:h-40 sm:w-56 h-28">
          <div className="xs:mt-2 sm:mt-8">
            <div className="flex gap-2">
             <img src="/Group 3180.png" className="w-6 h-7 ml-2"/>
             <h6 className="">Our Vision</h6>
            </div>
            <h6>Lorem ipsum dolor sit amet,</h6>
            <h6>consetetur sadipscing elitr,</h6>
            <h6>sed diam</h6>
          </div>
          </div>
      </div>
         <div className="flex font-bold p-2 items-center xs:justify-around">
            <h6>Donations</h6>
            <h6>75%</h6>
         </div>
         <div className="flex mt-4 items-center justify-center">
          <img src="/Rectangle 2885.png" className="ml-4  h-3"/>
          <img src="/Rectangle 2884.png" className=" w-12 h-3 "/>
         </div>
     </div> 
    </div>

    <div className="flex relative items-center justify-center">
        <img src="/Rectangle 2880.png" className="w-60 h-64 border-8 border-green-100"/>
        <div className="flex text-xs bg-white absolute border-8 border-green-100 items-center justify-center ">
           <ul className="list-disc list-inside p-2">
           <li className="flex mb-2 text-green-400 whitespace-nowrap">Together, we{"'"}re going to make the future</li>
           <li className="mb-2">children where we are able to fulfill all</li>
           <li className="mb-2">their requirements to keep them safe
                from withered world</li>
           <li className="mb-2">We have already stepped out and
                   start changing the world</li>
           <li className="mb-2">Keeping safe them from war, inhumanity</li>
           </ul>
        </div>
    </div>
   {/*  xs:left-0 top-3/4   sm:top-1/2 left-36 */}
</div>
  )
}

export default Hero3