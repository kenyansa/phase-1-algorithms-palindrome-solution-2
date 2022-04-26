function isPalindrome(word) {
  // iterate from the start of string to the middle
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    // compare the iterated letter to the corresponding letter at the end
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      // return false if no letters match
      return false;
    }
  }

  // return true if letters match by the time we are in the middle
  return true;
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
