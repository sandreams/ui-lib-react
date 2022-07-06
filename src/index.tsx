import React from 'react';
import ReactDOM from 'react-dom';
import Icon, { IconName } from './icon';
import './index.scss';
interface Prop {
  name: string;
}
const App: React.FC<Prop> = (props) => {
  return (
    <div>
      <Icon name={IconName.editor} iconClass="icon" />
      <Icon name={IconName.arrowLeft} iconClass="icon" />
      <span>图标</span>
    </div>
  );
};
ReactDOM.render(<App name="fan" />, document.getElementById('app'));
