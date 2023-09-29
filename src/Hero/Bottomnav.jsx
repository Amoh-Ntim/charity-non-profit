
const Bottomnav = () => {
  return (
    <div className="flex p-20 bg-black text-white xs:flex-col items-center text-center md:flex-row justify-around" id="bottomnav">
    {/* Address div */}
    <div  className="md:text-left">
    <h6>Address</h6>
     <div className="mt-8 text-gray-500">
        <h6>A-272, Surajmal Vihar, Delhi,</h6>
        <h6>11009281-8181-0860</h6>
     </div>
     <h6 className="text-gray-500 underline">contact@vivekguptafoundation.in</h6>
    </div>

    {/* second div */}
    <div className="flex xs:flex-col mt-12 md:p-8">
        <h6 className="mb-4">Get In Touch</h6>
        <h6 className=" text-gray-500 hover:text-white"><a href="#section1">Contact us</a></h6>
        <h6 className=" text-gray-500  hover:text-white"><a href="#section1">Our services</a></h6>
    </div>
    {/* Third and final div */}
    <div className="text-white flex xs:flex-col mt-12">
      <h5>Newsletter</h5>
      <div className="flex items-center justify-center">
       <div className="flex mt-8 xs:flex-col md:flex-row">
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none text-black"
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-r-none hover:bg-green-600 focus:outline-none xs:flex w-40 justify-center items-center"
        >
          Subscribe
        </button>
      </div>
      </div>
        <h6 className="text-gray-500 mt-4 text-left">Your email is safe with us,we don{"'"}t spam.</h6>
        <h6 className="text-left mt-8">Follow me</h6>
        {/* socials */}
        <div className="flex justify-center items-center mt-4 gap-4">
            <img className="hover:text-green-500 object-cover transition-transform transform scale-100 group-hover:scale-110" src="Group 3247.png"/>
            <img className="hover:text-green-500" src="Group 3248.png"/>
            <img className="hover:text-green-500" src="Group 3249.png"/>
            <img className="hover:text-green-500" src="Group 3250.png"/>
        </div>
    </div>
    {/* master div */}
    </div>
  )
}

export default Bottomnav
 


