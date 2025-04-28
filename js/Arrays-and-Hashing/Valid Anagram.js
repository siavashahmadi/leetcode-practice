/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// This was a very tough one for me, I had to YouTube the Javascript Solution for it
// and yet I still don't know exactly how to go about it
// I know the theory - Sort the words alphabetically and compare
// I know the first line after searching youtube in JS - split, sort, join

// Below is my original attempt, UNFINISHED, Disappointed
// var isAnagram = function (s, t) {

//     if (s.length != t.length) {
//         return false;
//     }
//     const mapS = new Map();
//     const mapT = new Map();

//     for (let i = 0; i < s.length; i++) {
//         mapS.set(s.charAt(i), i);
//     }

//     console.log(mapS);
// };

// this problem gave me a lot of trouble, was very sad that I could not create this below solution
// TIME TO GRIND fuck my life
var isAnagram = function (s, t) {
    const word1 = s.split("").sort().join("");
    const word2 = t.split("").sort().join("");
    return word1 === word2;
}

console.log(isAnagram('anagram', 'nagaram'));