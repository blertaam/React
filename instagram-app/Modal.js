import React from 'react';

function Modal() {
  return (
    <div className="modal">
      <div className="screen screen-left">
        <h2>Screen 1</h2>
        <p>Content for the left screen</p>
      </div>
      <div className="screen screen-right">
        <h2>Screen 2</h2>
        <p>Content for the right screen</p>
      </div>
    </div>
  );
}

export default Modal;
