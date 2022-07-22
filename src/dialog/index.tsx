import React from 'react';
import classnames from 'src/helpers/classnames';
import './dialog.scss';
interface Props {
  visible: boolean;
}
const Dialog: React.FC<React.PropsWithChildren<Props>> = ({ visible, children }) => {
  return visible ? (
    <>
      <div className={classnames('sand-ui-dialog__overlay')} />
      <div className={classnames('sand-ui-dialog__content')}>{children}</div>
    </>
  ) : null;
};
export default Dialog;
