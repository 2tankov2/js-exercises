// eslint-disable-next-line
import { l, isEmpty, reverse, toString as listToString, isList, head, tail, cons, reduce } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const flatten = (list) =>{
  const listing = (items, newAcc) => {
    const result = reduce((item, acc) =>{
      if (isList(item)){
        return isEmpty(item) ? acc : listing(item, acc);
      }
      return cons(item, acc);
    }, newAcc, items);
    return result;
  };
  return reverse(listing(list, l()));
};
export default flatten;
// END
