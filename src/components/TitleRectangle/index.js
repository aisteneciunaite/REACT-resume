import React from 'react';
import Title from '../Title';
import './index.css';

function Title_Rectangle({ title, level = '3' }) {
  return (
    <div className="Title_Rectangle">
      <Title level={level}>{title}</Title>
    </div>
  );
}

export default Title_Rectangle;
