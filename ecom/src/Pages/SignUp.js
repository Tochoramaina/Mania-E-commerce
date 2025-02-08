import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import loginIcon from '../assest/signin.gif'
import {FaEye} from 'react-icons/fa'
import {FaEyeSlash} from 'react-icons/fa'
const SignUp = () => {
    const [showPassword, setShowpassword] = useState(false);
    const [showconfirmPassword, setShowconfirmPassword] = useState(false);
    const [data, setData] = useState({
      profilePic : '',
      name : '',
      email : '',
      password : '',
      confirmPassword : ''
    })
    const handleonChange = (e) => { 
      const {name, value} = e.target
      setData((prev) => {
        return{...prev, [name] : value}
    })
    }
    const handleSubmit = (e) => {
      e.preventDefault()
    }
  return (
    <section id='sign-up'>
       <div className='mx-auto container p-4'>
          <div className='bg-white p-5 w-full max-w-md mx-auto'>
            <div className='w-20 h-20 mx-auto relative rounded-full overflow-hidden'>
              <div>
                <img src={loginIcon} alt='login icon'/>
              </div>
              <form>
                <label>
                  <div className='text-xs bg-slate-200 text-center py-3 absolute bottom-0 w-full bg-opacity-85 cursor-pointer'>
                      Upload Photo
                  </div>
                  <input type='file' className='hidden'/>
                </label>
              </form>
            </div> 
            <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
            <div className='grid'>
                <label>Name:</label>
                <div className='bg-slate-100 p-2'>
                  <input 
                  type='text' placeholder='enter your name' 
                  className='w-full h-full  outline-none bg-transparent'
                  name='name'
                  value= {data.name}
                  onChange={handleonChange}
                  />
                </div>
              </div>
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
                </div>
                <div>
                 <label>Confirm Password:</label>
                <div className='bg-slate-100 p-2 flex'>
                  <input type={showconfirmPassword ? 'text' : 'password'}
                   placeholder='confirm password' 
                   className='w-full h-full outline-none bg-transparent'
                   name = 'confirmPassword'
                   value={data.confirmPassword}
                   onChange={handleonChange}
                   />
                  <div className='cursor-pointer text-xl' onClick={() => setShowconfirmPassword((prev) => !prev)}>
                    <span>
                      {showconfirmPassword ? (<FaEyeSlash/>) :
                      ( <FaEye/>)}  
                    </span>
                  </div>
                </div>

              </div>
              <button className='bg-red-500 px-6 py-1 w-full max-w-[150px] rounded-full text-white hover:scale-110 mx-auto block mt-5'>Sign up</button>
            </form>
            <p className='my-5'>Already have an account ? <Link to='/login' className='text-blue-500 hover:underline'>Login</Link></p>
          </div>
        
       </div>

    </section>
  )
}

export default SignUp