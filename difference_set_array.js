// BEGIN (write your solution here)
const difference = (set1, set2) => {
  const arr1 = Array.from(set1);
  const result = arr1.filter(value => !set2.has(value));
  return new Set(result);
};
export default difference;
// END

// BEGIN
export default (set1, set2) =>
  new Set(Array.from(set1).filter(value => !set2.has(value)));
// END
