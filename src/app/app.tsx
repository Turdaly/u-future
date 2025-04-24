import { useCountries } from "../shared/api/country/use-countries"

export function App() {
  const { countries, isLoading } = useCountries()
  console.log(countries)
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div>JHelo</div>
    {countries.map((country) => (
      <div key={country.name.common}>
        <h1>{country.name.common}</h1>
        <img src={country.flags.png} alt={country.name.common} />
      </div>
    )
  )
}


