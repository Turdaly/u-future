import { ChangeEvent, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { setSearchQuery } from "../model/slice";
import { getSearchTextFromURL } from "../lib/get-search-url";
import styles from "./search-input.module.scss";
import { useAppDispatch } from "app/store";

export const SearchInput = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState(
    getSearchTextFromURL(location.search)
  );

  useEffect(() => {
    const textFromURL = getSearchTextFromURL(location.search);
    dispatch(setSearchQuery(textFromURL));
  }, []);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(setSearchQuery(inputValue));

    if (inputValue) {
      navigate(`/search/?text=${encodeURIComponent(inputValue)}`);
    } else {
      navigate("/");
    }
  };

  const handleClear = () => {
    setInputValue("");

    dispatch(setSearchQuery(""));

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.searchContainer}>
        <div className={styles.searchIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="search country..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {inputValue && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={handleClear}
          >
            x
          </button>
        )}
        <button className={styles.searchButton}>Search</button>
      </div>
    </form>
  );
};
