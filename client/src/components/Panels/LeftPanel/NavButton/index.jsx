import PropTypes from 'prop-types';

const NavButton = ({ href, icon: Icon, isActive, onClick }) => {
  return (
    <li>
      <a
        href={href}
        className={isActive ? 'active' : ''}
        onClick={onClick}
      >
        <Icon />
      </a>
    </li>
  );
};

NavButton.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavButton;
