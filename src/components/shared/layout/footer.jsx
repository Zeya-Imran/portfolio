import { fadeInAnimation } from '../../../animations'

const Footer = ()=>{
    return(
  
        <footer className="footer p-5 bg-[#2b2b37] flex justify-between text-[#848484] text-xs mt-10 bottom-0"
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
        >
            <div>copyright © {new Date().getFullYear()} All Rights Reserved.</div>
            <div>Email: <a href="mailto:admin@bslthemes.com">khanzeya63@gmail.com</a></div>
        </footer> 

    )
}
export default Footer