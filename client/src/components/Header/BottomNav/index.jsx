/* external imports */
import React from 'react';
import { useSelector } from 'react-redux';
import { FaBug, FaRocket, FaCheckCircle } from 'react-icons/fa';
import { triggerWorkflow } from '../../WorkFlow';
import { notification } from 'antd';
import { MdScheduleSend } from "react-icons/md";
/* styles */
import styles from './BottomNav.module.scss';

const BottomNav = () => {
  const nodes = useSelector((state) => state.workFlow);

  const handleTestClick = async () => {
    try {
      const message = await triggerWorkflow(nodes);
      notification.success({
        message: 'Success',
        description: message,
        placement: 'bottomRight',
      });
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Something went wrong, please check your workflow and try again',
        placement: 'bottomRight',
      });
    }
  };

  return (
    <nav className={styles.bottomNav}>
      <ul>
        <li className={styles.navItem}>
          <FaCheckCircle className={`${styles.navIcon} ${styles.setupIcon}`} />
          <span>Setup</span>
        </li>
        <li className={`${styles.navItem} ${styles.active}`}>
          <FaRocket className={styles.navIcon} />
          <span>Design</span>
        </li>
        {/* <li className={styles.navItem}>
          <FaUserFriends className={styles.navIcon} />
          <span>Contacts</span>
        </li>
        <li className={styles.navItem}>
          <FaSearch className={styles.navIcon} />
          <span>Preview</span>
        </li> */}
        <li className={styles.navItem} onClick={handleTestClick}>
          <FaBug className={styles.navIcon} />
          <span>Test</span>
        </li>
        <li className={styles.navItem}>
          <MdScheduleSend className={styles.navIcon} />
          <span>Schedule</span>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
