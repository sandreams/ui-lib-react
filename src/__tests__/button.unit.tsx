/* eslint-disable no-undef */
import renderer from 'react-test-renderer'
import { Button } from '../components/Button'
// const add = (a: number, b: number) => {
//   return a + b
// }

describe('快照测试', () => {
  it('rendered correctly', () => {
    const tree = renderer.create(<Button />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
