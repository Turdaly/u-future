import styles from "./app.module.scss";
import { CountriesWidget } from "widgets/countries-widget";
export function App() {
  return (
    <div className={styles.container}>
      <CountriesWidget />
    </div>
  );
}
