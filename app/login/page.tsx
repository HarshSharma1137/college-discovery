'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async () => {
    const res = await signIn('credentials', { email, password, redirect: false })
    if (res?.error) setError('Invalid email or password')
    else router.push('/')
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input className="w-full border rounded-lg px-4 py-3 mb-4" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="w-full border rounded-lg px-4 py-3 mb-6" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleSubmit} className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 font-semibold">Login</button>
        <p className="text-center mt-4 text-gray-500">Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register</a></p>
      </div>
    </main>
  )
}