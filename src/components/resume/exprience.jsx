import { FaChalkboardUser } from "react-icons/fa6";
import { Divider } from 'antd';
import { experience } from "../../constants"
import TitleText from "./titletext"
const Exprience = ()=>{
    return(
        <section className="bento w-11/12 md:w-4/5 mx-auto flex flex-col gap-y-5 overflow-hidden text-white mt-5 md:mt-10">
            {/* heading text */}
           <TitleText title="About My Experience"/>
           <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {
                experience.map((item,i)=>(
                    <div className="flex flex-col gap-4 resume-ex-box">
                        <div className="flex justify-between ">{item.dates} <img src={item.imgUrl} alt={item.id}  width={80}/></div>
                        <Divider type="horzontal" style={{ borderColor: 'rgb(221 221 221 / 0.4)' }} />
                        <div className="text-justify"> <h1>{item.title} </h1> <p>{item.description}</p> </div>
                        <Divider type="horzontal" style={{ borderColor: 'rgb(221 221 221 / 0.4)' }} />
                        <div className="flex justify-between"><p className="flex items-center gap-2"><FaChalkboardUser style={{fontSize:'24px'}} /> role</p> <p>Team-collabrator</p></div>
                    </div>
                ))
            }
           </div>
        </section>
    )
}

export default Exprience