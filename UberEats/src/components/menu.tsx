import {useState} from 'react'
import './menu.css'
import { MenuPage } from './menupage';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
      const closeMenu = () => {
        setIsOpen(false);
    };
  return (
    <>
        <i className='bx bx-menu' onClick={toggleMenu}></i>
        <MenuPage isOpen={isOpen} onClose={closeMenu} />
    </>
  )
}

export default Menu