import React from 'react';
import './index.css';

function Pill({ children, modifier, tag = 'li' }) {
  const classes = modifier ? `Pill Pill--${modifier}` : 'Pill';
  const Tag = tag;
  return <Tag className={classes}>{children}</Tag>;
}

export default Pill;
