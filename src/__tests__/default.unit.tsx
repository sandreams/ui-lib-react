const asyncGetData: () => Promise<string> = () => {
  return new Promise((resolve, reject) => {
    resolve('aaa');
  });
};
describe('数组和可迭代对象', () => {
  const testList = ['fan', 'shun', 'dark', 'lin'];
  it('include', () => {
    expect(testList).toContain('dark');
  });
  it('promise', () => {
    return asyncGetData().then((data) => {
      expect(data).toBe('aaa');
    });
  });
});
