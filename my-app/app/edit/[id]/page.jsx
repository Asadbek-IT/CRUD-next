"use client"
import axios from 'axios'
import { useRouter, useParams } from 'next/navigation'
import React, { useState, useEffect } from 'react'

const Edit = () => {
    const [title, setTitle] = useState("")
    const router = useRouter()
    const { id } = useParams()

    useEffect(() => {
        const loadPost = async () => {
            const res = await axios.get(`http://localhost:5000/posts/${id}`)
            setTitle(res.data.title)
        }
        if (id) loadPost()
    }, [id])

    const handleUpdate = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:5000/posts/${id}`, { title })
        router.push("/")
    }

    const handleCancel = () => {
        router.push("/")
    }

    return (
        <div className="h-screen bg-white text-black p-8 m-auto">
            <h1 className="text-xl mb-6">Edit ToDo</h1>
            
            <form onSubmit={handleUpdate} className="flex flex-col gap-4 w-sm">
                <input 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="Update task..."
                    className="border-b border-black py-1 focus:outline-none placeholder:text-gray-300"
                />
                
                <div className="flex gap-4 mt-2">
                    <button 
                        type="submit" 
                        className="border border-black px-4 py-1 hover:bg-black hover:text-white transition-colors text-sm"
                    >
                        Save
                    </button>
                    
                    <button 
                        type="button"
                        onClick={handleCancel} 
                        className="text-gray-400 hover:text-black transition-colors text-sm "
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Edit