import classnames from '../classnames';
describe('classnames', () => {
  it('当传入1个参数时，返回这个参数本身', () => {
    const result = classnames('name1');
    expect(result).toBe('name1');
  });
  it('当传入多个参数时，会依次拼接这些参数并用空格隔开', () => {
    const result = classnames('name1', 'name2');
    expect(result).toBe('name1 name2');
  });
  it('当传入参数有falsy值，会过滤掉这些参数', () => {
    const result = classnames('name1', '', undefined, 'name2', null, '中文');
    expect(result).toBe('name1 name2 中文');
  });
  it('什么都不传，会返回空字符串', () => {
    const result = classnames();
    expect(result).toBe('');
  });
});
