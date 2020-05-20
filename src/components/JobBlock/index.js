import React from 'react';
import Title from '../Title';
import './index.css';

function JobBlock({ job, children }) {
  return (
    <div className="JobBlock">
      <Title level="4">JOB POSITION</Title>
      <span>{job.company}</span>
      <span>{job.years}</span>
      {children}
    </div>
  );
}

export default JobBlock;
