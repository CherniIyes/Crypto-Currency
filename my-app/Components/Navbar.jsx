"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import { UserAuth } from "@context/AuthContext.jsx";
import { useRouter } from 'next/navigation'

const Navbar = () => {
      const [nav, setNav] = useState(false);
      // const { user, logout } = UserAuth();
      const router = useRouter();

      const handleNav = () => {
            setNav(!nav);
      };

      const handleSignOut = async () => {
            try {
                  await logout();
                  router.push('/')
            } catch (e) {
                  console.log(e.message);
            }
      };

      return (
            <div className='rounded-div flex items-center justify-between h-20 font-bold '>
                  <Link href="/">
                        <h1 className='text-2xl'>Flousy-Byc</h1>
                  </Link>



                  <div className='hidden md:block '>
                        <ThemeToggle />
                  </div>
                  {/* {user?.email ? (
                        <div>
                              <Link href='/account' className='p-4'>
                                    Account
                              </Link>
                              <button onClick={handleSignOut}>Sign out</button>
                        </div>
                  ) : (
                        <div className='hidden md:block'>
                              <Link href='/signin' className='p-4 hover:text-accent'>
                                    Sign In
                              </Link>
                              <Link
                                    to='/signup'
                                    className='bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl'
                              >
                                    Sign Up
                              </Link>
                        </div>
                  )} */}
                  <div className='hidden md:block'>
                        <Link href='/pages/SingIn' className='p-4 hover:text-accent'>
                              Sign In
                        </Link>
                        <Link
                              href='/pages/SingUp'
                              className='bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl'
                        >
                              Sign Up
                        </Link>
                  </div>




                  {/*  Mobile Menu */}
                  <div onClick={handleNav} className='block md:hidden cursor-pointer z-10'>
                        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                  </div>

                  <div
                        className={
                              nav
                                    ? 'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[93%] bg-primary ease-in duration-300 z-10'
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
                              <li className=' py-6'>
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