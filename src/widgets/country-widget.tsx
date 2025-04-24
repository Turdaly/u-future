import { useEffect, useState } from "react";
import { useCountries } from "../shared/api/country/use-countries";
import { filterByRegion } from "../features/region-filter/model/filter";
import { RegionList } from "../features/region-filter/ui/region-list";
import { CountryList } from "../entities/ui/country-list";



export const CountriesWidget = () => {
  const { countries, isLoading } = useCountries();
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [filteredCountries, setFilteredCountries] = useState<Types.Country[]>([]);

  useEffect(() => {
    if (!countries) return;

    setFilteredCountries(filterByRegion(countries, selectedRegion));
  }, [countries, selectedRegion]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Страны мира</h1>

      <RegionList
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />

      <CountryList countries={filteredCountries} />
    </div>
  );
};