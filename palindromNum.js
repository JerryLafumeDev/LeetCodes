// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

var isPalindrome = function(x) {
    if (x === 0) return true
    else if(x>0) return x === Number(x.toString().split("").reverse().join(""))
    else return false
};