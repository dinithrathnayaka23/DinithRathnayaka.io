import React from "react";
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';
import Portfolio7 from '../../assets/portfolio-7.png';
import Portfolio8 from '../../assets/portfolio-8.png';
import Portfolio9 from '../../assets/portfolio-9.png';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';


const Works=()=>{
    return(
        <section id="works">
            <motion.h2 
            variants={fadeIn("up",0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.1}}
            className="workstitle">My Portfolio</motion.h2>
            <motion.span 
            variants={fadeIn("up",0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.1}}
            className="worksDesc">I take my pride paying attention to the smallest details and making sure that my work is almost perfect.Here, I am excited to to bring my skills and experience alongside with my projects.</motion.span>
            <div className="worksImgs">
                <a href="https://dinithrathnayaka23.github.io/calculatorbydini.io/" target="_blank"><img className="worksImg" src={Portfolio1} alt="portfolio1"/></a>
                <a href="https://dinithrathnayaka23.github.io/DinithTODOgithub.io/" target="_blank"><img className="worksImg" src={Portfolio2} alt="portfolio2"/></a>
                <a href="https://dinithrathnayaka23.github.io/FITGAUGEDINI.io/" target="_blank"><img className="worksImg" src={Portfolio3} alt="portfolio3"/></a>
                <a href="https://dinithrathnayaka23.github.io/burgerbarn.github.io/" target="_blank"><img className="worksImg" src={Portfolio4} alt="portfolio4"/></a>
                <a href="https://dinithrathnayaka23.github.io/physicsquiz.dinith.io/" target="_blank"><img className="worksImg" src={Portfolio5} alt="portfolio5"/></a>
                <a href="https://dinithrathnayaka23.github.io/dinithtexttoimagegithub.io/" target="_blank"><img className="worksImg" src={Portfolio6} alt="portfolio6"/></a>
                <a href="" target="_blank"><img className="worksImg" src={Portfolio7} alt="portfolio7"/></a>
                <a href="https://www.figma.com/proto/tcL7CUeZN0VKfzRuBnDsUF/Scope-Project?node-id=1288-4810&t=qEBZsgXE7A0fnCRk-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1085%3A728" target="_blank"><img className="worksImg" src={Portfolio8} alt="portfolio8"/></a>
                <a href="https://www.linkedin.com/posts/dinithrathnayaka_harmonyhub-teamwork-musicforall-activity-7299136231467102209-1a-S?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnhoFEBrMqhi1YRlDD5sr0u6E7bMeXFJtw" target="_blank"><img className="worksImg" src={Portfolio9} alt="portfolio9"/></a>
            </div>
            <button className="workBtn">See More</button>
        </section>
    )
}

export default Works;