import React, { useState } from 'react';
import Dialog, { showAlert, showConfirm, showModal } from './index';
import Button from 'src/button';

const DialogExample: React.FC = () => {
  const [v, setVisible] = useState(false);
  const [v2, setVisible2] = useState(false);
  const openModal = () => {
    const close = showModal(
      <h1>
        你好{' '}
        <button
          onClick={() => {
            close();
          }}
        >
          关闭
        </button>
      </h1>
    );
  };
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
            showAlert('点击弹出 API', { titleText: 'adasdas' });
          }}
        >
          点击弹出 Alert
        </Button>
      </div>
      <div className="example4" style={{ margin: '0 20px', zIndex: 8 }}>
        <h1>Example4:</h1>
        <Button
          type="fill"
          onClick={() => {
            showConfirm('点击弹出 API', {
              titleText: '确认',
              yes: () => {
                alert('点击了确定');
              },
              no: () => {
                alert('点击了取消');
              },
            });
          }}
        >
          点击弹出 Confirm
        </Button>
      </div>
      <div className="example4" style={{ margin: '0 20px', zIndex: 8 }}>
        <h1>Example5:</h1>
        <Button type="fill" onClick={openModal}>
          点击弹出 Modal
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
