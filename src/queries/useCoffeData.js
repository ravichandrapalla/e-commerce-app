import { useQuery } from "@tanstack/react-query";

export const API_URL = "https://api.sampleapis.com/coffee/hot";

async function getCoffeeData() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch {
    console.log("api call happened");
  }
}

export function useCoffeeData() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: getCoffeeData,
    staleTime: 5 * 60 * 1000, // cache technique (1 minute)
    refetchOnWindowFocus: false,
  });
}
