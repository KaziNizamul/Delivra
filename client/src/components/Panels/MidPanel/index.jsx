/* external imports */
import React from 'react';
import FlowChart from './FlowChart';
/* styles */
import styles from './MidPanel.module.scss';

const MidPanel = () => {
  return (
    <div className={styles.midPanel}>
      <FlowChart /> 
    </div>
  );
};

export default MidPanel;