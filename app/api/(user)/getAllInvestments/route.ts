import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET() {
  try {
    const investments = await prisma.investmentPlan.findMany();
    console.log("Investments fetched successfully:", investments);
    return NextResponse.json(investments);
  } catch (error: any) {
    console.error("Error fetching investments:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
