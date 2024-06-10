// InvestmentPage.tsx
import { FaCrown } from "react-icons/fa";
import NoInvestmentPlanCard from "./noinvestment";
import InvestmentPlanCard from "./aside";
import { Suspense } from "react";
import Loader from "@/components/loader";
// import { InvestmentPlanName } from "@prisma/client";

function InvestmentPage({ params }: { params: { vip: string } }) {
  const { vip } = params;
  console.log("this is the vip", vip);

  return (
    <div className="w-full mb-10 flex justify-center items-center min-h-screen">
      {vip ? (
        <div className="flex flex-col  items-center">
          <h2 className="text-2xl font-bold mb-4 sm:text-3xl text-center">
            Investment Detail
          </h2>
          <Suspense
            fallback={
              <Loader className="h-full flex justify-center items-center" />
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
