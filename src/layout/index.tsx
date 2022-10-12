import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { scopedClassMaker } from 'src/helpers/classes';

const sc = scopedClassMaker('sand-ui-layout');

const x: React.FC<PropsWithChildren> = (props) => {
  return <section>{props.children}</section>;
};

export default x;
