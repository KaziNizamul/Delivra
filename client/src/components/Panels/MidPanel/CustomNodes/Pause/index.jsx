/* external imports */
import React from 'react';
import { Handle } from 'reactflow';
import { MdPause } from 'react-icons/md';
/* styles */
import styles from './Pause.module.scss';

const PauseNode = ({ data }) => {
  return (
    <div className={styles.customNode}>
      <div className={styles.nodeHeader}>
        <div className={styles.iconContainer}>
          <MdPause className={styles.icon} />
        </div>
        <div className={styles.nodeTitle}>Pause</div>
        <div className={styles.dropdownIcon}>▼</div>
      </div>
      <div className={styles.nodeContent}>
        <div className={styles.contentIcon}>⏱️</div>
        <div className={styles.contentLabel}>Pause time</div>
        <div className={styles.contentText}>Until 4 Days</div>
      </div>
      <Handle type="target" position="top" className={styles.handle} />
      <Handle type="source" position="bottom" className={styles.handle} />
    </div>
  );
};

export default PauseNode;
