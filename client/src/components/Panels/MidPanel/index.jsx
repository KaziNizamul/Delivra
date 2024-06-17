/* internal components */
import Header from './Header';
import BottomNav from './BottomNav';
/* styles */
import styles from './MidPanel.module.scss';

const MidPanel = () => {
  return (
    <div className={styles.midPanel}>
      <Header />
      <BottomNav />
    </div>
  );
};

export default MidPanel;
