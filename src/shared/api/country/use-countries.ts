import { useQuery } from "@tanstack/react-query";
import { CountryApi } from "../country-api";

export const useCountries = () => {
  const {
    data: countries,
    isLoading: isLoadingGet,
    isError,
  } = useQuery({ ...CountryApi.getCountriesQueryOptions() });

  return {
    countries,
    isLoadingGet,
    isError,
  };
};
