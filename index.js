function isPalindrome(word) {
  word = word.toLowerCase();
  let reversedWord = word.split('').reverse().join('');
  return word === reversedWord ? true : false;
}

/* 
  Add your pseudocode here

1. convert to lowercase().
2.split('') into array
3. reverse() the array then join()
4.conditional statement, maybe if else or ternary 


*/

/*
  Add written explanation of your solution here
1. First, make the word not case senstive by converting it to lowercase.
2.then use split('')to turn it into an array of letters.
2.then reverse() to reverse the array of letters.
3.then put back the array of letters to a string using join()
4.lastely use a conditional statement to compare them 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  // console.log("Expecting: true");
  // console.log("=>", isPalindrome("racecar"));

  // console.log("");

  // console.log("Expecting: false");
  // console.log("=>", isPalindrome("robot"));

console.log(isPalindrome('daisy'))

console.log(isPalindrome('taT'))
}

module.exports = isPalindrome;
