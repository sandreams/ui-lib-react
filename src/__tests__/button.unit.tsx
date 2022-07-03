/* eslint-disable no-undef */
const add = (a: number, b: number) => {
  return a + b
}

describe('add func', () => {
  it('1+1 =2', () => {
    expect(add(1, 2)).toBe(3)
  })
})
