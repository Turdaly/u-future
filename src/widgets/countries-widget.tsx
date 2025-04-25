import { useEffect, useState } from "react";
import { useCountries } from "../shared/api/country/use-countries";
import { RegionList } from "../features/region-filter/ui/region-list";
import { CountryList } from "../entities/ui/country-list";
import { filterByRegion } from "../features/region-filter";
import {
  sortByPopulation,
  SortControl,
  SortOrder,
} from "../features/population-sort";
import styles from "./countries-widget.module.scss";
import { getSearchTextFromURL, SearchInput } from "../features/country-search";
import { useSearchCountriesByName } from "../shared/api/country/use-search-coutries";
import { useLocation } from "react-router";

export const CountriesWidget = () => {
  const location = useLocation();

  const [selectedRegion, setSelectedRegion] = useState("All");
  const [filteredCountries, setFilteredCountries] = useState<Types.Country[]>(
    []
  );
  const [searchQuery, setSearchQuery] = useState(
    getSearchTextFromURL(location.search)
  );
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const { countries, isLoadingGet } = useCountries();
  const { searchedCountries, isLoadingSearch, isError } =
    useSearchCountriesByName(searchQuery.trim());
  const allCountries = searchQuery.trim() ? searchedCountries : countries;

  useEffect(() => {
    if (!allCountries) return;
    const filtered = filterByRegion(allCountries, selectedRegion);

    const sorted = sortByPopulation(filtered, sortOrder);

    setFilteredCountries(sorted);
  }, [allCountries, selectedRegion, sortOrder]);
  useEffect(() => {
    const textFromURL = getSearchTextFromURL(location.search);
    setSearchQuery(textFromURL);
  }, [location.search]);

  return (
    <div className={styles.filtersRow}>
      <h1 className={styles.header}>Страны мира</h1>
      <SearchInput setSearchQuery={setSearchQuery} />
      <RegionList
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      <SortControl sortOrder={sortOrder} setSortOrder={setSortOrder} />
      {isLoadingGet || isLoadingSearch ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <CountryList countries={filteredCountries} />
      )}
      {isError && <div className={styles.error}>Not Found</div>}
    </div>
  );
};
