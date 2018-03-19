import { l, cons, reduce, toString, head } from 'hexlet-pairs-data';

const list = l(0, -10, 2, 38, 2, -2);
const list2 = reduce(Math.max, head(list), list);
console.log(toString(list2));

const list3 = reduce((item, acc) => item + acc, 0, list);
console.log(toString(list3));import { l, cons, reduce, toString, head } from 'hexlet-pairs-data';

const list = l(0, -10, 2, 38, 2, -2);
const list2 = reduce(Math.max, head(list), list);
console.log(toString(list2));

const list3 = reduce((item, acc) => item + acc, 0, list);
console.log(toString(list3));
