import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'College Discovery',
  description: 'Find your perfect college',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center shadow">
          <a href="/" className="text-xl font-bold">🎓 CollegeDiscover</a>
          <div className="flex gap-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/compare" className="hover:underline">Compare</a>
            <a href="/saved" className="hover:underline">Saved</a>
            <a href="/login" className="hover:underline">Login</a>
            <a href="/register" className="bg-white text-blue-700 px-3 py-1 rounded font-semibold hover:bg-blue-50">Register</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}