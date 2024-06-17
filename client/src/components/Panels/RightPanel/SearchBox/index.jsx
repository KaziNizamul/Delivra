import React from 'react';
/* styles */
import styles from './SearchBox.module.scss';

const SearchBox = ({ placeholder, value, onChange }) => {
  return (
    <input 
      type="text" 
      className={styles.searchBox} 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
    />
  );
};

export default SearchBox;
