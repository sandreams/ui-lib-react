import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@/components/Button';
import { a } from './dark';
interface Prop {
  name: string;
}
const App: React.FC<Prop> = (props) => {
  return (
    <div>
      <Button />
      {props.name}
    </div>
  );
};
ReactDOM.render(<App name="fan" />, document.getElementById('app'));
