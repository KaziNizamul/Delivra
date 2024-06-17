/* external imports */
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import {
  FaEnvelope,
  FaBell,
  FaSms,
  FaSignOutAlt,
  FaPen,
  FaCodeBranch,
  FaFileCsv,
  FaStop,
  FaTags,
} from "react-icons/fa";
import { MdPause, MdUpdate, MdMergeType } from "react-icons/md";
/* internal components */
import ActionButton from "./ActionButton";
import SearchBox from "./SearchBox";
/* styles */
import styles from "./RightPanel.module.scss";

const actions = [
  { icon: <FaEnvelope style={{ color: "#007bff" }} />, label: "Send Email" },
  { icon: <FaBell style={{ color: "#ffc107" }} />, label: "Lead Alert" },
  { icon: <FaSms style={{ color: "#28a745" }} />, label: "Send SMS" },
  { icon: <FaSignOutAlt style={{ color: "#dc3545" }} />, label: "Exit" },
  { icon: <FaPen style={{ color: "#007bff" }} />, label: "Update Email Field" },
  { icon: <FaCodeBranch style={{ color: "#6c757d" }} />, label: "Split Paths" },
  {
    icon: <MdUpdate style={{ color: "#28a745" }} />,
    label: "Update SMS Field",
  },
  { icon: <MdMergeType style={{ color: "#6c757d" }} />, label: "Join Paths" },
  { icon: <FaTags style={{ color: "#fd7e14" }} />, label: "Update Tag" },
  { icon: <MdPause style={{ color: "#6f42c1" }} />, label: "Pause" },
  { icon: <FaFileCsv style={{ color: "#007bff" }} />, label: "Export CSV" },
  { icon: <FaStop style={{ color: "#dc3545" }} />, label: "Stop" },
];

const RightPanel = () => {
  const [activeTab, setActiveTab] = useState("actions");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredActions = actions.filter((action) =>
    action.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${
            activeTab === "actions" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("actions")}
        >
          Actions
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "conditions" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("conditions")}
        >
          Conditions
        </button>
      </div>
      <div className={styles.actions}>
        <h3>Add Actions</h3>
        <p>
          Click and drag to add a new action anywhere on the canvas, then delete
          or edit them to customize.
        </p>
        <div className={styles.actionButtons}>
          {filteredActions.map((action, index) => {
            const [{ isDragging }, drag] = useDrag(() => ({
              type: "node",
              item: {
                icon: action.icon,
                label: action.label,
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
                <ActionButton icon={action.icon} label={action.label} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
