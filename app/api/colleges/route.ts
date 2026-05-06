import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const search = searchParams.get('search') || ''
    const location = searchParams.get('location') || ''
    const course = searchParams.get('course') || ''
    const maxFees = searchParams.get('maxFees')

    const colleges = await prisma.college.findMany({
      where: {
        name: { contains: search, mode: 'insensitive' },
        ...(location && { location: { contains: location, mode: 'insensitive' } }),
        ...(course && { courses: { has: course } }),
        ...(maxFees && { fees: { lte: parseInt(maxFees) } }),
      },
      orderBy: { rating: 'desc' },
    })

    return NextResponse.json(colleges)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch colleges' }, { status: 500 })
  }
}