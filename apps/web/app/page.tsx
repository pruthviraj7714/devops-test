"use client"

import Link from 'next/link'
import axios from 'axios';

export default function Home() {
    const handleAddUser = async () => {
        try {
          const res = await axios.post('/api/add-user', {});
            alert("User successfully added");
        } catch (error) {
          alert(error);
        }
    }
  
  return (
    <div className="h-screen flex flex-col items-center">
        <p className="text-center text-5xl text-pink-500 font-extrabold">This is test devops deployment project</p>
        <div className="flex justify-evenly gap-5 items-center">
          <button className="bg-red-400 text-white text-xl border px-6 py-1" onClick={handleAddUser}>
            Add users
          </button>
          <Link href="/users">
            <button>
              Show users
            </button>
          </Link>

        </div>
    </div>
    
  );
}
