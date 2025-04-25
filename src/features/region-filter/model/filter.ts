import { Country } from "@/entities";

export const filterByRegion = (countries: Country[], region: string) => {
  if (!countries || region === "All") {
    return countries || [];
  }
  return countries.filter((country) => country.region === region);
};