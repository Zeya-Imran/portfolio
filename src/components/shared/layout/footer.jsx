import { MailOutlined } from '@ant-design/icons';

const Footer = ()=>{
    return(
  
        <footer className="footer p-5 bg-[#2b2b37] flex justify-between text-[#848484] text-xs mt-10 bottom-0">
            <div className='w-11/12 md:w-4/5 flex  mx-auto justify-between items-center'>
                <div>copyright © {new Date().getFullYear()}</div>
                <div className='flex justify-center items-center gap-2'><MailOutlined className='text-zinc-500 icon-hover' style={{ fontSize: '16px' }} />  <a href="mailto:admin@bslthemes.com">khanzeya63@gmail.com</a></div>
            </div>

           
        </footer> 

    )
}
export default Footer