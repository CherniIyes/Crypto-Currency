"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { AiFillLock, AiOutlineLock, AiOutlineMail } from 'react-icons/ai'
// import { UserAuth } from "@context/AuthContext.jsx";
import Link from 'next/link';
const SingUp = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');

      // const signup = UserAuth();
      const router = useRouter();
      // const handleSubmit = async (e) => {
      //       e.preventDefault()
      //       setError('')
      //       try {
      //             await signup(email, password)
      //             router.push('/pages/Account')
      //       } catch (e) {
      //             setError(e.message)
      //             console.log(e.message)
      //       }
      // }

      return (
            <div>
                  <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
                        <h1 className='font-bold text-2xl'>Sing Up</h1>
                        {error ? <p className='bg-red-300 p-3 my-2'>{error}</p> : null}
                        <form >
                              <div className='my-4'>
                                    <label className='font-bold'>Email</label>

                                    <div className='my-2 w-full relative rounded-xl shadow-xl'>
                                          <input className='w-full rounded-xl p-2 pr-7 border border-input bg-primary' type='email' onChange={(e) => setEmail(e.target.value)} />
                                          <AiOutlineMail className='absolute right-2 top-3 text-gray-400' />
                                    </div>

                              </div>

                              <div className='my-4'>
                                    <label className='font-bold'>Password</label>

                                    <div className='my-2 w-full relative rounded-xl shadow-xl'>
                                          <input className='w-full p-2 pr-7 bg-primary border border-input rounded-xl' type='password' onChange={(e) => setPassword(e.target.value)} />
                                          <AiFillLock className='absolute right-2 top-3 text-gray-400' />
                                    </div>

                              </div>

                              <button className='w-full my-2 p-3 bg-button text-btnText rounded-xl shadow-xl' 
                              // onClick={handleSubmit}
                              >Sing up</button>
                        </form>
                        <p className='text-center mt-3'>Already Have Account ? <Link className='font-bold text-accent' href="/pages/SingIn">
                              Sing in!
                        </Link></p>

                  </div>
            </div>
      )
}

export default SingUp
