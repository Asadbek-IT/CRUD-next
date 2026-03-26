"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Link from 'next/link'

const Craete = () => {
    const [title, setTitle] = useState("")
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`http://localhost:5000/posts`, {title})
        router.push("/")
    }

  return (
    <div className='h-screen bg-white text-black p-8 m-auto'>
      <h1 className='text-xl mb-6'>Create new ToDo</h1>
      
      <form onSubmit={handleSubmit} className='flex flex-col gap-6 w-sm'>
        <input 
            type="text" 
            placeholder='Type your ToDo...' 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            className='border-b border-black focus:outline-none placeholder:text-gray-300'
        />
        
        <div className='flex items-center gap-6'>
            <button className='border border-black px-6 py-1 hover:bg-black hover:text-white transition-colors text-sm'>
                Create
            </button>
            
            <Link 
                href="/" 
                className='text-gray-400 hover:text-black transition-colors text-sm'
            >
                Back
            </Link>
        </div>
      </form>
    </div>
  )
}

export default Craete