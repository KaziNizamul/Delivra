/* external imports */
import React, { useState } from "react";
/* internal components */
import SearchBox from "./SearchBox";
import Tabs from "./Tabs";
/* styles */
import styles from "./RightPanel.module.scss";

const RightPanel = () => {
  const [activeTab, setActiveTab] = useState("actions");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles.rightPanel}>
      <div className={styles.header}>
        <h2>Automation</h2>
        <button className={styles.closeButton}>×</button>
      </div>
      <SearchBox
        placeholder="Search Blocks"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Tabs tabs={['Actions', 'Conditions']} activeTab={activeTab} onTabClick={setActiveTab} searchTerm={searchTerm} />
    </div>
  );
};

export default RightPanel;
