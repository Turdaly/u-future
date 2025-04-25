import { queryOptions } from "@tanstack/react-query";
import { apiCall } from "./api";
import { Country } from "@/entities";

export const CountryApi = {
  baseKey: "country",
  getCountriesQueryOptions: () => {
    return queryOptions({
      queryKey: [CountryApi.baseKey, "getCountries"],
      queryFn: () => {
        return apiCall<Country[]>("all");
      },
    });
  },
  searchCountryByNameQueryOptions: (name: string) => {
    return queryOptions({
      queryKey: [CountryApi.baseKey, "searchCountryByName", name],
      queryFn: () => {
        return apiCall<Country[]>(`name/${name}`);
      },
    });
  },
};
