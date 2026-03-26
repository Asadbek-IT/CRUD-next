"use client"
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([])
    
    const a1 = async () => {
        const responce = await axios.get(`http://localhost:5000/posts`)
        setPosts(responce.data)
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/posts/${id}`)        
        a1()
    }


    useEffect(() => {
        a1()
    }, [])
  return (
    <div className='min-h-screen bg-white text-black p-8'>
        <div className='flex justify-between items-center border-b-2 border-black pb-4 mb-8'>
            <h1 className='text-4xl font-black'>ToDo</h1>
            <Link href="/create" className='text-3xl hover:bg-black hover:text-white px-4 border-2 border-black transition-all'>+</Link>
        </div>
        <table className='w-full border-collapse'>
            <thead>
                <tr className='border-b-2 border-black text-left'>
                    <th className='py-2 px-4 text-sm'>ID</th>
                    <th className='py-2 px-4 text-sm'>Title</th>
                    <th className='py-2 px-4 text-sm text-right'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    posts?.map((post) => (
                        <tr key={post.id} className='border-b border-gray-200 hover:bg-gray-50 transition-colors'>
                            <td className='py-4 px-4'>{post.id}</td>
                            <td className='py-4 px-4'>{post.title}</td>
                            <td className='py-4 px-4 text-right space-x-4'>
                                <Link href={`/edit/${post.id}`}>
                                    <button className='border border-black px-3 py-1 hover:bg-black hover:text-white transition-all text-xs'>Edit</button>
                                </Link>
                                <button onClick={() => handleDelete(post.id)} className='bg-black text-white px-3 py-1 hover:bg-white hover:text-black border border-black transition-all text-xs '>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Posts