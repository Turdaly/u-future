export const filterByRegion = (countries: Types.Country[], region: string) => {
  if (!countries || region === "All") {
    return countries || [];
  }
  return countries.filter((country) => country.region === region);
};
