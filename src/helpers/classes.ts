const scopedClassMaker = (prefix: string, linker = '-') => {
  return (name: string) => {
    return [prefix, name].filter(Boolean).join(linker);
  };
};
export { scopedClassMaker };
