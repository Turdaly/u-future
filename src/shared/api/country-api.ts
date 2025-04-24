import { queryOptions } from "@tanstack/react-query";
import { apiCall } from "./api";

export const CoutnryAPi = {
  baseKey: "country",
  getCountriesQueryOptions:() => {
    return queryOptions({
      queryKey: [CoutnryAPi.baseKey, "getCountries"],
      queryFn: () => {
        return apiCall('all')
      }
    })
  }
}