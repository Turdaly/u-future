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

export const CountriesWidget = () => {
  const { countries, isLoading } = useCountries();
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [filteredCountries, setFilteredCountries] = useState<Types.Country[]>(
    []
  );
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  useEffect(() => {
    if (!countries) return;

    // Алдымен регион бойынша фильтрлеу
    const filtered = filterByRegion(countries, selectedRegion);

    // Содан кейін сұрыптау
    const sorted = sortByPopulation(filtered, sortOrder);

    setFilteredCountries(sorted);
  }, [countries, selectedRegion, sortOrder]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.filtersRow}>
      <h1 className={styles.header}>Страны мира</h1>

      <RegionList
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      <SortControl sortOrder={sortOrder} setSortOrder={setSortOrder} />

      <CountryList countries={filteredCountries} />
    </div>
  );
};
