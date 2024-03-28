import * as Images from '../../utils'
import { motion } from 'framer-motion'
const HeroBg = ()=>{
     const icons = [
    {
      name: Images.HTMLImg,
      top: "5%",
      left: "5%",
      right: "",
      bottom: ""
    },
    {
      name: Images.CSSImg,
      top: "5%",
      left: "",
      right: "30%",
      bottom: ""
    },
    {
      name: Images.JSImg,
      top: "50%",
      left: "20%",
      right: "",
      bottom: ""
    },
    {
      name: Images.BootstrapImg,
      top: "10%",
      left: "25%",
      right: "",
      bottom: ""
    },
    {
      name: Images.AWSImg,
      top: "80%",
      left: "17%",
      right: "",
      bottom: ""
    },
    {
      name: Images.BitbucketImg,
      top: "85%",
      left: "2%",
      right: "",
      bottom: ""
    },
    {
      name: Images.DockerImg,
      top: "25%",
      left: "12%",
      right: "",
      bottom: ""
    },
    {
      name: Images.ExpressImg,
      top: "55%",
      left: "8%",
      right: "",
      bottom: ""
    },
    {
      name: Images.GitImg,
      top: "45%",
      left: "1%",
      right: "",
      bottom: ""
    },
    {
      name: Images.GithubImg,
      top: "70%",
      left: "",
      right: "10%",
      bottom: ""
    },
    {
      name: Images.HTTPImg,
      top: "90%",
      left: "",
      right: "1%",
      bottom: ""
    },
    {
      name: Images.MongoDBImg,
      top: "25%",
      left: "",
      right: "10%",
      bottom: ""
    },
    {
      name: Images.MySQLImg,
      top: "60%",
      left: "76%",
      right: "",
      bottom: ""
    },
    {
      name: Images.NextJSImg,
      top: "2%",
      left: "",
      right: "2%",
      bottom: ""
    },
    {
      name: Images.JavascriptImg,
      top: "30%",
      left: "",
      right: "23%",
      bottom: ""
    },
    {
      name: Images.PHPImg,
      top: "90%",
      left: "65%",
      right: "",
      bottom: ""
    },
    {
      name: Images.ReactImg,
      top: "2%",
      left: "",
      right: "50%",
      bottom: ""
    },
    {
      name: Images.TailwindImg,
      top: "50%",
      left: "",
      right: "2%",
      bottom: ""
    }
  ];


   


    return(
      <motion.div className='-z-1'>
      {icons.map((items, i) => (
        <motion.div 
        initial={{opacity:0, x:-100}}
        transition={{duration:1.8, staggerChildren: 0.5}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}

          className='icon' 
          key={i} 
          style={{ 
            position: 'absolute', 
            top: items.top, 
            left: items.left, 
            right: items.right, 
            bottom: items.bottom 
          }}
        >
          <img src={items.name} alt="" />
        </motion.div>
      ))}
    </motion.div>
    )
}

export default HeroBg

