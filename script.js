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


var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var special =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"," ",",","{", "}","[","]","?","/",":",";",'"',"'"]
var numeric = ["0", "1", "2", "3", "4", "5","6","7","8","9"]
var newPassword = "";
var pool = []

function generatePassword() {
  
  var charLength = prompt("How many characters would you like your password to be?")
  if (charLength < 8 || charLength > 128) {
    alert("Please select a length between 8 and 128.")
    generatePassword()
  } else {
    selections(lowerCase)
    selections(upperCase)
    selections(numeric)
    selections(special)
    passwordCreation(charLength)
  }
  
  var generatedPassword = newPassword
  newPassword = ""
  pool = []
  return generatedPassword
  
}

function passwordCreation(x) {
  for (let i = 0; i < x; i++) {
    var selectedType = pool[Math.floor(Math.random() * pool.length)] 
    newPassword = newPassword.concat(selectedType[Math.floor(Math.random() * selectedType.length) ]) 
  }
  return newPassword
}

function selections(x) {
  if (x === lowerCase) {
    var choice = confirm(`Would you like to include lower case characters into your password?`)
    if(choice) {
      pool.push(x)
    }else {
    }
  }
  if (x === upperCase) {
    var choice = confirm(`Would you like to include upper case characters into your password?`)
    if(choice) {
      pool.push(x)
    }
  }
  if (x === numeric) {
    var choice = confirm(`Would you like to include numeric characters into your password?`)
    if(choice) {
      pool.push(x)
    }
  }
  if (x === special) {
    var choice = confirm(`Would you like to include special characters into your password?`)
    if(choice) {
      pool.push(x)
    }
  }
}
