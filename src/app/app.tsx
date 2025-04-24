import styles from "./app.module.scss";
import { CountriesWidget } from "../widgets/country-widget";
export function App() {
  return (
    <div className={styles.container}>
      <CountriesWidget />
    </div>
  );
}
