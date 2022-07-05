import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';
interface Prop {
  name: string;
}
const App: React.FC<Prop> = (props) => {
  return (
    <div>
      <Icon name="darklin" />
    </div>
  );
};
ReactDOM.render(<App name="fan" />, document.getElementById('app'));
