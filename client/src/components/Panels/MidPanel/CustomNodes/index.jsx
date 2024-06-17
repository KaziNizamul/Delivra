/* external imports */
import React from 'react';
import { Handle } from 'reactflow';
/* styles */
import styles from './CustomNodes.module.scss';

const CustomNode = ({ data, type }) => {
  return (
    <div className={`${styles.customNode} ${styles[type]}`}>
      <div className={styles.nodeHeader}>
        <div className={styles.iconContainer}>
          {data.icon}
        </div>
        <div className={styles.nodeTitle}>{data.label}</div>
        <div className={styles.dropdownIcon}>▼</div> 
      </div>
      <div className={styles.nodeContent}>
        {type === 'sendEmail' && (
          <>
            <div className={styles.contentIcon}>📢</div>
            <div className={styles.contentLabel}>Campaign</div>
            <div className={styles.contentTextBold}>Email Invite 1</div>
            <div className={styles.contentText}>You're invited</div>
            <div className={styles.contentText}>ID: 1049894</div>
          </>
        )}
        {type === 'pause' && (
          <>
            <div className={styles.contentIcon}>⏱️</div>
            <div className={styles.contentLabel}>Pause time</div>
            <div className={styles.contentText}>Until 4 Days</div> 
          </>
        )}
        {type === 'sendSMS' && (
          <>
            <div className={styles.contentIcon}>ⓘ</div>
            <div className={styles.contentLabel}>Shortcode/keyword</div>
            <div className={styles.contentText}>Event Reminder</div>
          </>
        )}
      </div>
      <Handle type="target" position="top" className={styles.handle} />
      <Handle type="source" position="bottom" className={styles.handle} />
    </div>
  );
};

export default CustomNode;