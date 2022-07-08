import React from 'react';
import ReactDOM from 'react-dom';
import Icon, { IconName } from './icon';
import './index.scss';
interface Prop {
  name: string;
}
const App: React.FC<Prop> = (props) => {
  const handleClick: React.MouseEventHandler = (e) => {
    console.log(e.target);
  };
  return (
    <div>
      <Icon name={IconName.charts} className="darklin" onClick={handleClick} />
      <span>图标</span>
    </div>
  );
};
ReactDOM.render(<App name="fan" />, document.getElementById('app'));
