"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
      const [nav, setNav] = useState(false);

      const handleNav = () => {
            setNav(!nav);
      };

      return (
            <div className='rounded-div flex items-center justify-between h-20 font-bold'>
                  <Link href="/">
                        <h1 className='text-2xl'>Flousi-Byc</h1>
                  </Link>



                  <div className='hidden md:block '>
                        <ThemeToggle />
                  </div>
                  <div className='hidden md:block'>
                        <Link className='p-4 hover:text-accent' href="/pages/SingIn">
                              Sing In
                        </Link>
                        <Link className='bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl' href="/pages/SingUp">
                              Sing Up
                        </Link>
                  </div>



                  {/*  Mobile Menu */}
                  <div onClick={handleNav} className='block md:hidden cursor-pointer z-10'>
                        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                  </div>

                  <div
                        className={
                              nav
                                    ? 'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10'
                                    : 'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'
                        }
                  >
                        <ul className='w-full p-4'>
                              <li onClick={handleNav} className='border-b py-6'>
                                    <Link href="/">
                                          Home
                                    </Link>
                              </li>
                              <li onClick={handleNav} className='border-b py-6'>
                                    <Link href="/">
                                          Account
                                    </Link>
                              </li>
                              <li  className=' py-6'>
                                    <ThemeToggle />
                              </li>
                        </ul>
                        <div className='flex flex-col w-full p-4'>
                              <Link href="/pages/SingIn">
                                    <button className='w-full my-2 p-3 bg-primaryy text-primary border border-secondary rounded-2xl shadow-xl'> Sing In</button>
                              </Link>
                              <Link href="/pages/SingUp">
                                    <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'>Sing Up</button>
                              </Link>
                        </div>
                  </div>


            </div >
      )
}

export default Navbar