import React from 'react';
import { scopedClassMaker } from 'src/helpers/classes';
import Icon, { IconName } from 'src/icon';
import './dialog.scss';

const scopedClass = scopedClassMaker('sand-ui-dialog', '__');
const sc = scopedClass;
interface Props {
  visible: boolean;
}
const Dialog: React.FC<React.PropsWithChildren<Props>> = ({ visible, children }) => {
  return visible ? (
    <>
      <div className={sc('overlay')} />
      <div className={sc('content-container')}>
        <section className={sc('content')}>
          <header className={sc('header')}> Dialog Title </header>
          <button className={sc('close')}>
            <Icon name={IconName.close} />
          </button>
          <main className={sc('body')}>{children}</main>
          <footer className={sc('footer')}>
            <button>取消</button>
            <button>确定</button>
          </footer>
        </section>
      </div>
    </>
  ) : null;
};
export default Dialog;
