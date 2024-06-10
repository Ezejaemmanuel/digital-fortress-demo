import { FaCrown } from "react-icons/fa";
import InvestmentPlanCard from "./aside";
import NoInvestmentPlanCard from "../[vip]/noinvestment";
import { Suspense } from "react";
import Loader from "@/components/loader";
// import { InvestmentPlanName } from "@prisma/client";

function InvestmentPage({ searchParams }: { searchParams: { vip: string } }) {
  const { vip } = searchParams;
  console.log("this is the vip", vip);

  return (
    <div className="flex flex-col justify-center items-center mx-auto min-h-screen">
      {vip ? (
        <div className="flex flex-col justify-center items-center w-full p-4">
          <h2 className="text-2xl font-bold mb-4 sm:text-3xl text-center">
            Investment Detail
          </h2>
          <Suspense
            fallback={
              <Loader className="flex items-center justify-center h-[80dvh]" />
            }
          >
            <InvestmentPlanCard name={vip} />
          </Suspense>
        </div>
      ) : (
        <NoInvestmentPlanCard />
      )}
    </div>
  );
}

export default InvestmentPage;
