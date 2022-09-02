import React, { useRef } from 'react';
import { scopedClassMaker } from 'src/helpers/classes';
import Icon, { IconName } from 'src/icon';
import Button, { colorSchema } from 'src/button';
import './dialog.scss';
import ReactDOM from 'react-dom';

const scopedClass = scopedClassMaker('sand-ui-dialog', '__');
const sc = scopedClass;
interface Props {
  titleText?: string;
  visible: boolean;
  cancelText?: string;
  confirmText?: string;
  cancelColorSchema?: colorSchema;
  confirmColorSchema?: colorSchema;
  onClose: React.MouseEventHandler;
  closeOnOverlayClick?: boolean;
  onCancel?: React.MouseEventHandler;
  onConfirm?: React.MouseEventHandler;
}
const Dialog: React.FC<React.PropsWithChildren<Props>> = ({
  titleText,
  visible,
  children,
  cancelText,
  confirmText,
  onClose,
  cancelColorSchema,
  confirmColorSchema,
  closeOnOverlayClick,
  onCancel,
  onConfirm,
}) => {
  const container = useRef(null);
  const onClickClose: React.MouseEventHandler = (e) => {
    onClose(e);
  };
  const onClickOverlay: React.MouseEventHandler = (e) => {
    e.stopPropagation();
    if (container.current === e.target && closeOnOverlayClick) {
      onClose(e);
    }
  };
  const onClickCancel: React.MouseEventHandler = (e) => {
    if (onCancel) {
      onCancel(e);
    }
  };
  const onClickConfirm: React.MouseEventHandler = (e) => {
    if (onConfirm) {
      onConfirm(e);
    }
  };
  const element = visible ? (
    <div className={sc('dialog')}>
      <div className={sc('overlay')} />
      <div ref={container} className={sc('content-container')} onClick={onClickOverlay}>
        <section className={sc('content')}>
          <header className={sc('header')}> {titleText} </header>
          <button className={sc('close')} onClick={onClickClose}>
            <Icon name={IconName.close} />
          </button>
          <main className={sc('body')}>{children}</main>
          <footer className={sc('footer')}>
            <Button type="fill" colorSchema={cancelColorSchema} onClick={onClickCancel}>
              {cancelText}
            </Button>
            <Button type="fill" colorSchema={confirmColorSchema} onClick={onClickConfirm}>
              {confirmText}
            </Button>
          </footer>
        </section>
      </div>
    </div>
  ) : null;
  return ReactDOM.createPortal(element, document.body);
};
Dialog.defaultProps = {
  titleText: '弹出框标题',
  cancelText: '取消',
  confirmText: '确定',
  cancelColorSchema: 'default',
  confirmColorSchema: 'primary',
  closeOnOverlayClick: true,
};
export default Dialog;
