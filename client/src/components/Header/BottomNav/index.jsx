/* external imports */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaBug, FaRocket, FaCheckCircle } from "react-icons/fa";
import { MdScheduleSend } from "react-icons/md";
import { notification, Spin } from "antd";
/* internal components */
import { triggerWorkflow } from "../../WorkFlow";
import Loader from "../../../shared/Loader";
/* styles */
import styles from "./BottomNav.module.scss";

const BottomNav = () => {
  const [loading, setLoading] = useState(false);
  const nodes = useSelector((state) => state.workFlow);

  const handleTestClick = async () => {
    setLoading(true);
    try {
      const message = await triggerWorkflow(nodes);
      notification.success({
        message: "Success",
        description: message,
        placement: "bottom",
      });
    } catch (error) {
      notification.error({
        message: "Error",
        description:
          "Something went wrong, please check your workflow and try again",
        placement: "bottom",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className={styles.loaderContainer}>
          <Spin size="large" />
        </div>
      )}
      <nav className={styles.bottomNav}>
        <ul>
          <li className={styles.navItem}>
            <FaCheckCircle
              className={`${styles.navIcon} ${styles.setupIcon}`}
            />
            <span>Setup</span>
          </li>
          <li className={`${styles.navItem} ${styles.active}`}>
            <FaRocket className={styles.navIcon} />
            <span>Design</span>
          </li>
          {/* <li className={styles.navItem}>
          <FaUserFriends className={styles.navIcon} />
          <span>Contacts</span>
        </li>
        <li className={styles.navItem}>
          <FaSearch className={styles.navIcon} />
          <span>Preview</span>
        </li> */}
          <li className={styles.navItem} onClick={handleTestClick}>
            <FaBug className={styles.navIcon} />
            <span>Test</span>
          </li>
          <li className={styles.navItem}>
            <MdScheduleSend className={styles.navIcon} />
            <span>Schedule</span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default BottomNav;
