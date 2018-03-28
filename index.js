/**
 * you can run this example for test
 */

const path = require('path');

/**
 * these two files are different at line 250 to line 260
 * I've writed some notes in ejs-fixed.js at these lines
 */
const ejsOrigin = require('./lib/ejs-origin.js');
const ejsFixed = require('./lib/ejs-fixed.js');

/**
 * let's start
 */
const filepath = path.join(__dirname, './test.html');
const data = { yo: 'check check' };

const originEjsResult = ejsOrigin.renderFile(filepath, data, (err, str) => {
  if (err) {
    return err.message;
  }
  return str;
});

const fixedEjsResult = ejsFixed.renderFile(filepath, data, (err, str) => {
  if (err) {
    return err.message;
  }
  return str;
});

console.log(
  // originEjsResult should be 'undefined', because you didn't return the result
  'originEjsResult: \n', originEjsResult, '\n\n',

  // fixedEjsResult is successfully returned
  'fixedEjsResult: \n', fixedEjsResult
);