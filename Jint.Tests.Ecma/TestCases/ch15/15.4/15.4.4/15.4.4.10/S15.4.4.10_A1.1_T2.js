// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * If start is positive, use min(start, length).
 * If end is positive, use min(end, length)
 *
 * @path ch15/15.4/15.4.4/15.4.4.10/S15.4.4.10_A1.1_T2.js
 * @description length > end = start > 0
 */

var x = [0,1,2,3,4];
var arr = x.slice(3,3);

//CHECK#1
arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  $ERROR('#1: var x = [0,1,2,3,4]; var arr = x.slice(3,3); arr is Array object. Actual: ' + (arr.getClass()));
}

//CHECK#2
if (arr.length !== 0) {
  $ERROR('#2: var x = [0,1,2,3,4]; var arr = x.slice(3,3); arr.length === 0. Actual: ' + (arr.length));
}      

//CHECK#3
if (arr[0] !== undefined) {
  $ERROR('#3: var x = [0,1,2,3,4]; var arr = x.slice(3,3); arr[0] === undefined. Actual: ' + (arr[0]));
}

