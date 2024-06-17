/* external imports */
import React from 'react';
import { FaEnvelope, FaBell, FaSms, FaSignOutAlt, FaPen, FaCodeBranch, FaFileCsv, FaStop, FaTags } from 'react-icons/fa';
import { MdPause, MdUpdate, MdMergeType } from 'react-icons/md';
/* internal components */
import ActionButton from './ActionButton';
import SearchBox from './SearchBox';
/* styles */
import styles from './RightPanel.module.scss';

const actions = [
  { icon: <FaEnvelope style={{ color: '#007bff' }} />, label: 'Send Email' },
  { icon: <FaBell style={{ color: '#ffc107' }} />, label: 'Lead Alert' },
  { icon: <FaSms style={{ color: '#28a745' }} />, label: 'Send SMS' },
  { icon: <FaSignOutAlt style={{ color: '#dc3545' }} />, label: 'Exit' },
  { icon: <FaPen style={{ color: '#007bff' }} />, label: 'Update Email Field' },
  { icon: <FaCodeBranch style={{ color: '#6c757d' }} />, label: 'Split Paths' },
  { icon: <MdUpdate style={{ color: '#28a745' }} />, label: 'Update SMS Field' },
  { icon: <MdMergeType style={{ color: '#6c757d' }} />, label: 'Join Paths' },
  { icon: <FaTags style={{ color: '#fd7e14' }} />, label: 'Update Tag' },
  { icon: <MdPause style={{ color: '#6f42c1' }} />, label: 'Pause' },
  { icon: <FaFileCsv style={{ color: '#007bff' }} />, label: 'Export CSV' },
  { icon: <FaStop style={{ color: '#dc3545' }} />, label: 'Stop' },
];

const RightPanel = () => {
  return (
    <div className={styles.rightPanel}>
      <div className={styles.header}>
        <h2>Automation</h2>
        <button className={styles.closeButton}>×</button>
      </div>
      <SearchBox placeholder="Search Blocks" />
      <div className={styles.tabs}>
        <button className={`${styles.tab} ${styles.activeTab}`}>Actions</button>
        <button className={styles.tab}>Conditions</button>
      </div>
      <div className={styles.actions}>
        <h3>Add Actions</h3>
        <p>Click and drag to add a new action anywhere on the canvas, then delete or edit them to customize.</p>
        <div className={styles.actionButtons}>
          {actions.map((action, index) => (
            <ActionButton key={index} icon={action.icon} label={action.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
