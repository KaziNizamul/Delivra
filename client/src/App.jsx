/* internal components */
import LeftPanel from './components/Panels/LeftPanel';
import MidPanel from './components/Panels/MidPanel';
/* styles */
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <aside className={styles.leftPanel}>
        <LeftPanel />
      </aside>
      <div className={styles.mainContent}>
        <MidPanel />
      </div>
      <aside className={styles.rightPanel}>
        <h1> right </h1>
      </aside>
    </div>
  );
};

export default App;