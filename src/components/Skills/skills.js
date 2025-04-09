import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
import IoT from '../../assets/IoT.png';
import Content from '../../assets/content.png';
import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Skills=()=>{
    return(
        <section id="skills">
            <motion.span 
            variants={fadeIn("up",0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.1}}
            className="skillTitle">What I do</motion.span>
            <motion.span 
            variants={fadeIn("up",0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.1}}
            className="skillDesc">I am a skilled and passionate web designer and UI/UX Designer. I do App Designs as well as Content Creation.I am in the journey of mastering software development.I am interested in Learning about programming,Artificial Intelligence Integration as well as IoT system development.</motion.span>
            <div className="skillBars">
                <motion.div 
                variants={fadeIn("up",0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.1}}
                className="skillBar">
                    <img className="skillBarImg" src={WebDesign} alt="webdesign"/>
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>I am a full-stack web-developer. But, I am more experienced in Front-End Web Development.</p>
                    </div>
                </motion.div>

                <motion.div 
                variants={fadeIn("up",0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.1}}
                className="skillBar">
                    <img className="skillBarImg" src={UIDesign} alt="uiuxdesign"/>
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>I design interactive mockups of Websites,Mobile Apps using Figma.</p>
                    </div>
                </motion.div>

                <motion.div 
                variants={fadeIn("up",0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.1}}
                className="skillBar">
                    <img className="skillBarImg" src={AppDesign} alt="appdesign"/>
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>I am passionate about developing Mobile Applications and Mobile Responsive Web Applications.</p>
                    </div>
                </motion.div>

                <motion.div 
                variants={fadeIn("up",0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.1}}
                className="skillBar">
                    <img className="skillBarImg" src={IoT} alt="iot"/>
                    <div className="skillBarText">
                        <h2>IoT System Development</h2>
                        <p>We are developing a Server Room Monitoring System for Faculty of IT University Of Moratuwa.With that foundation, I hope to embark a Journey on IoT system development.</p>
                    </div>
                </motion.div>

                <motion.div
                variants={fadeIn("up",0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.1}}
                className="skillBar">
                    <img className="skillBarImg" src={Content} alt="contentCreation"/>
                    <div className="skillBarText">
                        <h2>Content Creation</h2>
                        <p>I am passionate about technical content writing at Medium as well as YouTube content creation. I strongly believe personal branding is important for Everyone who is in the Tech Industry.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills;