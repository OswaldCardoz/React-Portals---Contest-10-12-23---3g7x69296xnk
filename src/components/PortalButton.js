import React from 'react';
import  ReactDOM  from 'react-dom';

//complete this function using portals
const PortalButton = ({ buttonClick }) => {
    const portalButtonRoot = document.getElementById('portal-button');
    return ReactDOM.createPortal(
      <div>
        <button id="button" onClick={buttonClick}>
          Click
        </button>
      </div>,
      portalButtonRoot
    );
  };

//portal-button id will be used here for portal purpose