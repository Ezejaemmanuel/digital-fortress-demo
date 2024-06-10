// import { useSuspenseQuery } from "@tanstack/react-query";
// import { processInvestments } from "@/app/_action/supabase-core-clients";
// import { useCachedDataStore } from "../zuustand-store";

// const fetchProcessInvestments = async ({
//   queryKey,
// }: {
//   queryKey: [string, string, boolean | undefined];
// }) => {
//   const [, userId, runUntimed] = queryKey;

//   try {
//     const result = await processInvestments(userId, runUntimed);
//     return result;
//   } catch (error: any) {
//     if (typeof error === "object" && error !== null && "error" in error) {
//       throw new Error(error.error);
//     } else {
//       throw new Error("An unexpected error occurred");
//     }
//   }
// };

// const useProcessInvestments = (userId: string, runUntimed?: boolean) => {
//   const { cachedData, setCachedData, clearCachedData } = useCachedDataStore();

//   if (cachedData) {
//     const currentTime = new Date().getTime();
//     const cacheAge = currentTime - cachedData.timestamp;

//     if (cacheAge < cachedData.cacheDuration) {
//       // If cached data is within the cache duration, use it
//       return { data: cachedData.data, isLoading: false, error: null };
//     } else {
//       // If cached data is older than the cache duration, clear the cache
//       clearCachedData();
//     }
//   }

//   const queryResult = useSuspenseQuery({
//     queryKey: ["processInvestments-query", userId, runUntimed],
//     queryFn: fetchProcessInvestments,
//   });

//   // Determine cache duration based on data
//   const data = queryResult.data;
//   const isAnyNonZero =
//     data.userBalance !== 0 ||
//     data.withdrawableBalance !== 0 ||
//     data.totalProfit !== 0 ||
//     data.totalWithdrawal !== 0;
//   const cacheDuration = isAnyNonZero ? 5 * 60 * 1000 : 30 * 1000;

//   // Store data in Zustand cache with the determined duration
//   setCachedData(data, cacheDuration);

//   return queryResult;
// };

// export default useProcessInvestments;

import { useSuspenseQuery } from "@tanstack/react-query";
import { processInvestments } from "@/app/_action/supabase-core-clients";
import { formatDistanceToNow } from "date-fns";
import { useCachedDataStore } from "../zuustand-store";

const fetchProcessInvestments = async ({
  queryKey,
}: {
  queryKey: [string, string, boolean | undefined];
}) => {
  const [, userId, runUntimed] = queryKey;
  console.log("fetchProcessInvestments called with:", { userId, runUntimed });

  try {
    const result = await processInvestments(userId, runUntimed);
    console.log("processInvestments result:", result);
    return result;
  } catch (error: any) {
    console.error("Error in processInvestments:", error);
    if (typeof error === "object" && error !== null && "error" in error) {
      throw new Error(error.error);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

const useProcessInvestments = (userId: string, runUntimed?: boolean) => {
  console.log("useProcessInvestments called with:", { userId, runUntimed });

  const { cachedData, setCachedData, clearCachedData } = useCachedDataStore();
  console.log("Initial cachedData:", cachedData);

  if (cachedData) {
    const currentTime = new Date().getTime();
    const cacheAge = currentTime - cachedData.timestamp;
    const cacheAgeHumanReadable = formatDistanceToNow(
      new Date(cachedData.timestamp)
    );
    const cacheDurationHumanReadable = formatDistanceToNow(
      new Date(cachedData.timestamp + cachedData.cacheDuration)
    );

    console.log("Current time:", currentTime);
    console.log("Cache age:", cacheAge, `(${cacheAgeHumanReadable} ago)`);
    console.log(
      "Cache duration:",
      cachedData.cacheDuration,
      `(expires in ${cacheDurationHumanReadable})`
    );

    if (cacheAge < cachedData.cacheDuration) {
      // If cached data is within the cache duration, use it
      console.log("Using cached data");
      return { data: cachedData.data, isLoading: false, error: null };
    } else {
      // If cached data is older than the cache duration, clear the cache
      console.log("Clearing outdated cache");
      clearCachedData();
    }
  }

  const queryResult = useSuspenseQuery({
    queryKey: ["processInvestments-query", userId, runUntimed],
    queryFn: fetchProcessInvestments,
  });
  console.log("Query result:", queryResult);

  // Determine cache duration based on data
  const data = queryResult.data;
  console.log("Fetched data:", data);

  const isAnyNonZero =
    data.userBalance !== 0 ||
    data.withdrawableBalance !== 0 ||
    data.totalProfit !== 0 ||
    data.totalWithdrawal !== 0;
  const cacheDuration = isAnyNonZero ? 5 * 60 * 1000 : 30 * 1000;
  console.log("Cache duration set to:", cacheDuration);

  // Store data in Zustand cache with the determined duration
  setCachedData(data, cacheDuration);
  console.log("Data cached with duration:", { data, cacheDuration });

  return queryResult;
};

export default useProcessInvestments;
