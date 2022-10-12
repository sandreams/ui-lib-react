import React from 'react';
import sc from './scoped-class';
const x: React.FC = () => {
  return <aside className={sc('aside')}>aside</aside>;
};

export default x;
