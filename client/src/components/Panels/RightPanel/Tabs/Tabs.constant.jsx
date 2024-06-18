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
  FaClipboardCheck,
  FaShoppingCart,
  FaCheckSquare,
  FaLink,
} from "react-icons/fa";
import { MdMergeType, MdPause, MdUpdate } from "react-icons/md";

export const actions = [
  { icon: <FaEnvelope style={{ color: "#007bff" }} />, label: "Send Email" },
  { icon: <FaBell style={{ color: "#ffc107" }} />, label: "Lead Alert" },
  { icon: <FaSms style={{ color: "#28a745" }} />, label: "Send SMS" },
  { icon: <FaSignOutAlt style={{ color: "#dc3545" }} />, label: "Exit" },
  { icon: <FaPen style={{ color: "#007bff" }} />, label: "Update Email Field" },
  { icon: <FaCodeBranch style={{ color: "#6c757d" }} />, label: "Split Paths" },
  { icon: <MdUpdate style={{ color: "#28a745" }} />, label: "Update SMS Field" },
  { icon: <MdMergeType style={{ color: "#6c757d" }} />, label: "Join Paths" },
  { icon: <FaTags style={{ color: "#fd7e14" }} />, label: "Update Tag" },
  { icon: <MdPause style={{ color: "#6f42c1" }} />, label: "Pause" },
  { icon: <FaFileCsv style={{ color: "#007bff" }} />, label: "Export CSV" },
  { icon: <FaStop style={{ color: "#dc3545" }} />, label: "Stop" },
];

export const conditions = [
  { icon: <FaClipboardCheck style={{ color: "#6c757d" }} />, label: "Evaluate Email Contact" },
  { icon: <FaShoppingCart style={{ color: "#6c757d" }} />, label: "Purchased From Clickstream" },
  { icon: <FaCheckSquare style={{ color: "#6c757d" }} />, label: "Opened Email" },
  { icon: <FaLink style={{ color: "#6c757d" }} />, label: "Clicked on Email Link" },
];
