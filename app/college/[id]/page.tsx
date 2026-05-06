'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

interface College {
  id: number
  name: string
  location: string
  fees: number
  rating: number
  courses: string[]
  placement: number
  description: string
}

export default function CollegeDetail() {
  const { id } = useParams()
  const [college, setCollege] = useState<College | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/colleges/${id}`)
      .then(r => r.json())
      .then(data => { setCollege(data); setLoading(false) })
  }, [id])

  if (loading) return <div className="text-center py-20 text-gray-400">Loading...</div>
  if (!college) return <div className="text-center py-20 text-red-400">College not found</div>

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <a href="/" className="text-blue-600 hover:underline mb-4 inline-block">← Back to listing</a>
      <div className="bg-white rounded-xl shadow p-8">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-3xl font-bold text-gray-800">{college.name}</h1>
          <span className="bg-yellow-100 text-yellow-700 text-lg font-bold px-3 py-1 rounded-lg">⭐ {college.rating}</span>
        </div>
        <p className="text-gray-500 mb-6">{college.description}</p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-blue-700">₹{college.fees.toLocaleString()}</p>
            <p className="text-gray-500 text-sm">Annual Fees</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-green-700">{college.placement}%</p>
            <p className="text-gray-500 text-sm">Placement Rate</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-purple-700">📍</p>
            <p className="text-gray-500 text-sm">{college.location}</p>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-3">Courses Offered</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {college.courses.map(c => (
            <span key={c} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{c}</span>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-3">Placements</h2>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-green-500 h-4 rounded-full" style={{ width: `${college.placement}%` }}></div>
          </div>
          <p className="text-gray-600 mt-2">{college.placement}% of students placed within 3 months of graduation</p>
        </div>
      </div>
    </main>
  )
}