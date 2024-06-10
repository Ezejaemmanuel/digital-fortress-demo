import {
  InvestmentPlanName,
  InvestmentStatusEnum,
  PrismaClient,
  Wallets,
} from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { getUserAuth } from "@/lib/auth/utils";
import { InvestmentNameEnum } from "@/lib/db/schema/schema";

export interface CreateInvestmentData {
  userName: string;
  userEmail: string;
  transactionId: string;
  investmentPlanName: InvestmentNameEnum;
  amount: number;
  imageUrl: string;
  imageId: string;
  crypto: Wallets;
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    console.log("Received request body:", req.body);

    const {
      userName,
      userEmail,
      transactionId,
      investmentPlanName,
      amount,
      imageUrl,
      imageId,
      crypto,
    }: CreateInvestmentData = await req.json();

    if (!crypto || !Object.values(Wallets).includes(crypto)) {
      console.error("Invalid or no name provided in query params");
      return NextResponse.json(
        { error: "Invalid or no name provided" },
        { status: 400 }
      );
    }

    if (
      !investmentPlanName ||
      !Object.values(InvestmentPlanName).includes(investmentPlanName)
    ) {
      console.error("Invalid or no name provided in query params");
      return NextResponse.json(
        { error: "Invalid or no name provided" },
        { status: 400 }
      );
    }

    // Validate required fields
    if (
      !userName ||
      !userEmail ||
      !transactionId ||
      !investmentPlanName ||
      !amount ||
      !imageUrl ||
      !imageId ||
      !crypto
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const { session } = await getUserAuth();
    const userId = session?.user.id;
    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const investmentPlan = await prisma.investmentPlan.findUnique({
      where: { name: investmentPlanName },
    });

    if (!investmentPlan) {
      throw new Error(`Investment plan ${investmentPlanName} not found`);
    }

    const investment = await prisma.investment.create({
      data: {
        userId: userId,
        transactionId,
        name: userName,
        email: userEmail,
        walletPaidInto: crypto,
        status: {
          create: {
            status: InvestmentStatusEnum.NOT_CONFIRMED,
          },
        },
        imageProofUrl: {
          create: {
            id: imageId,
            url: imageUrl,
          },
        },
        planId: investmentPlan.id,
      },
    });

    console.log("Investment created:", investment);
    return NextResponse.json(investment, { status: 201 });
  } catch (error: any) {
    console.error("Error creating investment:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
