// complete the given function

function palindrome(str){
let cleaned = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // check palindrome
  return cleaned === cleaned.split("").reverse().join("");
}
module.exports = palindrome
