import { useState } from "react";
import { recommendations } from "../../constants"
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { fadeInAnimation } from '../../animations';
import { FaArrowTurnDown } from "react-icons/fa6";
const Recommendations = () => {

    const [currentIndex, setCurrentIndex] = useState(0);


    const totalWidth = recommendations.length * 50;
    const maxIndex = recommendations.length / 2 - 0;

    const next = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };


    return (
        <section className="flex flex-col gap-y-4 overflow-hidden snap-center">
            <div className='flex items-end gap-5'>
                <motion.h1 className='text-2xl md:text-4xl text-[#ddd] palanquin-semibold tracking-wide'
                    initial={{ x: -160, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, }}
                    viewport={{ once: true }}

                >Recommendations</motion.h1>
                <motion.div
                    initial={{ opacity: 0, x: -50, y: -8 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 2.5, }}
                    viewport={{ once: true }}
                >
                    <FaArrowTurnDown style={{ color: 'white', fontSize: '24px' }} />
                </motion.div>
            </div>
            <motion.div className="flex transition-transform duration-500 mt-4"
                initial="hidden"
                animate="visible"
                variants={fadeInAnimation}
                style={{
                    // width: `${totalWidth}%`, // Adjust based on the total number of items
                    width: `${window.innerWidth < 768 ? 100 * recommendations.length : totalWidth}%`,
                    transform: `translateX(-${currentIndex * 100 / recommendations.length}%)`, // Move the carousel
                }}
            >
                {
                    recommendations.map((items, index) => (
                        <div key={items.id} className="service-wraper mr-5 relative w-full md:w-auto">
                            <div className="relative">
                                <img src={items.imgUrl} alt=""
                                    width="100%" height="100%"
                                    className="re-avtar absolute top-[-50px] right-0 rounded-full w-[80px] h-[80px]"
                                />
                                <motion.h1
                                    initial={{ y: -40, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1.5, }}
                                    viewport={{ once: true }}
                                >
                                    {items.name}
                                </motion.h1>

                                <motion.h2
                                    initial={{ y: 30, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1.5, }}
                                    viewport={{ once: true }}
                                    className="re-post"
                                >
                                    {items.post}
                                </motion.h2>
                            </div>

                            <p>{items.para}</p>
                        </div>
                    ))
                }
            </motion.div>
            <motion.div className="flex text-white justify-between items-center  mx-[5px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, }}
                viewport={{ once: true }}
            >
                {/* dots */}
                <div className="flex items-center justify-center  gap-2">
                    {
                        recommendations.map((_, index) => (
                            <div key={index} className={`w-[10px] h-[10px] rounded-full bg-white flex gap-3
                                 ${currentIndex === index ?
                                    'bg-orange-500 w-[20px] transition-transform all 1s ease-in-out h-[10px] rounded-full'
                                    : 'bg-white'} transition-all duration-500 ease-in-out`}>
                            </div>
                        ))
                    }
                </div>
                <div className="mr-1 flex gap-2">
                    <button className="prev" onClick={prev} disabled={currentIndex <= 0}>
                        <LeftOutlined />
                    </button>
                    <button className="next" onClick={next} disabled={currentIndex >= maxIndex}>
                        <RightOutlined />
                    </button>
                </div>
            </motion.div>
        </section>
    )
}

export default Recommendations