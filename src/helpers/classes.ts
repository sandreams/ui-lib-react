const scopedClassMaker = (prefix: string, linker = '-') => {
  return (name: string, ...options: (string | undefined | null)[]) => {
    const result = [prefix, name].filter(Boolean).join(linker);
    if (options) {
      return [result, ...options].filter(Boolean).join(' ');
    } else {
      return result;
    }
  };
};
export { scopedClassMaker };
