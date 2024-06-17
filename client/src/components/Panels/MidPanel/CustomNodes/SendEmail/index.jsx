/* external imports */
import React from 'react';
import { Handle } from 'reactflow';
import { FaEnvelope } from 'react-icons/fa';
/* styles */
import styles from './SendEmail.module.scss';

const SendEmailNode = ({ data }) => {
  console.log(data)
  return (
    <div className={styles.customNode}>
      <div className={styles.nodeHeader}>
        <div className={styles.iconContainer}>
          <FaEnvelope className={styles.icon} />
        </div>
        <div className={styles.nodeTitle}>Send Email</div>
        <div className={styles.dropdownIcon}>▼</div>
      </div>
      <div className={styles.nodeContent}>
        <div className={styles.contentIcon}>📢</div>
        <div className={styles.contentLabel}>Campaign</div>
        <div className={styles.contentTextBold}>Email Invite 1</div>
        <div className={styles.contentText}>You're invited</div>
        <div className={styles.contentText}>ID: 1049894</div>
      </div>
      <Handle type="target" position="top" className={styles.handle} />
      <Handle type="source" position="bottom" className={styles.handle} />
    </div>
  );
};

export default SendEmailNode;
