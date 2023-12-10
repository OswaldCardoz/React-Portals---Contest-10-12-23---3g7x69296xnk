import React from 'react';
import  ReactDOM  from 'react-dom';

//complete this function using portals
const PortalTextArea = ({ value }) => {
    const portalTextAreaRoot = document.getElementById('portal-textarea');
    return ReactDOM.createPortal(
      <div>
        <textarea id="textarea" value={value} readOnly></textarea>
      </div>,
      portalTextAreaRoot
    );
  };
export default PortalTextArea;
//portal-textarea id will be used here for portal purpose