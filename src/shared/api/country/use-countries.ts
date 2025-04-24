import { useQuery } from "@tanstack/react-query"
import { CoutnryAPi } from "../country-api"

export const useCountries = () => {
  const {data: countries, isLoading, isError} = useQuery({...CoutnryAPi.getCountriesQueryOptions()})

  return {
    countries,
    isLoading,
    isError
  }
}