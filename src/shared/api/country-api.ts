import { queryOptions } from "@tanstack/react-query";
import { apiCall } from "./api";

export const CountryApi = {
  baseKey: "country",
  getCountriesQueryOptions: () => {
    return queryOptions({
      queryKey: [CountryApi.baseKey, "getCountries"],
      queryFn: () => {
        return apiCall<Types.Country[]>("all");
      },
    });
  },
  searchCountryByNameQueryOptions: (name: string) => {
    return queryOptions({
      queryKey: [CountryApi.baseKey, "searchCountryByName", name],
      queryFn: () => {
        return apiCall<Types.Country[]>(`name/${name}`);
      },
    });
  },
};
