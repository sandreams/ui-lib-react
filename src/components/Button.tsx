import React from 'react';
const fn = () => {
  console.log(1);
};
const Button: React.FC = () => {
  return (
    <div>
      <button onClick={fn}>按钮</button>
    </div>
  );
};
export default Button;
