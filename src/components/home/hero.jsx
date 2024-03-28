import HeroBg from "./heroBg"
import HeroBgCircle from "./heroBgCircle"
import { Hero_pic_jpg } from '../../utils'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import About from "./bio"
import { Link } from "react-router-dom"

const HeroSection = () => {
      const [text] = useTypewriter({
        words: ["Hi, The Name's Zeya Imran", "Love to Code in Backend", "Frontend is also Awesome", "I can manage AWS too"],
        loop: {},
        delaySpeed: 2000,
        deleteSpeed: 80
    });


  return (
      <section >
        {/* <div className="bg-[rgb(36,36,36)] h-screen flex flex-col items-center justify-center space-y-0 md:space-y-8 text-center overflow-y-scroll overflow-x-hidden snap-center"> */}
        <div className="bg-[rgb(36,36,36)] h-screen flex flex-col items-center justify-center space-y-0 md:space-y-8 text-center snap-center z-20">
         
          <HeroBg />
          <HeroBgCircle />
          <motion.img
            initial={{opacity:0}}
            transition={{duration:1.8}}
            whileInView={{opacity:1}}
            viewport={{once:true}}

            className="relative rounded-full h-32 w-32 mx-auto object-cover grayscale" 
            src={Hero_pic_jpg}  alt="hero_pic"/>
          <div className="z-20 mb-10 md:mb-0">
            <h2 className="tracking-[10px] md:tracking-[15px]  text-sm text-gray-500 mt-2 md:mt-0">FULL STACK DEVELOPER</h2>
            <h1 className="text-2xl md:text-5xl lg:text-6xl palanquin-semibold text-white px-0 md:px-10 mt-2">
                <span>{text}</span>
                <span className="palanquin-light"><Cursor cursorColor='rgb(247 171 10 / 0.4)' /></span>
            </h1>
            <motion.div className="pt-1 md:pt-5"
               initial={{opacity:0}}
               whileInView={{opacity: 1}}
               transition={{duration: 1}}
            >
              <button className="heroButton"><Link to="/">Home</Link></button>
              <button className="heroButton">Resume</button>
              <button className="heroButton">Portfolio</button>
              <button className="heroButton"><Link to="/contact">Contact</Link></button>
            </motion.div>
          </div>
          <About />
        </div>
      </section>
  )
}

export default HeroSection