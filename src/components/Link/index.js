import React from 'react';
import './index.css';

function Link({ link }) {
  return (
    <a className="Link" href={link.ref}>
      <span>{link.text}</span>
    </a>
  );
}

export default Link;
