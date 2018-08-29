

function printString(myString) {
  console.log(myString[0]);
   let substring;

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}
printString("pizza");


function reverseString(string) {
    if (string.length === 1) {
        return string[0]
    } 

    return reverseString(string.slice(1)) + string[0]
}


function isPalindrome(string) {
  if(string[0] != string.length-1) {
    return false
  } 
  return isPalindrome(string[0]===string[0])
}