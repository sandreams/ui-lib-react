import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';
describe('Button 组件', () => {
  it('测试 snapshot', () => {
    const component = renderer.create(<Button />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
