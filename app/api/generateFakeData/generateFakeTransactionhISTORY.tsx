import { TransactionType, PrismaClient } from "@prisma/client";

import { prisma } from "@/lib/db";
// Helper function to generate a random date between now and two weeks ago
function randomDateFromLastTwoWeeks() {
  const now = new Date();
  const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000); // 14 days ago
  const randomDate = new Date(
    twoWeeksAgo.getTime() +
      Math.random() * (now.getTime() - twoWeeksAgo.getTime())
  );
  return randomDate;
}

export async function createMultipleTransactionHistories(userId: string) {
  const transactionsData = [
    {
      type: TransactionType.DEPOSIT,
      amount: 1000,
      userId,
      description: "Initial deposit",
    },
    {
      type: TransactionType.WITHDRAWAL,
      amount: 500,
      userId,
      description: "Partial withdrawal for personal use",
    },
    {
      type: TransactionType.NEUTRAL,
      amount: 0,
      userId,
      description: "Admin confirmation required",
    },
    {
      type: TransactionType.DEPOSIT,
      amount: 200,
      userId,
      description: "Additional deposit",
    },
    {
      type: TransactionType.WITHDRAWAL,
      amount: 100,
      userId,
      description: "Withdrawal for bills",
    },
    {
      type: TransactionType.NEUTRAL,
      amount: 0,
      userId,
      description: "Waiting for admin to confirm",
    },
    {
      type: TransactionType.DEPOSIT,
      amount: 1500,
      userId,
      description: "Investment return",
    },
    {
      type: TransactionType.WITHDRAWAL,
      amount: 750,
      userId,
      description: "Withdrawal for vacation",
    },
    {
      type: TransactionType.NEUTRAL,
      amount: 0,
      userId,
      description: "Verification completed",
    },
    {
      type: TransactionType.DEPOSIT,
      amount: 250,
      userId,
      description: "Gift received",
    },
    {
      type: TransactionType.WITHDRAWAL,
      amount: 50,
      userId,
      description: "Small withdrawal for groceries",
    },
    {
      type: TransactionType.NEUTRAL,
      amount: 0,
      userId,
      description: "Admin confirmed transaction",
    },
    {
      type: TransactionType.DEPOSIT,
      amount: 300,
      userId,
      description: "Savings deposit",
    },
    {
      type: TransactionType.WITHDRAWAL,
      amount: 200,
      userId,
      description: "Emergency funds",
    },
    {
      type: TransactionType.NEUTRAL,
      amount: 0,
      userId,
      description: "Pending admin review",
    },
    {
      type: TransactionType.DEPOSIT,
      amount: 100,
      userId,
      description: "Refund",
    },
    {
      type: TransactionType.WITHDRAWAL,
      amount: 150,
      userId,
      description: "Withdrawal for repairs",
    },
    {
      type: TransactionType.NEUTRAL,
      amount: 0,
      userId,
      description: "Admin action required",
    },
    {
      type: TransactionType.DEPOSIT,
      amount: 400,
      userId,
      description: "Bonus deposit",
    },
    {
      type: TransactionType.WITHDRAWAL,
      amount: 300,
      userId,
      description: "Withdrawal for new phone",
    },
  ].map((transaction) => ({
    ...transaction,
    createdAt: randomDateFromLastTwoWeeks(), // Add the randomly generated createdAt date to each transaction
  }));

  // Create transactions one by one in a sequential manner
  for (const transaction of transactionsData) {
    try {
      await prisma.transactionHistory.create({
        data: {
          type: transaction.type,
          amount: transaction.amount,
          userId: transaction.userId,
          description: transaction.description,
          createdAt: transaction.createdAt, // Explicitly setting createdAt here
        },
      });
      console.log(`Transaction created: ${transaction.description}`);
    } catch (error) {
      console.error("Error creating transaction:", error);
    }
  }

  console.log("All transactions have been created.");
}
