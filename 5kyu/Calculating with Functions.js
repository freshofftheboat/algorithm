/*
Details:
This time we want to write calculations using functions and get the results. Let's have a look at some examples:
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:
There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Divison should be integer division. For example, this should return 2, not 2.666666...:
*/
 
// My solution
// 踩坑：使用了 arguments 属性，不能用箭头函数
function zero() {return arguments.length === 0 ? 0 : arguments[0](0)}
function one() {return arguments.length === 0 ? 1 : arguments[0](1)}
function two() {return arguments.length === 0 ? 2 : arguments[0](2)}
function three() {return arguments.length === 0 ? 3 : arguments[0](3)}
function four() {return arguments.length === 0 ? 4 : arguments[0](4)}
function five() {return arguments.length === 0 ? 5 : arguments[0](5)}
function six() {return arguments.length === 0 ? 6 : arguments[0](6)}
function seven() {return arguments.length === 0 ? 7 : arguments[0](7)}
function eight() {return arguments.length === 0 ? 8 : arguments[0](8)}
function nine() {return arguments.length === 0 ? 9 : arguments[0](9)}

function plus() {
  const right = arguments[0]
  return function(left) {
    return left + right
  }
}

function minus() {
  const right = arguments[0]
  return function(left) {
    return left - right
  }
}

function times() {
  const right = arguments[0]
  return function(left) {
    return left * right
  }
}

function dividedBy() {
  const right = arguments[0]
  return function(left) {
    return parseInt(left / right)
  }
}

// Clever solutions
// one
var n = function(digit) {
  return function(op) {
    return op ? op(digit) : digit;
  }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }

// two
['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
.forEach(function (name, n) {
  this[name] = function (f) { return f ? f(n) : n }
});

function plus(n)      { return function (a) { return a + n } }
function minus(n)     { return function (a) { return a - n } }
function times(n)     { return function (a) { return a * n } }
function dividedBy(n) { return function (a) { return a / n } }

