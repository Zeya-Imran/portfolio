import { Link } from 'react-router-dom'
import { Layout } from 'antd';
import { menu } from '../../../constants';
import { brandLogo } from '../../../utils';
import { GithubFilled, LinkedinFilled, TwitterCircleFilled } from '@ant-design/icons';
const { Header } = Layout;
const Navbar = ()=>{
 return(
    <Header className='text-[#848484] mb-10 z-50' style={{backgroundColor:'#2b2b38' }}>
        <div className='w-11/12 md:w-4/5 flex  mx-auto justify-between items-center'>
          <div className='flex items-center'>
            <Link to="/"><img src={brandLogo} alt="" width={72} height={72} className='-mt-1'/></Link>
            <div>
                {
                    menu.map((item,i)=>(
                        <Link to={item.url} className='heroButton'>{item.title}</Link>
                    ))
                }
            </div>
          </div>

          <div className='flex gap-5'>
                <Link to="https://www.linkedin.com/in/zeya-imran/"><LinkedinFilled className='text-zinc-500 icon-hover' style={{ fontSize: '24px' }} /></Link>
                <Link to="https://github.com/Zeya-Imran"><GithubFilled className='text-zinc-500 icon-hover' style={{ fontSize: '24px' }} /></Link>
                <Link to="https://www.linkedin.com/in/zeya-imran/"><TwitterCircleFilled className='text-zinc-500 icon-hover' style={{ fontSize: '24px' }} /></Link>
          </div>
        </div> 
    </Header>
 )   
}

export default Navbar;