/* external imports */
import React from 'react';
import PropTypes from 'prop-types';
/* styles */
import styles from './ActionButton.module.scss';

const ActionButton = ({ icon, label }) => {
  return (
    <div className={styles.actionButton}>
      <div className={styles.icon}>{icon}</div>
      <span>{label}</span>
    </div>
  );
};

ActionButton.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
};

export default ActionButton;
