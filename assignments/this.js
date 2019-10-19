/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding is where 'this' refers to the window object. Typically, when 'this' is invoked inside a function that has no dot that precedes it.
* 2. Implicit binding is where 'this' is the object to the left of the dot that precedes the function that's called.
* 3. New binding is where 'this' refers to the constructor function scope. Similar to an implicit binding but each variable and method nees to be preceded by 'this' 
* 4. Explicit binding is when you define what 'this' refers to using methods like `.call`, `.apply` or `.bind`.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
globalVariable = "global"
function globalfunction(){
  return this.globalVariable
}
console.log(globalfunction())

// Principle 2

// code example for Implicit Binding
const myObject = {
  insideVar: "implicit",
  insideFunction: function(){
    return this.insideVar
  }
}
console.log(myObject.insideFunction())

// Principle 3

// code example for New Binding
function MyConstructorFunction(param){
  this.myNewVar = `${param}`
  this.newInsideFunction = function(){
    console.log(this.myNewVar)
  }
}

const truck = new MyConstructorFunction('New binding')
truck.newInsideFunction()

// Principle 4

// code example for Explicit Binding

const anotherTruck = new MyConstructorFunction('Explicit binding')
truck.newInsideFunction.call(anotherTruck)