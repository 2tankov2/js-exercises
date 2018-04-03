class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  // BEGIN (write your solution here)
  select(fun) {
    this.collection = this.collection.map(fun);
    return this;
  }
  // END

  // BEGIN (write your solution here)
  orderBy(func, edit = 'asc') {
    const compare = (a, b) => {
      const a1 = func(a);
      const b1 = func(b);
      if (edit === 'asc') {
        return +(a1 > b1) || +(a1 === b1) - 1;
      } return b1 - a1;
    };
    this.collection = this.collection.sort(compare);
    return this;
  }
  // END

  /* BEGIN
orderBy(fn, direction = 'asc') {
  const comparator = (a, b) => {
    const a1 = fn(a);
    const b1 = fn(b);

    const compareResult = direction === 'asc' ? 1 : -1;

    if (a1 > b1) {
      return compareResult;
    } else if (a1 < b1) {
      return -compareResult;
    }

    return 0;
  };
  this.collection.sort(comparator);
  return this;
}
/ END */

  where(fn) {
    this.collection = this.collection.filter(fn);
    return this;
  }

  toArray() {
    return this.collection.slice();
  }
}

export default Enumerable;
