import './navbar.css'
import {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import Menu from './menu'

const Navbar = () => {
  const [showInput, setShowInput] = useState(false)
  const [showNavbarBackground, setShowNavbarBackground] = useState(false);
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const inputThreshold = 300; // Adjust this value as needed
      const backgroundThreshold = 30;
      if (scrollPosition > inputThreshold) {
        setShowInput(true);
      } else {
        setShowInput(false);
      }
      if (scrollPosition > backgroundThreshold) {
        setShowNavbarBackground(true);
      } else {
        setShowNavbarBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (location.pathname === '/login' || location.pathname ==='/signup') {
    return null;
  }
  return (
    <header className={showNavbarBackground ? 'with-background' : ''}>
        <div className="left">
            {/* <i className='bx bx-menu'></i> */}
            <Menu/>
            <h3>Uber <strong>Eats</strong></h3>
        </div>
        <input type="text" placeholder="Enter delivery address" className={showInput ? 'show' : ''}/>
        <div className="right">
            <button className='login'>
              <Link to="/login"><i className='bx bxs-user'/> Log in</Link>
            </button>
            <button className='signup'>
              <Link to="/signup">Sign up</Link>
            </button>
            {/* <button className='signup'>Sign up</button> */}
        </div>
    </header>
  )
}

export default Navbar