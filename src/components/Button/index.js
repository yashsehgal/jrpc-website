
import React from 'react';
import './button-styles.css';

export default function Button({children, className, id, ...props}) {
  const buttonComponentProps = {
    'className': className ? `solid-button ${className}` : `solid-button`,
    'id': id ? id : '',
    'children': children
  };
  return (
    <React.Fragment>
      <button className={buttonComponentProps.className} id={buttonComponentProps.id} {...props}>
        {buttonComponentProps.children ? buttonComponentProps.children : <React.Fragment></React.Fragment>}
      </button>
    </React.Fragment>
  )
}