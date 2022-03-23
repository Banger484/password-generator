// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var special =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]
var numeric = ["0", "1", "2", "3", "4", "5","6","7","8","9"]

var charType = [upper, lower,  numeric, special]

function generatePassword() {
  var newPassword = "";
  var charLength = prompt("How many characters would you like your password to be?")
  console.log(charLength)
  if (charLength < 8 || charLength > 128) {
    alert("Please select a length between 8 and 128.")
    generatePassword()
  } else {
    for (let i = 0; i < charLength; i++) {
      var selectedType = charType[Math.floor(Math.random() * 4)]
      newPassword = newPassword.concat(selectedType[Math.floor(Math.random() * selectedType.length) ])
    }
  }
  return newPassword

}


