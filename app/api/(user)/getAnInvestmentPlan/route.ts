// app/api/investment-plan/route.ts
import { NextResponse } from "next/server";
import { PrismaClient, InvestmentPlanName } from "@prisma/client";

import { prisma } from "@/lib/db/prisma";
export async function GET(req: Request) {
  const url = new URL(req.url);
  const name = url.searchParams.get("name") as InvestmentPlanName | null;

  console.log("Received request to fetch investment plan:", name);

  if (!name || !Object.values(InvestmentPlanName).includes(name)) {
    console.error("Invalid or no name provided in query params");
    return NextResponse.json(
      { error: "Invalid or no name provided" },
      { status: 400 }
    );
  }

  try {
    const investmentPlan = await prisma.investmentPlan.findUnique({
      where: { name },
    });

    if (!investmentPlan) {
      console.log("Investment plan not found:", name);
      return NextResponse.json(
        { error: "Investment plan not found" },
        { status: 404 }
      );
    }

    console.log("Investment plan found:", investmentPlan);
    return NextResponse.json(investmentPlan);
  } catch (error: any) {
    console.error("Error fetching investment plan:", error);
    return NextResponse.json(
      { error: error.message || "An error occurred" },
      { status: 500 }
    );
  }
}
