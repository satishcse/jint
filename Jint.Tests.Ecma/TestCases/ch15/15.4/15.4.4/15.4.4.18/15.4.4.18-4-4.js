/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.18/15.4.4.18-4-4.js
 * @description Array.prototype.forEach throws TypeError if callbackfn is boolean
 */


function testcase() {

  var arr = new Array(10);
  try {
    arr.forEach(true);    
  }
  catch(e) {
    if(e instanceof TypeError)
      return true;  
  }

 }
runTestCase(testcase);
