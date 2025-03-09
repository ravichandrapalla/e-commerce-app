import { useQuery } from "@tanstack/react-query";

export const API_URL = "https://api.sampleapis.com/coffee/hot";

async function getCoffeeData() {
  const controller = new AbortController();
  const { signal } = controller;
  try {
    const response = await fetch(API_URL, { signal });
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name === "AbortError") {
      alert("Request was aborted");
    }
    console.log("api call happened");
  } finally {
    controller.abort();
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
