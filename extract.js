import { toString, map } from 'hexlet-pairs-data'; // eslint-disable-line
import { getAttribute, getName } from './tags';

// BEGIN (write your solution here)
const extract = (tags) => {
  const obj = {
    a: 'href',
    link: 'href',
    img: 'src',
  };
  return map(tag => getAttribute(obj[getName(tag)], tag), tags);
};
export default extract;
// END
