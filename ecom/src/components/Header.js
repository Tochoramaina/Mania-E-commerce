import React from 'react'
import Logo from './Logo'
import {CiSearch} from "react-icons/ci";
import {FaCartShopping} from 'react-icons/fa6';
import {FaCircleUser} from 'react-icons/fa6';
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className='h-20 shadow-md bg-white'>
        <div className='container mx-auto h-full flex items-center px-3 justify-between'>
        <div className="">
            <Link to={'/'}>
              <Logo w={90} h={50}/>
            </Link>
        </div>
        <div className='hidden lg:flex items-center w-full max-w-sm border rounded-full focus:shadow-md pl-1 '>
            <input type='text' placeholder='search product here...' className='w-full outline-none text-slate-700'/>
            <div className="bg-red-600 text-white rounded-r-full text-lg min-w-[50px] flex items-center justify-content h-8"><CiSearch/></div>
        </div>
       <div className='flex gap-7 items-center'>
            <div className='text-2xl cursor-pointer text-slate-600'>
                <FaCircleUser/>
            </div>
            <div className='text-2xl text-slate-600 relative'>
                <span><FaCartShopping/></span>
               <div className='bg-red-500 text-white w-4 h-4 flex justify-center items-center rounded-full absolute -top-2 left-5'>
                  <p className='text-sm'>0</p>
               </div>
            </div>
          <Link to ={'/login'}  className='px-3 py-1 bg-red-500 text-white rounded-full hover:opacity-90'>Login
          </Link>
       </div>

    </div>
    </header>
  )
}
 
export default Header