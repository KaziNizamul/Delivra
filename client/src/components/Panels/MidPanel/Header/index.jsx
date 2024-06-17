/* external imports */
import { FaFilePdf } from 'react-icons/fa';
/* styles */
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>Create New Automation</div>
      <div className={styles.buttons}>
        <button className={styles.exitButton}>Exit</button>
        <button className={styles.exportButton}>
          <FaFilePdf className={styles.icon} />
          Export to PDF
        </button>
        <button className={styles.saveNextButton}>Save and Next</button>
      </div>
    </header>
  );
};

export default Header;
