import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {

const {cart} = useSelector((state) => state);

  return (
    <div className=''>
        <nav className='flex  justify-between items-center h-20 max-w-7xl mx-auto' >
            <NavLink to="/">
                <div className=''>
                <img src="https://www.logolynx.com/images/logolynx/56/56afea50b83164e3e272d4ebeccd94fb.png" alt="" className='h-[60px]'/>
                </div>
            </NavLink>
            <div className='flex items-center font-medium text-slate-100 space-x-8'>
                <NavLink to="/">
                <p>Home</p>
                </NavLink>
                <NavLink to="/cart">
                <div className='relative '>
                <FaShoppingCart className='text-2xl'/>
                { 
                cart.length>0 &&
                 <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5
                                    flex justify-center items-center animate-bounce rounded-full'>{cart.length}</span>

                }
                </div>
                </NavLink>

            </div>

        </nav>

    </div>
  )
}
