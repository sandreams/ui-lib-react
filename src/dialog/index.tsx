import React, { ReactFragment, ReactNode, useRef } from 'react';
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
  onClose?: React.MouseEventHandler & (() => void);
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
    onClose && onClose(e);
  };
  const onClickOverlay: React.MouseEventHandler = (e) => {
    e.stopPropagation();
    if (container.current === e.target && closeOnOverlayClick) {
      onClose && onClose(e);
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
type ConfirmProps =
  | Omit<Props, 'onClose' | 'visible' | 'showCancelBtn' | 'showConfirmBtn'> & {
      yes?: () => void;
      no?: () => void;
    };
type AlertProps = Omit<
  Props,
  'onClose' | 'visible' | 'showCancelBtn' | 'showConfirmBtn' | 'onCancel' | 'onConfirm' | 'closeOnOverlayClick'
>;
type ModalProps = Omit<Props, 'onClose' | 'visible'>;

const modal = (
  content: ReactNode | ReactFragment,
  options: Omit<Props, 'visible'> & { yes?: () => void; no?: () => void }
) => {
  const { yes, no, ...rest } = options;
  let onYes;
  let onNo;
  const div = document.createElement('div');
  const onClose = () => {
    ReactDOM.render(React.cloneElement(node, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  if (yes) {
    onYes = () => {
      onClose();
      yes();
    };
    rest.onConfirm = onYes;
  }
  if (no) {
    onNo = () => {
      onClose();
      no();
    };
    rest.onCancel = onNo;
  }
  const node = (
    <Dialog visible={true} onClose={no ? onNo : onClose} {...rest}>
      {content}
    </Dialog>
  );
  ReactDOM.render(node, div);
  return onClose;
};
const showAlert = (content: string, options: AlertProps = {}) => {
  modal(content, { ...options, showCancelBtn: false, showConfirmBtn: false });
};
const showConfirm = (content: string, options: ConfirmProps) => {
  modal(content, {
    showCancelBtn: true,
    showConfirmBtn: true,
    closeOnOverlayClick: false,
    ...options,
  });
};
const showModal = (content: ReactNode | ReactFragment, options: ModalProps = {}) => {
  return modal(content, { ...options, showCancelBtn: false, showConfirmBtn: false });
};
export default Dialog;
export { showAlert, AlertProps, showConfirm, ConfirmProps, showModal };
