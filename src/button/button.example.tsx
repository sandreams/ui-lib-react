import React from 'react';
import Button, { BtnColorSchema } from './index';

const ButtonExample: React.FC = () => {
  return (
    <section>
      <Button colorSchema={BtnColorSchema.normal} />
    </section>
  );
};
export default ButtonExample;
