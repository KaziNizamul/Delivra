import { useState } from 'react';
import { FaHome, FaClipboardList, FaBullhorn, FaRobot, FaChartBar, FaImage, FaDollarSign } from 'react-icons/fa';
import NavButton from './NavButton';
import styles from './LeftPanel.module.scss';

const LeftPanel = () => {
  const [activeButton, setActiveButton] = useState('automation');

  const buttons = [
    { href: '/', icon: FaHome, id: 'home' },
    { href: '/tasks', icon: FaClipboardList, id: 'tasks' },
    { href: '/announcements', icon: FaBullhorn, id: 'announcements' },
    { href: '/automation', icon: FaRobot, id: 'automation' },
    { href: '/analytics', icon: FaChartBar, id: 'analytics' },
    { href: '/gallery', icon: FaImage, id: 'gallery' },
    { href: '/pricing', icon: FaDollarSign, id: 'pricing' },
  ];

  return (
    <div className={styles.leftPanel}>
      <div className={styles.logo}>D</div>
      <div className={styles.horizontalLine} />
      <nav>
        <ul>
          {buttons.map(({ href, icon, id }) => (
            <NavButton
              key={id}
              href={href}
              icon={icon}
              isActive={activeButton === id}
              onClick={() => setActiveButton(id)}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default LeftPanel;
