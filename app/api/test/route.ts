import { NextResponse } from "next/server"
import { db } from "@/app/lib/db"

export async function GET() {
  try {
    // Test database connection
    const userCount = await db.user.count()
    
    return NextResponse.json({
      message: "Database connection successful",
      userCount,
      environment: process.env.NODE_ENV,
      hasDatabaseUrl: !!process.env.DATABASE_URL,
    })
  } catch (error) {
    console.error("Test API error:", error)
    return NextResponse.json(
      { 
        error: "Database connection failed", 
        details: error instanceof Error ? error.message : "Unknown error",
        environment: process.env.NODE_ENV,
        hasDatabaseUrl: !!process.env.DATABASE_URL,
      },
      { status: 500 }
    )
  }
} 