import { useQuery } from "@tanstack/react-query";
import { CountryApi } from "../country-api";

export const useSearchCountriesByName = (name: string) => {
  const { data: searchedCountries, isLoading:isLoadingSearch } = useQuery({...CountryApi.searchCountryByNameQueryOptions(name), enabled: !!name});

  return {
    searchedCountries,
    isLoadingSearch,
  };
}