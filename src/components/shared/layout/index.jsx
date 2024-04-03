import { Layout } from 'antd';
import  Footer   from './footer';
import Navbar from './navbar';
const { Content } = Layout;


const LayoutSection = ({children, header=true})=>{
    console.log(header);
    return(
        <Layout>
        <Content className="relative overflow-hidden bg-[rgb(0,0,0)] snap-mandatory snap-y"> 
            {header && <Navbar />}
                {children}
                {/* <h1 className='text-zinc-850 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[15vw] montserrat-bold'>Home</h1> */}
           {header && <Footer />}
           
        </Content>
    </Layout>  
    )
}

export default LayoutSection
