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
  showCancelBtn?: boolean;
  showConfirmBtn?: boolean;
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
  showCancelBtn,
  showConfirmBtn,
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
            {showCancelBtn ? (
              <Button type="fill" colorSchema={cancelColorSchema} onClick={onClickCancel}>
                {cancelText}
              </Button>
            ) : null}
            {showConfirmBtn ? (
              <Button type="fill" colorSchema={confirmColorSchema} onClick={onClickConfirm}>
                {confirmText}
              </Button>
            ) : null}
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
  showCancelBtn: true,
  showConfirmBtn: true,
};
type AlertProps = Omit<Props, 'onClose' | 'visible' | 'showCancelBtn' | 'showConfirmBtn'>;
const alertModal = (content: string, options: AlertProps = {}) => {
  const div = document.createElement('div');
  document.body.append(div);
  const node = (
    <Dialog
      visible={true}
      showCancelBtn={false}
      showConfirmBtn={false}
      onClose={() => {
        ReactDOM.render(React.cloneElement(node, { visible: false }), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
      }}
      {...options}
    >
      {content}
    </Dialog>
  );
  ReactDOM.render(node, div);
};
export default Dialog;
export { alertModal, AlertProps };
