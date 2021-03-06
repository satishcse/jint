// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The false is reserved word
es5id: 8.3_A2.2
description: Checking if execution of "false=0" fails
negative:
  phase: parse
  type: ReferenceError
---*/

throw "Test262: This statement should not be evaluated.";

false = 0;
