// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

// A word is a maximal substring consisting of non-space characters only.

var lengthOfLastWord = function(s) {
    let arr = s.split(" ")
    let newArr = arr.filter(el  =>  el.length > 0)
    
    if (newArr[0] == undefined) return 0
    else return newArr[newArr.length -1].length

};