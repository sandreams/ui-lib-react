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
      <Dialog
        visible={v}
        onClose={() => {
          setVisible(false);
        }}
        confirmText="OK"
        cancelText="关闭"
        closeOnOverlayClick={false}
        onCancel={(e) => {
          console.log('cancel :>> ', e);
        }}
        onConfirm={(e) => {
          console.log('confirm :>> ', e);
        }}
      >
        aaa
      </Dialog>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
      <p>aaa</p>
    </section>
  );
};
export default DialogExample;
