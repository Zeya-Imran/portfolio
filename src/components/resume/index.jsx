import LayoutSection from "../shared/layout"
import * as Images from '../../utils';
const Resume = ()=>{
    return(
        <LayoutSection>
            <h1 className='text-[#1e1e38] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[70%] text-[15vw] montserrat-bold z-0'>Resume</h1>
            <section className="h-screen bg-[#1e1e38] resume">
                <img src={Images.Visualstudio} alt="" />
            </section>
        </LayoutSection>
    )
}

export default Resume