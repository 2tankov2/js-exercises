// eslint-disable-next-line
import { l, isEmpty, head, tail, cons, concat, filter, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const sort = (list) =>{
 if (isEmpty(list) || isEmpty(tail(list))){
   return list;
 }
 const pilot = head(list);
 const right = filter(element => element > pilot, list);
 const left = filter(element => element < pilot, list);
 const middle = filter(element => element === pilot, list);
 return concat(concat(sort(left), middle), sort(right));
 };
export default sort;
// END
