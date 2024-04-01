import { motion } from "framer-motion"
import { FaArrowTurnDown } from "react-icons/fa6";
import { frontend, backend, devops, version, managment} from '../../constants';
import { Tooltip} from 'antd';

const Technical = ()=>{

    return(
        <section id="projects" className="bento w-11/12 md:w-4/5 mx-auto flex flex-col gap-y-5">
            {/* heading text */}
            <div className='flex items-end gap-5 justify-center mb-5'>
                <motion.div
                    initial={{ opacity: 0, x: 30, y: -12 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1.5, }}
                    viewport={{ once: true }}
                >
                    <FaArrowTurnDown style={{ color: 'white', fontSize: '24px' }} className='-scale-x-100 translate-y-2' />
                </motion.div>

      
                <motion.h1 className='text-2xl md:text-4xl text-[#ddd] palanquin-semibold tracking-wide'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, }}
                    viewport={{ once: true }}

                >About My Skills</motion.h1>
              
                <motion.div
                    initial={{ opacity: 0, x: -30, y: -12 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1.5, }}
                    viewport={{ once: true }}
                >
                    <FaArrowTurnDown style={{ color: 'white', fontSize: '24px' }} className='translate-y-2' />
                </motion.div>
            </div>

            {/* skill icon and design */}
            <div className="bento-grid text-[#848484]">
                {/* fronted icon */}
                <Tooltip placement="topLeft" title="frontend" color="geekblue">
                <motion.div className="bento-item flex flex-wrap gap-8"
                    initial={{x:-300,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{duration:1.2}}
                >
                    
                    {
                        frontend.map((item, i) => {
                            return (
                                <>
                                    <motion.div className='flex  flex-col items-center gap-2  w-16 h-16 mx-auto'
                                         initial={{opacity:0}}
                                         whileInView={{opacity:1}}
                                         transition={{duration:2}}
                                    >
                                        <img src={item.imgUrl} alt={i} />
                                        <p>{item.title}</p>
                                    </motion.div>
                                </>
                            )
                        })
                    }
                </motion.div>
                </Tooltip>
                {/* backend icon */}
                <Tooltip placement="topRight" title="backend" color="geekblue">
                <motion.div className="bento-item flex flex-wrap gap-8"
                    initial={{x:80,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{duration:2}}
                >
                    {
                        backend.map((item, i) => {
                            return (
                                <>
                                    <motion.div className='flex  flex-col items-center gap-0  w-16 h-16 mx-auto'
                                      initial={{opacity:0}}
                                      whileInView={{opacity:1}}
                                      transition={{duration:2}}
                                    >
                                        <img src={item.imgUrl} alt={i} />
                                        <p>{item.title}</p>
                                    </motion.div>
                                </>
                            )
                        })
                    }
                </motion.div>
                </Tooltip>
                {/* version icon */}
                <Tooltip placement="topRight" title="versioning tools" color="geekblue">
                <motion.div className="bento-item flex flex-wrap gap-8"
                    initial={{x:250,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{delay: 0.2,duration:1}}
                >
                    {
                        version.map((item, i) => {
                            return (
                                <>
                                    <motion.div className='flex  flex-col items-center gap-0  w-16 h-16'
                                         initial={{opacity:0}}
                                         whileInView={{opacity:1}}
                                         transition={{duration:2}}
                                    >
                                        <img src={item.imgUrl} alt={i} />
                                        <p>{item.title}</p>
                                    </motion.div>
                                </>
                            )
                        })
                    }
                </motion.div>
                </Tooltip>
                {/* management icon */}
                <Tooltip placement="bottom" title="managment tools" color="geekblue">
                <motion.div className="bento-item flex flex-wrap gap-8"
                    initial={{x:-80,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{delay: 0.2,duration:1.8}}
                >
                    {
                        managment.map((item, i) => {
                            return (
                                <>
                                    <motion.div className='flex flex-col items-center gap-0  w-16 h-16 '
                                     initial={{opacity:0}}
                                     whileInView={{opacity:1}}
                                     transition={{duration:2}}
                                    >
                                        <img src={item.imgUrl} alt={i} />
                                        <p>{item.title}</p>
                                    </motion.div>
                                </>
                            )
                        })
                    }
                </motion.div>
                </Tooltip>
                {/* AWS icon */}
                <Tooltip placement="bottom" title="amazon web servies" color="geekblue">
                <motion.div className="bento-item flex flex-wrap gap-8"
                    initial={{y:-50,opacity:0}}
                    whileInView={{y:0,opacity:1}}
                    transition={{delay: 0.2,duration:2}}
                >
                    {
                        devops.map((item, i) => {
                            return (
                                <>
                                    <motion.div className='flex flex-col items-center gap-0  w-16 h-16 mx-auto'
                                    initial={{opacity:0}}
                                    whileInView={{opacity:1}}
                                    transition={{duration:2}}
                                    >
                                        <img src={item.imgUrl} alt={i} />
                                        <p>{item.title}</p>
                                    </motion.div>
                                </>
                            )
                        })
                    }
                </motion.div>
                </Tooltip>
                {/* <div className="bento-item border"></div> */}

            </div>
        </section>
    )
}

export default Technical