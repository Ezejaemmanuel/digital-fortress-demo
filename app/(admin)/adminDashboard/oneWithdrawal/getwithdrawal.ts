import { prisma } from "@/lib/db";
import { User, Withdrawal } from "@prisma/client";

export async function getWithdrawalDetails(
  withdrawalId: string
): Promise<Withdrawal & { user: User }> {
  const withdrawal = await prisma.withdrawal.findUnique({
    where: { id: withdrawalId },
    include: {
      user: true,
    },
  });

  if (!withdrawal) {
    throw new Error("Withdrawal not found");
  }

  return withdrawal;
}
