function classnames(...names: (string | undefined | null)[]) {
  return names.filter(Boolean).join(' ');
}
export default classnames;
