// app/api/generate-products/route.ts

import { NextResponse } from "next/server";
import { getUserAuth } from "@/lib/auth/utils";
import { createInvestmentPlans } from "./generateInvestmentPlans";
import { createMultipleTransactionHistories } from "./generateFakeTransactionhISTORY";
import { generateUsersAndInvestments } from "./generateUser";
import { generateVIP1InvestmentPlan } from "./generatesur";
import { createRandomInvestmentsForUser } from "./generateInvestmentsForUser";

interface Params {
  userId: string;
}

export async function GET(request: Request) {
  // const { session } = await getUserAuth();

  // if (!session) {
  //   return NextResponse.json(
  //     { error: "User ID is required." },
  //     { status: 400 }
  //   );
  // }

  try {
    // await createInvestmentPlans();
    await createRandomInvestmentsForUser();
    return NextResponse.json({
      message: "Random products generated successfully.",
    });
  } catch (error) {
    console.error("Error generating random products:", error);
    return NextResponse.json(
      { error: "An error occurred while generating random products." },
      { status: 500 }
    );
  }
}
export const revalidate = 0;
