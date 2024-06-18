/* external imports */
import React, { useState } from 'react';
import { Handle } from 'reactflow';
import { MdContactMail } from "react-icons/md";
import { AiOutlineUser } from 'react-icons/ai';
/* styles */
import styles from './EvaluateEmail.module.scss';

const EvaluateEmailNode = ({ data }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={styles.customNode}>
      <div className={styles.nodeHeader} onClick={toggleCollapse}>
        <div className={styles.iconContainer}>
          <MdContactMail className={styles.icon} />
        </div>
        <div className={styles.nodeTitle}>Evaluate Contact</div>
        <div className={styles.dropdownIcon}>
          {isCollapsed ? '▼' : '▲'}
        </div>
      </div>
      {!isCollapsed && (
        <div className={styles.nodeContent}>
          <div className={styles.contentIcon}>
            <AiOutlineUser />
            &nbsp;
            Matched Contacts
          </div>
          <div className={styles.contentText}>
            Registered for Webinar?
          </div>
        </div>
      )}
      <Handle type="target" position="top" className={styles.handle} />
      <Handle type="source" position="bottom" className={styles.handle} />
    </div>
  );
};

export default EvaluateEmailNode;
