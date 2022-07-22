import React, { useState } from 'react';
import Dialog from './index';
const DialogExample: React.FC = () => {
  const [v, setVisible] = useState(false);
  return (
    <section>
      <button
        onClick={() => {
          setVisible(!v);
        }}
      >
        可见
      </button>
      <Dialog visible={v}>aaa</Dialog>
    </section>
  );
};
export default DialogExample;
