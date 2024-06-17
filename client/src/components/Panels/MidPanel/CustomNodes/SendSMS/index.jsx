/* external imports */
import React, { useState } from 'react';
import { Handle } from 'reactflow';
import { FaSms } from 'react-icons/fa';
/* styles */
import styles from './SendSMS.module.scss';

const SendSMSNode = ({ data }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={styles.customNode}>
      <div className={styles.nodeHeader} onClick={toggleCollapse}>
        <div className={styles.iconContainer}>
          <FaSms className={styles.icon} />
        </div>
        <div className={styles.nodeTitle}>Send SMS</div>
        <div className={styles.dropdownIcon}>
          {isCollapsed ? '▼' : '▲'}
        </div>
      </div>
      {!isCollapsed && (
        <div className={styles.nodeContent}>
          <div className={styles.contentIcon}>ⓘ Shortcode/keyword</div>
          <div className={styles.contentText}>Event Reminder</div>
        </div>
      )}
      <Handle type="target" position="top" className={styles.handle} />
      <Handle type="source" position="bottom" className={styles.handle} />
    </div>
  );
};

export default SendSMSNode;
