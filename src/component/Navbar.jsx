import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.jpg';
import Menu from '../images/menu.svg';
import close from '../images/close.svg';

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className='flex bg-gray-800 text-yellow-600 gap-2 px-2 py-1 lap:px-8 z-30'>
      <img src={Menu} alt="menu" className='w-8 lap:hidden' 
        onClick={()=>setMenu(true)}
      />
      <div className='flex items-center gap-3 flex-grow  justify-center lap:flex-grow-0'>
        <img src={logo} alt="logo" className='w-12 aspect-square rounded-full py-1 object-cover object-center ' />
        <h1 className='text-lg font-semibold'>Royal Organisers</h1>
      </div>    

      <div className={`${menu?'flex show':'hidden'}  fixed inset-0 bg-black bg-opacity-90 justify-center items-center flex-col gap-14 text-2xl
      lap:flex lap:static lap:flex-row lap:flex-grow lap:text-lg lap:bg-inherit z-30`}>
        <img src={close} alt="close" className='absolute top-3 right-3 w-8 hover:scale-105 lap:hidden' 
          onClick={()=>setMenu(false)}
        />
        <div className='flex flex-col items-center gap-4 lap:flex-row  lap:flex-grow lap:justify-center'
          onClick={()=>setMenu(false)}
        >
          <NavLink className='hover:text-yellow-400 hover:scale-105'>Home</NavLink>
          <NavLink className='hover:text-yellow-400 hover:scale-105'>About</NavLink>
          <NavLink className='hover:text-yellow-400 hover:scale-105'>Contact</NavLink>
        </div>
        <div className='flex gap-2'
          onClick={()=>setMenu(false)}
        >
          <NavLink className='hover:text-yellow-400 hover:scale-105'>Login</NavLink>
          <NavLink className='hover:text-yellow-400 hover:scale-105'>Register</NavLink>
          <NavLink className='hover:text-yellow-400 hover:scale-105'>Logout</NavLink>
        </div>
      </div>  
    </nav>
  )
}

export default Navbar