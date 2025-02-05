import './Hero.css';
import { TypeAnimation } from 'react-type-animation';
import { motion, stagger } from 'motion/react';
import { tr } from 'motion/react-client';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Sphare from './Sphare';


const stackmotion = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.5,
            staggerChildren: 0.2,
        },
    },
};
const mediamotion = {
    initial: { opacity: 0, y: -100 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.5,
            staggerChildren: 0.2,
        },
    },
};


const Hero = () => {
    return (
        <div className="hero">
            <div className="left-side">
                <motion.h1 className="title" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5 }}>Hello There,<br /><span>I'M Mohamed.</span></motion.h1>
                <div className="icon-clickers">
                    <a href="mailto:mohamed3rafa01@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src="/gmail-svgrepo-com.png" alt="Gmail" />
                    </a>
                    <a href="https://wa.link/ir1l96" target="_blank" rel="noopener noreferrer">
                        <img src="/whatsapp-color-svgrepo-com.png" alt="WhatsApp" />
                    </a>
                    <a href="https://www.linkedin.com/in/mohammed-arafa-6628211b8/" target="_blank" rel="noopener noreferrer">
                        <img src="public\linkedin-svgrepo-com (1).png" alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/mo74x" target="_blank" rel="noopener noreferrer">
                        <img src="/github-svgrepo-com.png" alt="GitHub" />
                    </a>
                </div>
                <motion.div variants={stackmotion} initial="initial" animate="animate" className="description">
                    <motion.h2 variants={stackmotion}>Software Engineer || Full Stack Developer</motion.h2>
                    <motion.p variants={stackmotion}>
                        Skilled Full-Stack Developer with extensive experience in designing, developing, and deploying robust web applications, combining front-end and back-end technologies to deliver seamless user experiences.
                    </motion.p>
                    <motion.div variants={stackmotion} className="stack-list">
                        <motion.img variants={stackmotion} src="/cpp-svgrepo-com.png" alt="C++" />
                        <motion.img variants={stackmotion} src="/python-svgrepo-com.png" alt="Python" />
                        <motion.img variants={stackmotion} src="/javascript-svgrepo-com.png" alt="JS" />
                        <motion.img variants={stackmotion} src="/css-3-svgrepo-com.png" alt="CSS" />
                        <motion.img variants={stackmotion} src="/wordpress-svgrepo-com.png" alt="wordpress" />
                        <motion.img variants={stackmotion} src="/reactjs-svgrepo-com.png" alt="React" />
                        <motion.img variants={stackmotion} src="/nodejs-icon-logo-svgrepo-com.png" alt="Nodejs" />
                        <motion.img variants={stackmotion} src="/django-icon-svgrepo-com.png" alt="Django" />
                        <motion.img variants={stackmotion} src="/mongodb-svgrepo-com.png" alt="MongoDB" />
                        <motion.img variants={stackmotion} src="/mysql-svgrepo-com.png" alt="MySQL" />
                    </motion.div>
                    <a href="https://drive.google.com/file/d/1xGq0xhx7QhdEHhlEnvQovTIhJSFOCoda/view?usp=drivesdk" download className="download-cv-btn">Download CV</a>

                </motion.div>
                <a href="#services" className="scroll-down">
                    <svg
                        width="50px"
                        height="50px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
                            stroke="white"
                            strokeWidth="1"
                        />
                        <path
                            d="M12 5V8"
                            stroke="white"
                            strokeWidth="1"
                            strokeLinecap="round"
                        />
                    </svg>
                </a>
            </div>
            <div className="right-side">
                <motion.div className="media" variants={mediamotion} initial="initial" animate="animate">
                    <motion.a href="https://www.linkedin.com/in/mohammed-arafa-6628211b8/">
                        <img src="/linkedin-svgrepo-com (1).png" alt="linkedin" />
                    </motion.a>
                    <motion.a variants={mediamotion} href="https://github.com/mo74x">
                        <img src="/github-svgrepo-com.png" alt="github" />
                    </motion.a>
                    <motion.a variants={mediamotion} href="https://wa.link/ir1l96">
                        <img src="/whatsapp-color-svgrepo-com.png" alt="whatsapp" />
                    </motion.a>
                    <motion.a variants={mediamotion} href="mailto::mohamed3rafa01@gmail.com">
                        <img src="/gmail-svgrepo-com.png" alt="gmail" />
                    </motion.a>
                    <motion.div variants={mediamotion} className="text-conatct">
                        <motion.div className="contact-text">CONTACT ME</motion.div>
                    </motion.div>
                </motion.div>
                <div className="chat">
                    <div className="text">
                        <TypeAnimation
                            sequence={[
                                1000,
                                'Greetings! I am Mohamed Arafa.',
                                1000,
                                'Software Engineer and Full-Stack Developer based in Egypt.',
                                1000
                            ]}
                            wrapper="span"
                            speed={40}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </div>
                    <img src="/WhatsApp Image 2025-02-03 at 12.10.16 PM.jpeg" alt="" />
                </div>
                <a href="#contact" className="contact-me">
                    <motion.div className="contact-btn" animate={{rotate: 360}} transition={{duration: 8, repeat: Infinity, repeatType: "reverse"}}>
                        <svg viewBox="0 0 200 200" width="130" height="130">
                            <circle cx="100" cy="100" r="90" fill="#C9DDEE" />
                            <path
                                id="innerCirclePath"
                                fill="none"
                                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                            />
                            <text className="circleText">
                                <textPath href="#innerCirclePath">Hire Now •</textPath>
                            </text>
                            <text className="circleText">
                                <textPath href="#innerCirclePath" startOffset="44%">
                                    Contact Me •
                                </textPath>
                            </text>
                        </svg>
                        <div className="arrow">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="50"
                                height="50"
                                fill="none"
                                stroke="black"
                                strokeWidth="2"
                            >
                                <line x1="6" y1="18" x2="18" y2="6" />
                                <polyline points="9 6 18 6 18 15" />
                            </svg>
                        </div>
                    </motion.div>

                </a>
            </div>
            <div className="background-image">
                <Canvas>
                    <Suspense fallback="3D Model Loading...">
                        <Sphare/>
                    </Suspense>
                </Canvas>
                <div className="D-Image">
                  {/**  <img src="" alt="" />*/}

                </div>
            </div>
        </div>
    );
}
export default Hero;    