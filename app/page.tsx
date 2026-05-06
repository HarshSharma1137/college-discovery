'use client'
import { useEffect, useState } from 'react'

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

export default function Home() {
  const [colleges, setColleges] = useState<College[]>([])
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('')
  const [maxFees, setMaxFees] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchColleges = async () => {
    setLoading(true)
    const params = new URLSearchParams()
    if (search) params.append('search', search)
    if (location) params.append('location', location)
    if (maxFees) params.append('maxFees', maxFees)
    const res = await fetch('/api/colleges?' + params.toString())
    const data = await res.json()
    setColleges(data)
    setLoading(false)
  }

  useEffect(() => { fetchColleges() }, [])

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Find Your Dream College</h1>
      <p className="text-gray-500 mb-6">Search and compare top colleges across India</p>
      <div className="bg-white p-4 rounded-xl shadow mb-6 flex flex-wrap gap-3">
        <input className="border rounded-lg px-4 py-2 flex-1 min-w-[200px]" placeholder="Search college name..." value={search} onChange={e => setSearch(e.target.value)} />
        <input className="border rounded-lg px-4 py-2 flex-1 min-w-[150px]" placeholder="Location..." value={location} onChange={e => setLocation(e.target.value)} />
        <select className="border rounded-lg px-4 py-2 flex-1 min-w-[150px]" value={maxFees} onChange={e => setMaxFees(e.target.value)}>
          <option value="">All Fees</option>
          <option value="100000">Under 1L</option>
          <option value="500000">Under 5L</option>
          <option value="1000000">Under 10L</option>
          <option value="3000000">Under 30L</option>
        </select>
        <button onClick={fetchColleges} className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800">Search</button>
      </div>
      {loading ? (
        <div className="text-center py-20 text-gray-400 text-xl">Loading colleges...</div>
      ) : colleges.length === 0 ? (
        <div className="text-center py-20 text-gray-400 text-xl">No colleges found</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colleges.map(college => (
            <div key={college.id} className="bg-white rounded-xl shadow hover:shadow-lg transition p-5">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-lg font-bold text-gray-800">{college.name}</h2>
                <span className="bg-yellow-100 text-yellow-700 text-sm font-semibold px-2 py-1 rounded">
                  {college.rating}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-1">{college.location}</p>
              <p className="text-gray-500 text-sm mb-1">Rs {college.fees.toLocaleString()}/year</p>
              <p className="text-gray-500 text-sm mb-3">Placement: {college.placement}%</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {college.courses.slice(0, 3).map(c => (
                  <span key={c} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">{c}</span>
                ))}
              </div>
              <a href={'/college/' + college.id} className="block text-center bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 text-sm">
                View Details
              </a>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}