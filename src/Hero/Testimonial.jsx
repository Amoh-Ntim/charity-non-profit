const Testimonial = () => {
  return (
    <div className="flex-col p-4">
     <h6  className="flex text-green-500 text-xl">Testimonial</h6>
     <div>
     <div className="flex justify-between">
        <div className="flex-col">
          <h6 className="text-black font-bold text-4xl">What People Say About</h6>
          <h6 className="flex text-black font-bold text-4xl">Us</h6>
        </div>
          <div className="">
            <img className="" src="Group 380.png"/>
          </div>
        </div>
     </div>

     <div className="flex xs:flex-col justify-around items-center md:flex-row gap-2 mt-2">
     {/* 1st card */}
     <div  className="border border-green-500 border-opacity-25 w-80 p-4">
       <div className="">
        <img className="" src="Quote.png"/>
        <h2 className="font-sans text-xl">Kindness</h2>
        <h2>Lorem Ipsum is simply dummy text Lorem</h2>
        <h2> Ipsum is simply dummy text Lorem  Ipsum is </h2>
        <h2>simply dummy text  Lorem Ipsum is</h2>
        <h2>simply dummy text Lorem Ipsum is</h2>
       </div>
       {/* Avatar */}
       <div className="flex justify-start gap-4 mt-2">
        <img className="" src="/Ellipse 25.png"/>
        <div className="flex-col">
        <h2 className="flex justify-start">John Doe</h2>
        <h2>Senior Gardener Farmer</h2>
        </div>
       </div>
     </div>

     {/* 2nd card */}
     <div  className="border border-green-500 border-opacity-25 w-80 p-4">
       <div className="">
        <img className="" src="Quote.png"/>
        <h2 className="font-sans text-xl">Humantiy</h2>
        <h2>Lorem Ipsum is simply dummy text Lorem</h2>
        <h2> Ipsum is simply dummy text Lorem  Ipsum is </h2>
        <h2>simply dummy text  Lorem Ipsum is</h2>
        <h2>simply dummy text Lorem Ipsum is</h2>
       </div>
       {/* Avatar */}
       <div className="flex justify-start gap-4 mt-2">
        <img className="" src="/Ellipse 26.png"/>
        <div className="flex-col">
        <h2 className="flex justify-start">Jack Harry</h2>
        <h2>Senior Gardener Farmer</h2>
        </div>
       </div>
     </div>

     {/* 3rd card */}
     <div  className="border border-green-500 border-opacity-25 w-80 p-4">
       <div className="">
        <img className="" src="Quote.png"/>
        <h2 className="font-sans text-xl">Ethics & Morality</h2>
        <h2>Lorem Ipsum is simply dummy text Lorem</h2>
        <h2> Ipsum is simply dummy text Lorem  Ipsum is </h2>
        <h2>simply dummy text  Lorem Ipsum is</h2>
        <h2>simply dummy text Lorem Ipsum is</h2>
       </div>
       {/* Avatar */}
       <div className="flex justify-start gap-4 mt-2">
        <img className="" src="/Ellipse 27.png"/>
        <div className="flex-col">
        <h2 className="flex justify-start">Sakib Hossain</h2>
        <h2>Senior Gardener Farmer</h2>
        </div>
       </div>
     </div>
     {/* cards div */}
     </div>
{/* top most div */}
    </div>
  )
}

export default Testimonial