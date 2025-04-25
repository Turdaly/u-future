
import { useAppDispatch, useAppSelector } from 'app/store';
import { selectSortOrder } from '../model/selector';
import { setSortOrder } from '../model/slice';
import styles from "./sort-control.module.scss";

export const SortControl = () => {
  const dispatch = useAppDispatch();
  const sortOrder = useAppSelector(selectSortOrder);

  const toggleSort = () => {
    dispatch(setSortOrder(sortOrder === "asc" ? "desc" : "asc"));
  };

  return (
    <div className={styles.sortControl} onClick={toggleSort}>
      <div className={`${styles.sortIcon} ${styles[sortOrder]}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
      <span className={styles.sortLabel}>
        {sortOrder === "asc"
          ? "ascending population"
          : "descending population"}
      </span>
    </div>
  );
};