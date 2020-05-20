import React from 'react';
import TitleRectangle from '../TitleRectangle';
import Link from '../Link';
import './index.css';

function LinksBlock({ children, title, links }) {
  let linkElements = links.map(link => <Link link={link}></Link>);
  return (
    <div className="LinksBlock">
      <TitleRectangle title={title}></TitleRectangle>
      {linkElements}
    </div>
  );
}

export default LinksBlock;
