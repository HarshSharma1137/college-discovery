'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async () => {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    if (res.ok) router.push('/login')
    else { const d = await res.json(); setError(d.error) }
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Register</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input className="w-full border rounded-lg px-4 py-3 mb-4" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="w-full border rounded-lg px-4 py-3 mb-6" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleSubmit} className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 font-semibold">Register</button>
        <p className="text-center mt-4 text-gray-500">Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a></p>
      </div>
    </main>
  )
}