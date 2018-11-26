Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход 
упорядоченный список точек, являющихся вершинами многоугольника, вычисляет
 и возвращает периметр многоугольника.

 import { getX, getY } from 'hexlet-points';
 import { isEmpty, head, tail } from 'hexlet-pairs-data';
 
 // BEGIN (write your solution here)
 const long = (pointX, pointY) => {
   const x1 = getX(pointX);
   const y1 = getY(pointX);
   const x2 = getX(pointY);
   const y2 = getY(pointY);
   return Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
 };
 
 const calculatePoygonPerimeter = (items) => {
   if ((isEmpty(items)) || (isEmpty(tail(items))) || (isEmpty(tail(tail(items))))) {
     return null;
   }
   const firstEl = head(items);
   const iter = (count, acc) => {
     if (isEmpty(tail(count))) {
       return acc + long(head(count), firstEl);
     } return iter(tail(count), acc + long(head(count), head(tail(count))));
   }; return iter(items, 0);
 };
 
 export default calculatePoygonPerimeter;
 // END

 // BEGIN
const areThereLessThenThreePoints = (points) => {
    const iter = (list, acc) => {
      if (acc > 2) {
        return false;
      }
  
      if (isEmpty(list)) {
        return true;
      }
  
      return iter(tail(list), acc + 1);
    };
  
    return iter(points, 0);
  };
  
  const segmentLength = (point1, point2) => {
    const x1 = getX(point1);
    const x2 = getX(point2);
    const y1 = getY(point1);
    const y2 = getY(point2);
  
    return Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
  };
  
  export default (points) => {
    if (areThereLessThenThreePoints(points)) {
      return null;
    }
  
    const startPoint = head(points);
    const iter = (list) => {
      const currentPoint = head(list);
      const rest = tail(list);
      if (isEmpty(rest)) {
        return segmentLength(currentPoint, startPoint);
      }
  
      const nextPoint = head(rest);
      return segmentLength(currentPoint, nextPoint) + iter(rest);
    };
  
    return iter(points);
  };
  // END