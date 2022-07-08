import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../index';
describe('icon components', () => {
  it('test snapshots', () => {
    const json = renderer.create(<Icon />).toJSON();
    expect(json).toMatchSnapshot();
  });
});
