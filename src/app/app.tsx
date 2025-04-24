import { useCountries } from "../shared/api/country/use-countries";
import { CountryList } from "../widgets/country-list";
export function App() {
  const { countries, isLoading } = useCountries();
  const regions = ["All", "Europe", "Asia", "America", "Africa"];
  console.log(countries);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!countries) {
    return <div>No countries found</div>;
  }
  return (
    <div>
      <ul>
        {regions.map((region) => (
          <li key={region}>{region}</li>
        ))}
      </ul>
      <CountryList countries={countries} />
    </div>
  );
}
