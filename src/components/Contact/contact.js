import React,{useRef} from "react";
import './contact.css';
import Html from '../../assets/html.png';
import Css from '../../assets/css.png';
import Js from '../../assets/js.png';
import ReactImg from '../../assets/react.png';
import Python from '../../assets/python.png';
import CLang from '../../assets/c.png';
import CppLang from '../../assets/cpp.png';
import MySQL from '../../assets/mysql.png';
import Php from '../../assets/php.png';
import Git from '../../assets/git.png';
import GitHub from '../../assets/github.png';
import Arduino from '../../assets/arduino.png';
import FacebookIcon from '../../assets/facebook.png';
import InstaIcon from '../../assets/instagram.png';
import LinkedInIcon from '../../assets/linkedin.png';
import YoutubeIcon from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Contact =()=> {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_5lemcxo', 'template_3kepi1b', form.current, {
            publicKey: 'xoC3rn_gIlwGtDbFV',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert("Email sent");
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return(
        <section id="contactPage">
            <div id="tech-stack">
                <motion.h1 
                ariants={fadeIn("up",0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.1}}
                className="contactPageTitle">Tech Stack</motion.h1>
                <motion.p 
                ariants={fadeIn("up",0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.1}}
                className="techDesc">I mainly used following technologies to implement my projects successfully.As a beginner I hope to learn more technologies and utilize those effectly in my Future projects.</motion.p>
                <div className="techImgs">
                    <img src={Html} alt="html" className="techImg"/>
                    <img src={Css} alt="css" className="techImg"/>
                    <img src={Js} alt="js" className="techImg"/>
                    <img src={ReactImg} alt="react" className="techImg"/>
                    <img src={Python} alt="python" className="techImg"/>
                    <img src={CLang} alt="Clang" className="techImg"/>
                    <img src={CppLang} alt="CppLang" className="techImg"/>
                    <img src={MySQL} alt="mysql" className="techImg"/>
                    <img src={Php} alt="php" className="techImg"/>
                    <img src={Git} alt="git" className="techImg"/>
                    <img src={GitHub} alt="github" className="techImg"/>
                    <img src={Arduino} alt="arduino" className="techImg"/>
                </div>
            </div>

            <div id="contact">
                    <h1 className="contactPageTitle">Contact Me</h1>
                    <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                    <form className="contactForm" ref={form} onSubmit={sendEmail}>
                        <input type="text" className="name" placeholder="Your Name" name="name"/>
                        <input type="email" className="email" placeholder="Your Email" name="email"/>
                        <textarea name="message" rows="5" placeholder="Your Message" className="msg"></textarea>
                        <button className="submitBtn" type="submit" value="Send">Submit</button>
                        <div className="links">
                            <a href="https://www.facebook.com/dinith.rathnayaka.2003" target="_blank"><img src={FacebookIcon} alt="facebook" className="link"/></a>
                            <a href="https://www.instagram.com/dinithrathanayaka23/?hl=en" target="_blank"><img src={InstaIcon} alt="instagram" className="link"/></a>
                            <a href="https://www.linkedin.com/in/dinithrathnayaka/" target="_blank"><img src={LinkedInIcon} alt="twitter" className="link"/></a>
                            <a href="https://www.youtube.com/@Edu.drivion" target="_blank"><img src={YoutubeIcon} alt="youtube" className="link"/></a>
                        </div>
                    </form>
            </div>
        </section>
    )
}

export default Contact;