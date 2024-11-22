"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { AiFillLock, AiOutlineLock, AiOutlineMail } from 'react-icons/ai'

const SingIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  return (
    <div>
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
        <h1 className='font-bold text-2xl'>Sing In</h1>

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

          <button className='w-full my-2 p-3 bg-button text-btnText rounded-xl shadow-xl'>Sign in</button>
        </form>

        <p className='text-center mt-3 '>Dont Have Account ? <Link className='font-bold text-accent' href="/pages/SingUp">Sing up!</Link></p>
      </div>
    </div>
  )
}

export default SingIn
