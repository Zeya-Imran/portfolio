import { Layout } from 'antd';
import { Link } from 'react-router-dom'
import  Footer   from './footer';
const { Content,Header } = Layout;


const LayoutSection = ({children, header=true})=>{
    console.log(header);
    return(
        <Layout>
        <Content className="relative overflow-hidden bg-[rgb(0,0,0)] snap-mandatory snap-y"> 
            {header && <Header className='text-[#848484] mb-10 z-50' style={{backgroundColor:'#2b2b38' }}><Link to="/">Home</Link> </Header>}
                {children}
                {/* <h1 className='text-zinc-850 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[15vw] montserrat-bold'>Home</h1> */}
           {header && <Footer />}
           
        </Content>
    </Layout>  
    )
}

export default LayoutSection
