/* external imports */
import React from 'react';
/* styles */
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.envelope}>
        <div className={styles.envelopeFlap}></div>
      </div>
    </div>
  );
};

export default Loader;
