/* external imports */
import React, { useState } from 'react';
import { Handle } from 'reactflow';
import { FaCodeBranch } from 'react-icons/fa';
/* styles */
import styles from './Split.module.scss';

const SplitNode = ({ data }) => {
  const [condition, setCondition] = useState(data.condition || '');

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
    if (data.onChangeCondition) {
      data.onChangeCondition(event.target.value);
    }
  };

  return (
    <div className={styles.customNode}>
      <div className={styles.nodeHeader}>
        <div className={styles.iconContainer}>
          <FaCodeBranch className={styles.icon} />
        </div>
        <div className={styles.nodeTitle}>Evaluate Condition</div>
      </div>
      <div className={styles.nodeContent}>
        <div className={styles.contentText}>Condition:</div>
        <input
          type="text"
          value={condition}
          onChange={handleConditionChange}
          className={styles.input}
          placeholder="Please type yes or no"
        />
      </div>
      <Handle type="target" position="top" className={styles.handle} />
      <Handle type="source"  style={{ left: '25%' }} position="bottom" id="yes" className={`${styles.handle} ${styles.handleYes}`}>
        <div className={styles.handleLabel}>Yes</div>
      </Handle>
      <Handle type="source"  style={{ left: '75%' }} position="bottom" id="no" className={`${styles.handle} ${styles.handleNo}`}>
        <div className={styles.handleLabel}>No</div>
      </Handle>
    </div>
  );
};

export default SplitNode;
