import React,{useRef} from 'react';
import axios from 'axios';
import baseUrl from './baseUrl';
import { useNavigate } from 'react-router-dom';

function Login() {

  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();
  
  const handleSubmit = async ()=>{
    let email = emailRef.current.value;
    let password = passRef.current.value;

    try {
      let res = await axios.post(`${baseUrl}/login`,{email,password});
      localStorage.setItem('refreshToken',res.data.refreshToken);
      sessionStorage.setItem('eventUser',JSON.stringify(res.data));
      console.log(res.data);
      navigate('/');
    } catch (err) {
      handleClear();
      
    }
    
  }

  const handleClear = ()=>{
    emailRef.current.value = "";
    passRef.current.value = "";
    // console.log('cleared');
  }

  return (
    <div className='bg-black fixed inset-0 flex justify-center items-center px-3'>
      <div className='flex flex-col w-full gap-3 text-yellow-600 text-xl tab:w-3/4 tab:text-4xl tab:gap-5 lap:w-1/2 lap:text-xl'>
        <h1 className='text-4xl text-center font-serif tab:text-6xl lap:text-4xl'>Login</h1>
        <input ref={emailRef} type="text" placeholder='Email' className='bg-slate-600 px-2 py-1.5 rounded-md placeholder:text-white tab:py-2.5' />
        <input ref={passRef} type="password" placeholder='Password' className='bg-slate-600 px-2 py-1.5 rounded-md placeholder:text-white tab:py-2.5' />

        <div className='flex gap-2 w-full text-xl tab:text-4xl tab:gap-3.5 lap:text-2xl'>
        <button className='w-1/2 bg-yellow-600 text-white rounded-md py-1.5 font-semibold lap:py-1'
          onClick={handleSubmit}>Submit</button>
        <button className='w-1/2 bg-yellow-600 text-white rounded-md py-1.5 font-semibold lap:py-1'
          onClick={handleClear}>Clear</button>
        </div>
      </div>
    </div>
  )
}

export default Login