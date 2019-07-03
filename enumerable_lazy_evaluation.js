class Enumerable {
    // BEGIN (write your solution here)
    constructor (collection, operations) {
      this.collection = collection;
      this.operations = operations || [];
    }
  
    select (fn) {
      const newOps = this.operations.slice();
      newOps.push(coll => coll.map(fn));
      return new Enumerable(this.collection.slice(), newOps);
    }
  
    orderBy(fn, direction = 'asc') {
      const newOps = this.operations.slice();
      const compare = (a, b) => {
      const a1 = fn(a);
      const b1 = fn(b);
      const result = direction === 'asc' ? 1 : -1;
            if (a1 > b1) {
              return result;
            } else if (a1 < b1) {
              return -result;
            }
            return 0;
          };
      newOps.push(coll => coll.sort(compare));
      return new Enumerable(this.collection.slice(), newOps);
    }
    
    where(fn) {
      const newOps = this.operations.slice();
      newOps.push(coll => coll.filter(fn));
      return new Enumerable(this.collection.slice(), newOps);
    }
  
    toArray() {
      return this.operations.reduce((acc, operation) => operation(acc), this.collection);
    }

    /*
    constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  select(fn) {
    return this.build(coll => coll.map(fn));
  }

  orderBy(fn, direction = 'asc') {
    const compareResult = direction === 'asc' ? 1 : -1;
    const comparator = (a, b) => {
      const a1 = fn(a);
      const b1 = fn(b);


      if (a1 > b1) {
        return compareResult;
      } else if (a1 < b1) {
        return -compareResult;
      }

      return 0;
    };
    return this.build(coll => coll.sort(comparator));
  }

  where(fn) {
    return this.build(coll => coll.filter(fn));
  }

  toArray() {
    return this.operations.reduce((acc, func) => func(acc), this.collection);
  }
    */
    // END
  }
  
  export default Enumerable;
  