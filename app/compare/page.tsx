'use client'
import { useEffect, useState } from 'react'

interface College {
  id: number
  name: string
  location: string
  fees: number
  rating: number
  placement: number
  courses: string[]
}

export default function Compare() {
  const [allColleges, setAllColleges] = useState<College[]>([])
  const [selected, setSelected] = useState<number[]>([])
  const [compared, setCompared] = useState<College[]>([])

  useEffect(() => {
    fetch('/api/colleges').then(r => r.json()).then(setAllColleges)
  }, [])

  const handleCompare = async () => {
    if (selected.length < 2) return alert('Select at least 2 colleges')
    const res = await fetch(`/api/colleges/compare?ids=${selected.join(',')}`)
    const data = await res.json()
    setCompared(data)
  }

  const toggleSelect = (id: number) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : prev.length < 3 ? [...prev, id] : prev
    )
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Compare Colleges</h1>
      <p className="text-gray-500 mb-6">Select 2-3 colleges to compare side by side</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
        {allColleges.map(c => (
          <div
            key={c.id}
            onClick={() => toggleSelect(c.id)}
            className={`p-3 rounded-lg border-2 cursor-pointer transition ${
              selected.includes(c.id) ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white hover:border-blue-300'
            }`}
          >
            <p className="font-semibold text-sm">{c.name}</p>
            <p className="text-gray-400 text-xs">{c.location}</p>
          </div>
        ))}
      </div>

      <button
        onClick={handleCompare}
        className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 mb-8 font-semibold"
      >
        Compare ({selected.length} selected)
      </button>

      {compared.length > 0 && (
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="p-4 text-left">Feature</th>
                {compared.map(c => <th key={c.id} className="p-4 text-left">{c.name}</th>)}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-semibold">📍 Location</td>
                {compared.map(c => <td key={c.id} className="p-4">{c.location}</td>)}
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold">💰 Annual Fees</td>
                {compared.map(c => <td key={c.id} className="p-4">₹{c.fees.toLocaleString()}</td>)}
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">⭐ Rating</td>
                {compared.map(c => <td key={c.id} className="p-4">{c.rating}/5</td>)}
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold">🎯 Placement</td>
                {compared.map(c => <td key={c.id} className="p-4">{c.placement}%</td>)}
              </tr>
              <tr>
                <td className="p-4 font-semibold">📚 Courses</td>
                {compared.map(c => <td key={c.id} className="p-4">{c.courses.join(', ')}</td>)}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </main>
  )
}