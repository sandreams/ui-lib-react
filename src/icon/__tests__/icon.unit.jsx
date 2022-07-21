/**
 * @jest-environment jsdom
 */
import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../index';
import { render, fireEvent, screen } from '@testing-library/react';
describe('icon components', () => {
  it('test snapshots', () => {
    const json = renderer.create(<Icon name="editor" />).toJSON();
    expect(json).toMatchSnapshot();
  });
  it('test icon click', () => {
    const fn = jest.fn();
    const { queryByTestId, debug } = render(<Icon data-testid="aaa" name="editor" onClick={fn} />);
    // debug();
    fireEvent.click(queryByTestId('aaa'));
    expect(fn).toBeCalled();
  });
});
