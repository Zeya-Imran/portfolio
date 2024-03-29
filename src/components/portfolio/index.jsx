import { projects } from '../../constants';
import LayoutSection from '../shared/layout'

const Portfolio = () => {
    return (

        <LayoutSection>
            <h1 className='text-[#1e1e24] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[70%] text-[15vw] montserrat-bold z-0'>Portfolio</h1>
            <section className='min-h-screen w-11/12 md:w-4/5 mx-auto flex flex-col gap-8 md:gap-10 z-20'>

                <h1 className='text-2xl md:text-4xl text-[#ddd] palanquin-semibold tracking-wide'>My Services</h1>

                <div className='flex justify-between'>
                    <div className="ex-box">
                        <h1>2 +</h1>
                        <p>Yeare Experience</p>
                    </div>
                    <div className="ex-box ">
                        <h1>100 + </h1>
                        <p>Completed Projects</p>
                    </div>
                    <div className="ex-box ">
                        <h1>104 </h1>
                        <p>Satisfied Customer</p>
                    </div>
                    <div className="ex-box ">
                        <h1>20 +</h1>
                        <p>Honors and Awards</p>
                    </div>
                </div>

             {/*   projects box  */ }
             <h1 className='text-2xl md:text-4xl text-[#ddd] palanquin-semibold tracking-wide'>Projects</h1>

                <div className='text-[#848484] grid md:grid-cols-3 grid-cols-1 gap-x-8'>
                    {
                        projects.map((item,i)=>{
                            return(
                                <div className='flex flex-col gap-5'>
                                    <div className='projects-box text-white border border-red-600' key={i}>
                                        <img src={item.imgUrl} alt={item.id}  />
                                    </div>
                                    <div className='mb-5 px-2'>
                                        <h1 className='text-[#848484] montserrat-medium text-2xl'>{item.title}</h1>
                                        <p className='text-[#ddd] palanquin-regular'>{item.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </section>
            
        </LayoutSection>

    )
}

export default Portfolio