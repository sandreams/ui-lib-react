import React, { useRef } from 'react';
import { scopedClassMaker } from 'src/helpers/classes';
import Icon, { IconName } from 'src/icon';
import Button, { colorSchema } from 'src/button';
import './dialog.scss';

const scopedClass = scopedClassMaker('sand-ui-dialog', '__');
const sc = scopedClass;
interface Props {
  visible: boolean;
  cancelText?: string;
  confirmText?: string;
  cancelColorSchema?: colorSchema;
  confirmColorSchema?: colorSchema;
  onClose: React.MouseEventHandler;
  closeOnOverlayClick?: boolean;
}
const Dialog: React.FC<React.PropsWithChildren<Props>> = ({
  visible,
  children,
  cancelText,
  confirmText,
  onClose,
  cancelColorSchema,
  confirmColorSchema,
  closeOnOverlayClick,
}) => {
  const aaa = useRef(null);
  const onClickClose: React.MouseEventHandler = (e) => {
    onClose(e);
  };
  const onClickOverlay: React.MouseEventHandler = (e) => {
    // console.log('aaa :>> ', aaa.current);
    // console.log('e :>> ', e.target);
    console.log('isEqual :>> ', e.target === aaa.current);
    if (closeOnOverlayClick) {
      onClose(e);
    }
  };
  return visible ? (
    <div className={sc('dialog')}>
      <div className={sc('overlay')} />
      <div ref={aaa} className={sc('content-container')} onClick={onClickOverlay}>
        <section className={sc('content')}>
          <header className={sc('header')}> 弹出框标题 </header>
          <button className={sc('close')} onClick={onClickClose}>
            <Icon name={IconName.close} />
          </button>
          <main className={sc('body')}>{children}</main>
          <footer className={sc('footer')}>
            <Button type="fill" colorSchema={cancelColorSchema}>
              {cancelText}
            </Button>
            <Button type="fill" colorSchema={confirmColorSchema}>
              {confirmText}
            </Button>
          </footer>
        </section>
      </div>
    </div>
  ) : null;
};
Dialog.defaultProps = {
  cancelText: '取消',
  confirmText: '确定',
  cancelColorSchema: 'default',
  confirmColorSchema: 'primary',
  closeOnOverlayClick: true,
};
export default Dialog;
