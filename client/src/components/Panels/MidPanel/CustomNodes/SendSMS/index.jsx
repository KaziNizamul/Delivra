/* external imports */
import React from 'react';
import { Handle } from 'reactflow';
import { FaSms } from 'react-icons/fa';
/* styles */
import styles from './SendSMS.module.scss';

const SendSMSNode = ({ data }) => {
  return (
    <div className={styles.customNode}>
      <div className={styles.nodeHeader}>
        <div className={styles.iconContainer}>
          <FaSms className={styles.icon} />
        </div>
        <div className={styles.nodeTitle}>Send SMS</div>
        <div className={styles.dropdownIcon}>▼</div>
      </div>
      <div className={styles.nodeContent}>
        <div className={styles.contentIcon}>ⓘ</div>
        <div className={styles.contentLabel}>Shortcode/keyword</div>
        <div className={styles.contentText}>Event Reminder</div>
      </div>
      <Handle type="target" position="top" className={styles.handle} />
      <Handle type="source" position="bottom" className={styles.handle} />
    </div>
  );
};

export default SendSMSNode;
