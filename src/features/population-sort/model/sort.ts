
import { Country } from "@/entities";
import { SortOrder } from "./types";

export const sortByPopulation = (countries: Country[], order: SortOrder) => {
  if (!countries) {
    return [];
  }
  return countries.sort((a, b) => {
    if (order === "asc") {
      return a.population - b.population;
    } else {
      return b.population - a.population;
    }
  });
}