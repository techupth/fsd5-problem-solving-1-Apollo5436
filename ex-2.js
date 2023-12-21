//Exercise 2: Valid Palindrome
function Palindrome(lowerCaseString, length) {
  let palindromeText = "";
  for(let i = length - 1; i >= 0; i--) {
    if (lowerCaseString[i] >= "a" && lowerCaseString[i] <= "z") {
      palindromeText += lowerCaseString[i];
    }
  }
  return (palindromeText);
}

function String(lowerCaseString, length) {
  let stringText = "";
  for(let i = 0; i < length; i++) {
    if (lowerCaseString[i] >= "a" && lowerCaseString[i] <= "z") {
      stringText += lowerCaseString[i];
    }
  }
  return (stringText);
}

function stringCompare(checkPalindrome, checkString) {
  if (checkPalindrome === checkString) {
    return (true);
  }
  else {
    return (false);
  }
}


const isPalindrome = function (s) {
  //Start Coding here
  let lowerCaseString = s.toLowerCase();
  let length = s.length;
  let checkPalindrome = Palindrome(lowerCaseString, length);
  let checkString = String(lowerCaseString, length);
  let result = stringCompare(checkPalindrome, checkString);
  return (result);
};

const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");


console.log(result1); // true
console.log(result2); // false
console.log(result3); // true
