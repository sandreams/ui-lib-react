import React, { useState } from 'react';
import Dialog, { alertModal } from './index';
import Button from 'src/button';

const DialogExample: React.FC = () => {
  const [v, setVisible] = useState(false);
  const [v2, setVisible2] = useState(false);
  return (
    <section>
      <div className="example1" style={{ margin: '20px', zIndex: 10, background: 'white' }}>
        <h1>Example1:</h1>
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
      <div className="example2" style={{ margin: '20px', zIndex: 9 }}>
        <h1>Example2:</h1>
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
      <div className="example3" style={{ margin: '0 20px', zIndex: 8 }}>
        <h1>Example3:</h1>
        <Button
          type="fill"
          onClick={() => {
            alertModal('点击弹出 API');
          }}
        >
          点击弹出
        </Button>
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
