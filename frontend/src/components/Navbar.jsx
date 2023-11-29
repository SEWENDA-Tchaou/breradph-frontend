import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect, useCallback, useRef } from "react";
import MobileMenu from "./MobileMenu";
import { Link } from 'react-router-dom';
import BRERA from '/assets/img/BRERA.png';
import Login from '../components/Login'

const TOP_OFFSET = 66;

function Navbar() {
  const [showModal, setShowModal] = useState(false)
    const handleOnClose = ()=> setShowModal(false)
    const navRef = useRef();
    
    const showNavbar = ()=>{
        navRef.current.classList.toggle("responsive_nav");
    }

  const [showBackground, setShowBackgroung] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY >= TOP_OFFSET) {
            setShowBackgroung(true)
        } else {
            setShowBackgroung(false)
        }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, []);

    const toggleMobileMenu = useCallback(() => {
      setShowMobileMenu((current) => !current)
  }, []);

  const Icon = showMobileMenu ? AiOutlineClose : AiOutlineMenu;

  return (
    <nav className="w-full fixed z-30" ref={navRef}>
      <div 
      className={`${showBackground ?"colorBgAcceuil2 text-blanc" : ""} flex justify-between items-center px-16 text-blanc/95 py-2 transition duration-500`}>
        <a href="/">
          <img src={BRERA} alt="logo" className="w-[60px] h-[70px] sm:w-[100px] sm:h-[60px] hover:opacity-80" />
        </a>
        <div className="md:flex justify-evenly items-center w-3/4 hidden text-3xl font-bold">
            <a href="#quiNousSommes"  className="cursor-pointer hover:opacity-80 hover:underline px-2 py-6">Qui sommes nous</a>
            <a href="#services" className="cursor-pointer hover:opacity-80 hover:underline px-2 py-6">Nos  services</a>
            <button
              onClick={()=>setShowModal(true)}
              // href="/login" 
              className="nav_link3 cursor-pointer hover:opacity-80 hover:bg-blanc/30 p-2 max-lg:hidden"
            >
              Connexion
            </button>
            <a href='#contact' className="nav_link3 cursor-pointer hover:opacity-80 hover:bg-blanc/30 p-2">Contact</a>
        </div>
        <div className="md:hidden flex flex-row items-center gap-2 ml-8 relative">
          <Icon
            size={30}
            className="text-blanc cursor-pointer hover:opacity-80"
            onClick={toggleMobileMenu}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
      </div>
      <Login onClose={handleOnClose} visible={showModal} />
    </nav>
  )
}

export default Navbar;
