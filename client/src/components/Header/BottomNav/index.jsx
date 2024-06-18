/* external imports */
import { FaUserFriends, FaSearch, FaBug, FaRocket, FaCheckCircle } from 'react-icons/fa';
import { MdScheduleSend } from "react-icons/md";
/* styles */
import styles from './BottomNav.module.scss';

const BottomNav = () => {
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
        <li className={styles.navItem}>
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
