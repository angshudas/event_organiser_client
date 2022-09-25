import React,{useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.jpg';
import Menu from '../images/menu.svg';
import close from '../images/close.svg';

function Navbar() {
  const [menu, setMenu] = useState(false); 
  const [user, setUser] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  const handleLogout = ()=>{
    localStorage.removeItem('refreshToken');
    sessionStorage.removeItem('eventUser');
    setUser(null);
    setRefreshToken(null);
  }

  console.log(user);

  useEffect(()=>{
    setRefreshToken(localStorage.refreshToken);
    let myuser = sessionStorage.eventUser;
    if(myuser)
      setUser(JSON.parse(myuser));
    console.log(myuser,refreshToken);
  },[sessionStorage.eventUser]);

  return (
    <nav className='flex bg-black text-yellow-600 gap-2 px-2 py-1 lap:px-8 z-30'>
      <img src={Menu} alt="menu" className='w-8 lap:hidden tab:w-14' 
        onClick={()=>setMenu(true)}
      />
      <div className='flex items-center gap-3 flex-grow  justify-center lap:flex-grow-0'>
        <img src={logo} alt="logo" className='w-12 aspect-square rounded-full py-1 object-cover object-center tab:w-24 lap:w-12' />
        <h1 className='text-lg font-semibold tab:text-4xl lap:text-lg'>Royal Organisers</h1>
      </div>    

      <div className={`${menu?'flex show':'hidden'}  fixed inset-0 bg-black bg-opacity-90 justify-center items-center flex-col gap-14 text-2xl
      lap:flex lap:static lap:flex-row lap:flex-grow lap:text-lg lap:bg-inherit z-30 tab:gap-28`}>
        <img src={close} alt="close" className='absolute top-3 right-3 w-8 hover:scale-105 lap:hidden tab:w-14' 
          onClick={()=>setMenu(false)}
        />
        <div className='flex flex-col items-center gap-4 lap:flex-row  lap:flex-grow lap:justify-center tab:text-5xl tab:gap-10 lap:text-xl lap:gap-3'
          onClick={()=>setMenu(false)}
        >
          <a href="#home" className='hover:text-yellow-400 hover:scale-105'>Home</a>
          <a href="#Gallery" className='hover:text-yellow-400 hover:scale-105'>Gallery</a>
          <a href="#Contact" className='hover:text-yellow-400 hover:scale-105'>Contact</a>
        </div>
        <div className='flex gap-2 tab:text-5xl tab:gap-7 lap:text-xl'
          onClick={()=>setMenu(false)}
        >
          {
            user===null ?
            <>
              <NavLink to={'login'} className='hover:text-yellow-400 hover:scale-105'>Login</NavLink>
              <NavLink to={'register'} className='hover:text-yellow-400 hover:scale-105'>Register</NavLink>
            </>
            :
            <>
            <p className='text-green-500 flex'>* {user?.username}</p>
            <button onClick={handleLogout} className='hover:text-yellow-400 hover:scale-105'>Logout</button>
            </>

          }
        </div>
      </div>  
    </nav>
  )
}

export default Navbar