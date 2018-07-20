/*
areBracketsBalanced.js

Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, состоящую только из открывающих и закрывающих круглых скобок, и проверяет является ли эта строка корректной. Пустая строка (отсутствие скобок) считается корректной.

Строка считается корректной (сбалансированной), если содержащаяся в ней скобочная структура соответствует требованиям:

    Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
    Закрывающая скобка не должна идти впереди открывающей.

import areBracketsBalanced from 'roundBracketsValidator';

areBracketsBalanced('(())');  // true
areBracketsBalanced('((())'); // false
 */

// export const length = str => str.length;
// export const substr = (str, start, len) => str.substr(start, len);

import { length, substr } from './strings';

// BEGIN1 (write your solution here)
const areBracketsBalanced = (str) =>{
  const sl = '(';
  const sp = ')';
  if (str === ''){
    return true;
  } else if (length(str)%2 === 1) {
    return false;
  } else if (str[0] === sl & str[1] === sp){
    return areBracketsBalanced(substr(str, 2, length(str)-2));
  } else if (str[0] === sl & str[length(str)-1] === sp){
    return areBracketsBalanced(substr(str, 1, length(str)-2));
  } return false;
};

export default areBracketsBalanced;
// END1

// BEGIN2
export default (str) => {
    let acc = 0;
    for (let i = 0; i < length(str); i += 1) {
      const symbol = str[i];
      acc = symbol === '(' ? acc + 1 : acc - 1;
      if (acc < 0) {
        return false;
      }
    }
    return acc === 0;
  };
  // END2