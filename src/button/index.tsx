import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import { scopedClassMaker } from 'src/helpers/classes';
import classnames from 'src/helpers/classnames';
import Icon, { IconName } from 'src/icon';
import './button.scss';

const scopedClass = scopedClassMaker('sand-btn', '-');
const sc = scopedClass;
interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  colorSchema?: 'default' | 'primary' | 'success' | 'error' | 'warning';
  type?: 'outline' | 'fill' | 'ghost' | 'link';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  iconLeft?: ReactElement | IconName;
  iconRight?: ReactElement | IconName;
  loading?: boolean;
  disabled?: boolean;
  loadingText?: string;
}
const Button: React.FC<React.PropsWithChildren<Props>> = ({
  type = 'outline',
  colorSchema = 'default',
  size = 'md',
  iconLeft,
  iconRight,
  children,
  loading,
  disabled,
  loadingText,
  ...restProps
}) => {
  const showOverlay = loading || disabled;
  return (
    <button
      type="button"
      className={classnames(
        sc(''),
        sc(type),
        sc('schema--' + colorSchema),
        sc(size),
        showOverlay ? sc('disabled') : ''
      )}
      {...restProps}
    >
      {loading ? (
        <>
          <div className={sc('loading__wrapper')}>
            <span className={sc('loading')} />
          </div>
          {loadingText}
        </>
      ) : null}
      {iconLeft ? (
        <span className={sc('icon--left')}>{typeof iconLeft === 'string' ? <Icon name={iconLeft} /> : iconLeft}</span>
      ) : null}
      {!loading ? children || '按钮' : null}
      {iconRight ? (
        <span className={sc('icon--right')}>
          {typeof iconRight === 'string' ? <Icon name={iconRight} /> : iconRight}
        </span>
      ) : null}
    </button>
  );
};

Button.defaultProps = {
  type: 'outline',
  colorSchema: 'default',
  size: 'md',
  loading: false,
  disabled: false,
  loadingText: '',
};

export default Button;
