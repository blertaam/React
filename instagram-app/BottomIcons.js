import React from 'react';
import { FaHome, FaSearch, FaUser } from 'react-icons/fa';

function BottomIcons({ onApiClick, onModalClick }) {
  return (
    <div className="bottom-icons">
      <FaHome onClick={onApiClick} />
      <FaSearch onClick={onModalClick} />
      <FaUser />
    </div>
  );
}

export default BottomIcons;
