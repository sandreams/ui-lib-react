import React from 'react';
import sc from './scoped-class';

const x: React.FC = () => {
  return <footer className={sc('footer')}>footer</footer>;
};

export default x;
