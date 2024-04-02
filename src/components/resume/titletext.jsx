import { motion } from "framer-motion"
import { FaArrowTurnDown } from "react-icons/fa6";

const TitleText = ({title})=>{
    return(
        <div className='flex items-end gap-5 justify-center mb-5 text-[#ddd]/80 hover:text-[#ffc107]/80 transition-all 1s ease-linear'>
        <motion.div
            initial={{ opacity: 0, x: 30, y: -12 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.5, }}
            viewport={{ once: true }}
        >
            <FaArrowTurnDown style={{ fontSize: '24px' }} className='-scale-x-100 translate-y-2' />
        </motion.div>


        <motion.h1 className='text-2xl md:text-4xl palanquin-semibold tracking-wide'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, }}
            viewport={{ once: true }}

        >{title}</motion.h1>
      
        <motion.div
            initial={{ opacity: 0, x: -30, y: -12 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.5, }}
            viewport={{ once: true }}
        >
            <FaArrowTurnDown style={{ fontSize: '24px' }} className='translate-y-2' />
        </motion.div>
    </div>
    )
}

export default TitleText