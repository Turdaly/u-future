import { regions } from "../model/constants";
import styles from "./region-list.module.scss";

export function RegionList({
  selectedRegion,
  setSelectedRegion,
}: {
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
}) {
  return (
    <ul className={styles.menu}>
      {regions.map((region) => (
        <li
          key={region.text}
          className={`${selectedRegion === region.key ? styles.active : ""}`}
          onClick={() => setSelectedRegion(region.key)}
        >
          <span
            className={styles.icon}
            style={{ backgroundImage: `url(${region.icon})` }}
          />
          {region.text}
        </li>
      ))}
    </ul>
  );
}