import React from 'react';
import sc from './scoped-class';

const x: React.FC = () => {
  return <main className={sc('aside')}>main</main>;
};

export default x;
