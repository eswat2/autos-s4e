const KEY = 'autos-s4e';

const DATA = 'data';
const PICK = 'pick';
// Examples:
//   get(DATA)
//   get(PICK)
//
const bag = {
  get: (tag: string) => {
    const key = tag ? `${KEY}-${tag}` : KEY;
    const json = localStorage.getItem(key);

    return json ? JSON.parse(json) : undefined;
  },
  store: (tag: string, value: any) => {
    const key = tag ? `${KEY}-${tag}` : KEY;
    const json = JSON.stringify(value);

    localStorage.setItem(key, json);
  },
};

export { bag, DATA, PICK };
export default bag;
