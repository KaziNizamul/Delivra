/* external imports */
import React from 'react';
import PropTypes from 'prop-types';
/* internal components */
import ActionsTab from './Actions';
import ConditionsTab from './Conditions';
/* styles */
import styles from './Tabs.module.scss';

const Tabs = ({ tabs, activeTab, onTabClick, searchTerm }) => {
  return (
    <div>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab.toLowerCase() === tab.toLowerCase() ? styles.activeTab : ""}`}
            onClick={() => onTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {activeTab.toLowerCase() === 'actions' && <ActionsTab searchTerm={searchTerm} />}
      {activeTab.toLowerCase() === 'conditions' && <ConditionsTab searchTerm={searchTerm} />}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default Tabs;
