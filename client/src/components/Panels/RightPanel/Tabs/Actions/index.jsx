/* external imports */
import React from 'react';
import PropTypes from 'prop-types';
import { useDrag } from "react-dnd";
import ActionButton from '../../ActionButton';
import { actions } from '../Tabs.constant';
/* styles */
import styles from '../Tabs.module.scss';

const ActionsTab = ({ searchTerm }) => {
  const filteredActions = actions.filter((action) =>
    action.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderItems = () => {
    return filteredActions.map((item, index) => {
      const [{ isDragging }, drag] = useDrag(() => ({
        type: "node",
        item: {
          icon: item.icon,
          label: item.label,
          type: "action",
        },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }));

      return (
        <div
          key={index}
          ref={drag}
          className={styles.actionButtonWrapper}
          style={{ opacity: isDragging ? 0.5 : 1 }}
        >
          <ActionButton icon={item.icon} label={item.label} />
        </div>
      );
    });
  };

  return <div className={styles.actionButtons}>{renderItems()}</div>;
};

ActionsTab.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export default ActionsTab;
