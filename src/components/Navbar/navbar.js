import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/Dlogo.png";
import contactImg from '../../assets/contact.png';
import {Link} from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar= ()=> {
    const[showMenu,setShowMenu]=useState(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo"/>
            <div className="dekstopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="dekstopMenuListItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="dekstopMenuListItem">About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="dekstopMenuListItem">Portfolio</Link>
                <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-100} duration={500} className="dekstopMenuListItem">Tech-Stack</Link>
            </div>
            <button className="dekstopMenuBtn" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>
                <img src={contactImg} alt="" className="dekstopMenuImg"/>Contact Me
            </button>

            <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display:showMenu? 'flex':'none'}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Tech-Stack</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>


        </nav>
    )
}

export default Navbar;