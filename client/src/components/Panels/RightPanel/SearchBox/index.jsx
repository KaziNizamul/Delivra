import React from 'react';
/* styles */
import styles from './SearchBox.module.scss';

const SearchBox = ({ placeholder }) => {
  return <input type="text" className={styles.searchBox} placeholder={placeholder} />;
};

export default SearchBox;
