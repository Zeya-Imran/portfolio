import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { menu } from '../../../constants';
import { brandLogo } from '../../../utils';
import { GithubFilled, LinkedinFilled, TwitterCircleFilled, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { MdDownloadForOffline } from "react-icons/md";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className='text-[#848484] mb-10 z-50' style={{ backgroundColor: '#2b2b38' }}>
      {/* Desktop view */}
      <div className='hidden md:block'>
        <div className={`w-11/12 md:w-4/5 flex px-5 mx-auto justify-between items-center ${menuOpen ? 'hidden' : 'block'}`}>
          <div className='flex items-center'>
            <Link to="/"><img src={brandLogo} alt="" width={72} height={72} className='-mt-1' /></Link>
            <div>
              {menu.map((item, i) => (
                <Link key={i} to={item.url} className='heroButton'>{item.title}</Link>
              ))}
            </div>
          </div>
          <div className='flex gap-5 items-center justify-center'> 
            <Link to="https://www.linkedin.com/in/zeya-imran/"><LinkedinFilled className='text-zinc-500 icon-hover' style={{ fontSize: '24px' }} /></Link>
            <Link to="https://github.com/Zeya-Imran"><GithubFilled className='text-zinc-500 icon-hover' style={{ fontSize: '24px' }} /></Link>
            <Link to="https://www.linkedin.com/in/zeya-imran/"><TwitterCircleFilled className='text-zinc-500 icon-hover' style={{ fontSize: '24px' }} /></Link>

            <div className="text-[#848484] flex items-center gap-2 px-2 py-1 downButton">
                <MdDownloadForOffline className='text-zinc-500 icon-hover' style={{ fontSize: '24px' }} />resume
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center md:hidden'>
          <Link to="/"><img src={brandLogo} alt="" width={72} height={72} className={`-mt-1 ${menuOpen ? 'hidden' : 'block'}`} /></Link>
        </div>
        <div className={`w-11/12 md:w-4/5 mx-auto transition-all ease-in-out duration-500 ${menuOpen ? 'block' : 'hidden'}`}>
          <div className='flex flex-col text-center gap-5 py-8 justify-between items-center'>
            {/* Menu items */}
            <div className={`md:hidden flex flex-col  ${menuOpen ? 'block' : 'hidden'}`}>
              {menu.map((item, i) => (
                <Link key={i} to={item.url} className='heroButton'>{item.title}</Link>
              ))}
            </div>
            <div className='flex gap-5'>
              <Link to="https://www.linkedin.com/in/zeya-imran/"><LinkedinFilled className='text-zinc-500 icon-hover' style={{ fontSize: '24px' }} /></Link>
              <Link to="https://github.com/Zeya-Imran"><GithubFilled className='text-zinc-500 icon-hover' style={{ fontSize: '24px' }} /></Link>
              <Link to="https://www.linkedin.com/in/zeya-imran/"><TwitterCircleFilled className='text-zinc-500 icon-hover' style={{ fontSize: '24px' }} /></Link>
            </div>
          </div>

        </div>
        {/* Hamburger menu button */}
        <div className='mr-4 md:hidden'>
          <button onClick={toggleMenu}>
            <MenuOutlined className={`text-zinc-500 icon-hover ${menuOpen ? 'hidden' : 'block'}`} style={{ fontSize: '24px' }} />
            <CloseOutlined className={`text-zinc-500 icon-hover absolute top-5 right-5 ${menuOpen ? 'block' : 'hidden'}`} style={{ fontSize: '36px' }} />
          </button>
        </div>

      </div>

    </nav>
  )
}

export default Navbar;