import { setSelectedRegion } from '../model/slice';
import styles from "./region-list.module.scss";
import { regions } from '../model/constants';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import { selectSelectedRegion } from '../model/selector.slice';


export function RegionList() {
  const dispatch = useAppDispatch();
  const selectedRegion = useAppSelector(selectSelectedRegion);

  const handleRegionSelect = (region: string) => {
    dispatch(setSelectedRegion(region));
  };

  return (
    <ul className={styles.menu}>
      {regions.map((region) => (
        <li
          key={region.text}
          className={`${selectedRegion === region.text ? styles.active : ""}`}
          onClick={() => handleRegionSelect(region.text)}
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