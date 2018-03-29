// BEGIN (write your solution here)
const uniq = arr => arr.reduce((acc, value) =>
  acc.includes(value) ? acc : acc.concat(value), []);
export default uniq;
// END

// BEGIN
export default coll => coll.reduce((acc, value) =>
  (acc.includes(value) ? acc : acc.concat(value)), []);
// END
