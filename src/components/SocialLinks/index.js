import React from 'react';
import Link from '../Link';
import './index.css';

function SocialLinks({ links }) {
  let linkElements = links.map(link => (
    <li>
      <img src={link.icon} className="socIcon" alt="" /> <Link link={link}></Link>
    </li>
  ));
  return <div className="SocialLinks">{linkElements}</div>;
}

export default SocialLinks;
