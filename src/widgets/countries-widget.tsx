import { useEffect, useMemo } from "react";
import { useLocation } from "react-router";
import { useAppDispatch, useAppSelector } from "app/store";
import { useCountries } from "@/shared/api/country/use-countries";
import { useSearchCountriesByName } from "@/shared/api/country/use-search-coutries";
import { RegionList } from "@/features/region-filter/ui/region-list";
import { CountryList } from "@/entities/ui/country-list";
import { filterByRegion } from "@/features/region-filter";
import { sortByPopulation, SortControl } from "@/features/population-sort";
import { getSearchTextFromURL, SearchInput } from "@/features/country-search";
import { setSearchQuery } from "@/features/country-search/model/slice";
import styles from "./countries-widget.module.scss";
import { selectSelectedRegion } from "@/features/region-filter/model/selector.slice";
import { selectSortOrder } from "@/features/population-sort/model/selector";
import { selectSearchQuery } from "@/features/country-search/model/selector";

export const CountriesWidget = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const selectedRegion = useAppSelector(selectSelectedRegion);
  const sortOrder = useAppSelector(selectSortOrder);
  const searchQuery = useAppSelector(selectSearchQuery);

  useEffect(() => {
    const textFromURL = getSearchTextFromURL(location.search);
    dispatch(setSearchQuery(textFromURL));
  }, [location.search, dispatch]);

  const { countries, isLoadingGet } = useCountries();
  const { searchedCountries, isLoadingSearch, isError } =
    useSearchCountriesByName(searchQuery.trim());

  const sourceCountries = searchQuery.trim() ? searchedCountries : countries;

  const filteredCountries = useMemo(() => {
    if (!sourceCountries) return [];

    const filtered = filterByRegion(sourceCountries, selectedRegion);

    return sortByPopulation(filtered, sortOrder);
  }, [sourceCountries, selectedRegion, sortOrder]);

  return (
    <div className={styles.filtersRow}>
      <h1 className={styles.header}>Страны мира</h1>

      <SearchInput />
      <RegionList />
      <SortControl />

      {isLoadingGet || isLoadingSearch ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <CountryList countries={filteredCountries} />
      )}

      {isError && <div className={styles.error}>Not Found</div>}
    </div>
  );
};