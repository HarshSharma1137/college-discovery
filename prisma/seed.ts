import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: ['error'],
})

async function main() {
  const colleges = [
    { name: "IIT Bombay", location: "Mumbai", fees: 250000, rating: 4.8, courses: ["B.Tech", "M.Tech", "MBA"], placement: 95, description: "Premier engineering institute in India." },
    { name: "IIT Delhi", location: "Delhi", fees: 230000, rating: 4.7, courses: ["B.Tech", "M.Tech"], placement: 93, description: "Top ranked technical university." },
    { name: "IIT Madras", location: "Chennai", fees: 220000, rating: 4.7, courses: ["B.Tech", "M.Tech", "PhD"], placement: 92, description: "Excellence in engineering and research." },
    { name: "NIT Trichy", location: "Trichy", fees: 150000, rating: 4.3, courses: ["B.Tech", "M.Tech"], placement: 85, description: "Top NIT with strong placements." },
    { name: "BITS Pilani", location: "Pilani", fees: 500000, rating: 4.5, courses: ["B.Tech", "MBA", "MSc"], placement: 90, description: "Deemed university known for tech education." },
    { name: "VIT Vellore", location: "Vellore", fees: 350000, rating: 4.0, courses: ["B.Tech", "MBA", "MCA"], placement: 80, description: "Private university with good industry ties." },
    { name: "Delhi University", location: "Delhi", fees: 50000, rating: 4.2, courses: ["BA", "BSc", "BCom", "MA"], placement: 70, description: "Central university with diverse programs." },
    { name: "Jadavpur University", location: "Kolkata", fees: 30000, rating: 4.4, courses: ["B.Tech", "BA", "BSc"], placement: 82, description: "Reputed state university in West Bengal." },
    { name: "Anna University", location: "Chennai", fees: 80000, rating: 4.1, courses: ["B.Tech", "ME", "MBA"], placement: 78, description: "Leading technical university in Tamil Nadu." },
    { name: "Pune University", location: "Pune", fees: 60000, rating: 3.9, courses: ["BA", "BSc", "B.Tech", "MBA"], placement: 72, description: "One of the oldest universities in Maharashtra." },
    { name: "IIM Ahmedabad", location: "Ahmedabad", fees: 2500000, rating: 4.9, courses: ["MBA", "PhD"], placement: 99, description: "India's top business school." },
    { name: "IIM Bangalore", location: "Bangalore", fees: 2400000, rating: 4.8, courses: ["MBA", "PGDM"], placement: 98, description: "Premier management institute." },
    { name: "SRM University", location: "Chennai", fees: 400000, rating: 3.8, courses: ["B.Tech", "MBA", "MCA"], placement: 75, description: "Large private university with multiple campuses." },
    { name: "Manipal University", location: "Manipal", fees: 450000, rating: 4.0, courses: ["MBBS", "B.Tech", "MBA"], placement: 77, description: "Known for medical and engineering programs." },
    { name: "Amity University", location: "Noida", fees: 300000, rating: 3.7, courses: ["B.Tech", "MBA", "BA", "BSc"], placement: 70, description: "Private university with wide course offerings." },
  ]

  for (const college of colleges) {
    await prisma.college.create({ data: college })
  }

  console.log('✅ Seeded 15 colleges!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())