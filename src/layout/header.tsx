import React from 'react';
import sc from './scoped-class';

const x: React.FC = () => {
  return <header className={sc('header')}>header</header>;
};

export default x;
