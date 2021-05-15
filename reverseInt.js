// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

var reverse = function(x) {
    if(x < 0 ){
      let newNum = Number(Math.abs(x).toString().split("").reverse().join("")) * -1  
       if(newNum < Math.pow(-2, 31)) return 0
      else if (newNum > Math.pow(2, 31)) return 0
      else return newNum
    } 
   else{
      let newNum = Number(Math.abs(x).toString().split("").reverse().join("")) 
      if(newNum < Math.pow(-2, 31)) return 0
      else if (newNum > Math.pow(2, 31)) return 0
      else return newNum
   } 
  
  };