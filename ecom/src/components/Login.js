import React, { useState } from 'react'
import loginIcon from '../assest/signin.gif'
import {FaEye} from 'react-icons/fa'
import {FaEyeSlash} from 'react-icons/fa'
import {Link} from "react-router-dom"
const Login = () => {
  const [showPassword, setShowpassword] = useState(false);
  return (
    <section id='login'>
       <div className='mx-auto container p-4'>
          <div className='bg-white p-4 w-full max-w-md mx-auto'>
            <div className='w-20 h-20 mx-auto'>
              <img src={loginIcon} alt='login icon'/>
            </div>
            <form>
              <div className='grid'>
                <label>Email:</label>
                <div className='bg-slate-100 p-2'>
                  <input type='email' placeholder='enter mail' className='w-full h-full  outline-none bg-transparent'/>
                </div>
              </div>
              <div>
                 <label>Password:</label>
                <div className='bg-slate-100 p-2 flex'>
                  <input type={showPassword ? 'text' : 'password'} placeholder='enter password' className='w-full h-full outline-none bg-transparent'/>
                  <div className='cursor-pointer text-xl' onClick={() => setShowpassword((prev) => !prev)}>
                    <span>
                      {showPassword ? (<FaEyeSlash/>) :
                      ( <FaEye/>)}  
                    </span>
                  </div>
                </div>
               <Link to={'/forgot password'} className='block ml-auto max-w-fit hover:underline hover:text-red-500 text-slate-600 mt-1'>
               Forgot password
               </Link>

              </div>
              <button className='bg-red-500 px-6 py-1 w-full max-w-[150px] rounded-full text-white hover:scale-110 mx-auto block mt-5'>Login</button>
            </form>
          </div>
        
       </div>

    </section>
  )
}

export default Login