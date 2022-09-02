import React, { useState } from 'react';
import Dialog from './index';
import Button from 'src/button';

const DialogExample: React.FC = () => {
  const [v, setVisible] = useState(false);
  const [v2, setVisible2] = useState(false);
  return (
    <section>
      <div className="example1" style={{ margin: '20px', zIndex: 10, background: 'white', border: '1px solid red' }}>
        <Button
          onClick={() => {
            setVisible(!v);
          }}
        >
          默认
        </Button>
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
      </div>
      <div className="example2" style={{ margin: '0 20px', zIndex: 9 }}>
        <Button
          onClick={() => {
            setVisible2(!v2);
          }}
        >
          点击遮罩层关闭
        </Button>
        <Dialog
          titleText="点击遮罩层关闭"
          visible={v2}
          onClose={() => {
            setVisible2(false);
          }}
          confirmText="OK"
          cancelText="关闭"
          closeOnOverlayClick={true}
          onCancel={(e) => {
            console.log('cancel :>> ', e);
          }}
          onConfirm={(e) => {
            console.log('confirm :>> ', e);
          }}
        >
          aaa
        </Dialog>
      </div>

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
