import { motion } from 'framer-motion'
const About = ()=>{
    return(
       <section>
          <motion.div className="flex justify-center items-center z-50 md:p-0 p-2"
            initial={{opacity:0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
          >
            <p className="text-[16px] montserrat-medium text-gray-400 text-justify hidden md:block w-full md:w-6/12 ">
                    Hi, This is side is <span className="palanquin-semibold text-[18px] text-[#F7AB0A]/40"><b>Md Zeya Imarn</b>.</span> Drawing from extensive experience in MERN stack development, I specialize in building robust web applications powered by MongoDB, Express.js, React, and Node.js. Proficient in both front-end and back-end technologies, I excel in crafting scalable solutions that meet diverse user demands. Prioritizing performance optimization and code integrity, I implement thorough testing and continuous refinement methodologies to deliver reliable and efficient software solutions.
                </p>

                <p className="text-[16px] montserrat-medium text-gray-600 text-justify w-full md:w-6/12  md:hidden block">
                   Experience in MERN stack development, I specialize in building robust web applications powered by MongoDB, Express.js, React, and Node.js. Proficient in both front-end and back-end technologies, 
                </p>
          </motion.div>
       </section>
    )
}

export default About