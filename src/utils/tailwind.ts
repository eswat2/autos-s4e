const tw = (...classes: (false | null | undefined | string)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export { tw };
export default tw;
