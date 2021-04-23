var _ = {};


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){
  //CODE BELOW HERE 

for(var i = 0; i<= array.length -1; i++){
  if(array === undefined){
    return undefined;
  } 
  for var i = 0; i < array.length; i++){
    if(array[i] === value){
return i;
  }
}

return - 1;

  //CODE ABOVE HERE
}
console.log(_.indexOf([1,2,3,4],4))




/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){
//CODE BELOW HERE
for(var i = 0; i<= array.length - 1; i++){
  if(){
    return true;
  } else {
return false;
  }
}


//CODE ABOVE HERE
}