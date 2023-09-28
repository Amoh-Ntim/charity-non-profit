import { useState } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {  
  const [click, setClick] = useState(false)
  const closeMenu=() => setClick(!click)
  return (
    <div className="flex justify-between">
        <img src="/VGF Logo File  (1) 1.png"/>
    {/* links */}
    <div className=" flex gap-12 ">
      {/* <a href="#" className=" hover:text-green-600">Home</a> */}
      <Link to="hero1" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className=" hover:text-green-600">Home</Link>
      <Link to="hero3" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className=" hover:text-green-600">Gallery</Link>
      <Link to="bottomnav" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className=" hover:text-green-600">About Us</Link>
      <Link to="test" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className=" hover:text-green-600">How We Help</Link>
    </div>

    {/* green button */}
    <div>
    <button className="bg-green-700 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
     Contact Us
    </button>

    </div>
    </div>
  )
}

export default Navbar