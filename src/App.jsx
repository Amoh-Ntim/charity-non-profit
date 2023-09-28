import './App.css'
import{ useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar'
import HamburgerMenu from './Navbar/Hamburger';
import Hero1 from './Hero/Hero1';
import Hero2 from './Hero/Hero2';
import Hero3 from './Hero/Hero3';
import HeroGrid from './Hero/HeroGrid';
import Testimonial from './Hero/Testimonial';
import Herobottom from './Hero/Herobottom';
import Bottomnav from './Hero/Bottomnav';

const App = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check the screen width when the component mounts and on resize
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 840); // Adjust the breakpoint as needed
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
      {isSmallScreen ? <HamburgerMenu /> : <Navbar />}
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <HeroGrid />
      <Testimonial />
      <Herobottom />
      <Bottomnav />
    </div>
  )
}

export default App