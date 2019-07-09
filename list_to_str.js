/* Необходимо реализовать набор функций для работы со списками, построенными на базе строк. Данный вид списка представляет собой текст, где каждая строчка — это элемент списка, например:

hello
world

Это пример списка с двумя элементами hello и world.
*/

const delimiter = '\n';

const l = (...items) => items.join(delimiter);

// BEGIN (write your solution here)
const getList = arr => arr.split(delimiter);

const toString = list => `(${getList(list).join(', ')})`;

const head = list => getList(list)[0];

const tail = list => getList(list).slice(1).join(', ');

const isEmpty = list => list === '';

const cons = (element, list) => {
  if (isEmpty(list)) {
    return element;
  }
  const newList = getList(list);
  newList.unshift(element);
  return newList.join(', ');
};

const filter = (func, list) => {
  if (isEmpty(list)) {
    return '';
  }
  const current = head(list);
  const tailElements = tail(list).split(', ').join(delimiter);

  if (func(current)) {
    return cons(current, filter(func, tailElements));
  }
  return filter(func, tailElements);
};

const map = (func, list) => {
  if (isEmpty(list)) {
    return '';
  }
  const tailElements = tail(list).split(', ').join(delimiter);
  const newElement = func(head(list));

  return cons(newElement, map(func, tailElements));
};

const reduce = (func, acc, list) => {
  if (isEmpty(list)) {
    return acc;
  }
  const tailElements = tail(list).split(', ').join(delimiter);
  return reduce(func, func(head(list), acc), tailElements);
};

/*
// BEGIN
export const head = (list) => {
  const index = list.indexOf(delimiter);
  return list.substr(0, index > -1 ? index : list.length);
};

export const tail = (list) => {
  const index = list.indexOf(delimiter);
  return index > -1 ? list.substr(index + delimiter.length) : l();
};

export const isEmpty = list => list.length === 0;

export const cons = (item, list) => (isEmpty(list) ? item : `${item}${delimiter}${list}`);

export const reverse = list => reduce((item, acc) => cons(item, acc), l(), list);

export const reduce = (func, init, list) => {
  const iter = (rest, acc) => {
    if (isEmpty(rest)) {
      return acc;
    }
    return iter(tail(rest), func(head(rest), acc));
  };
  return iter(list, init);
};

export const filter = (predicate, list) => {
  const reversedResult = reduce((item, acc) => (predicate(item) ? cons(item, acc) : acc), l(), list);
  return reverse(reversedResult);
};

export const map = (func, list) => {
  const reversedResult = reduce((item, acc) => cons(func(item), acc), l(), list);
  return reverse(reversedResult);
};

export const toString = (list) => {
  const str = reduce((item, acc) => `${acc}, ${item}`, head(list), tail(list));
  return `(${str})`;
};
// END
*/