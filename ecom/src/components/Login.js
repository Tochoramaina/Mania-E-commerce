import React, { useState } from 'react'
import loginIcon from '../assest/signin.gif'
import {FaEye} from 'react-icons/fa'
import {FaEyeSlash} from 'react-icons/fa'
import {Link} from "react-router-dom"
const Login = () => {
  const [showPassword, setShowpassword] = useState(false);
  const [data, setData] = useState({
    email : '',
    password : ''
  })
  const handleonChange = (e) => { 
    const {name, value} = e.target;
    setData((prev) => {
      return{...prev, [name] : value}
  })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section id='login'>
       <div className='mx-auto container p-4'>
          <div className='bg-white p-5 w-full max-w-md mx-auto'>
            <div className='w-20 h-20 mx-auto'>
              <img src={loginIcon} alt='login icon'/>
            </div> 
            <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
              <div className='grid'>
                <label>Email:</label>
                <div className='bg-slate-100 p-2'>
                  <input 
                  type='email' placeholder='enter mail' 
                  className='w-full h-full  outline-none bg-transparent'
                  name='email'
                  value= {data.email}
                  onChange={handleonChange}
                  />
                </div>
              </div>
              <div>
                 <label>Password:</label>
                <div className='bg-slate-100 p-2 flex'>
                  <input type={showPassword ? 'text' : 'password'}
                   placeholder='enter password' 
                   className='w-full h-full outline-none bg-transparent'
                   name = 'password'
                   value={data.password}
                   onChange={handleonChange}
                   />
                  <div className='cursor-pointer text-xl' onClick={() => setShowpassword((prev) => !prev)}>
                    <span>
                      {showPassword ? (<FaEyeSlash/>) :
                      ( <FaEye/>)}  
                    </span>
                  </div>
                </div>
               <Link to={'/forgot-password'} className='block ml-auto max-w-fit hover:underline hover:text-red-500 text-slate-600 mt-1'>
               Forgot password ?
               </Link>

              </div>
              <button className='bg-red-500 px-6 py-1 w-full max-w-[150px] rounded-full text-white hover:scale-110 mx-auto block mt-5'>Login</button>
            </form>
            <p className='my-5'>Don't have account ? <Link to='/sign-up' className='text-blue-500 hover:underline'>Sign up</Link></p>
          </div>
        
       </div>

    </section>
  )
}

export default Login