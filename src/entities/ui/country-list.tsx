import { Country } from "../model/types";
import styles from "./country-list.module.scss";

export function CountryList({ countries }: { countries: Country[] }) {
  return (
    <div className={styles.container}>
      {countries.map((country) => (
        <div className={styles.countryItem} key={country.name.common}>
          <img
            src={`${country.flags.png}`}
            alt={country.name.common}
            className={styles.flag}
          />
          <span className={styles.name}>{country.name.common}</span>
        </div>
      ))}
    </div>
  );
}
