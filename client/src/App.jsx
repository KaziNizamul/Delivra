/* internal components */
import LeftPanel from './components/Panels/LeftPanel';
import MidPanel from './components/Panels/MidPanel';
import RightPanel from './components/Panels/RightPanel';
import Header from './components/Header';
/* styles */
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <aside className={styles.leftPanel}>
        <LeftPanel />
      </aside>
      <div className={styles.mainContent}>
        <Header />
        <div className={styles.content}>
          <MidPanel />
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default App;
