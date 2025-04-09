import React,{useEffect} from "react";
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';
import 'animate.css';

const Intro = ()=>{
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I am<span className="introName"> Dinith</span><br/>Undergraduate</span>
                <p className="introPara">I am an undergraduate from University of Moratuwa, Faculty of IT and <br/>I am enthusiastic about Software Engineering,Web Design,UI/UX<br/>as well as Artificial Intelligence and IoT Product Development.</p>
                <Link><button className="btn"><img src={btnImg} alt="hireme" className="btnImg"/> Hire Me</button></Link>
            </div>
            <img src={bg} alt="profile" className="bg"/>
        </section>
    )
}

export default Intro;