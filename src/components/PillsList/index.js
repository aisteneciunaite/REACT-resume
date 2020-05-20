import React from 'react';
import Pill from '../Pill';
import './index.css';

function PillsList({ items }) {
  let list = items.map(item => <Pill modifier={item.modifier}>{item.text}</Pill>);
  return <ul className="PillsList">{list}</ul>;
}

export default PillsList;
