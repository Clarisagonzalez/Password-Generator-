
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var length = prompt("How many characters would you like your password to contain? (between 8 and 128)");
  var includeSpecialChars = confirm("Click OK to confirm including special characters");
  var includeNumbers = confirm("Click OK to confirm including numeric characters");
  var includeLowercase = confirm("Click OK to confirm including lowercase characters");
  var includeUppercase = confirm("Click OK to confirm including uppercase characters");

  var password = generatePassword(length, includeSpecialChars, includeNumbers, includeLowercase, includeUppercase);

  alert("Your generated password is:\n" + password);
  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

 
}
function generatePassword (length, includeSpecialChars, includeNumbers, includeLowercase, includeUppercase) {
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()_+";

  varchars = ""

  if (includeUppercase) {
    chars += uppercaseChars;
  }
  if (includeLowercase) {
    chars += lowercaseChars;
  }
  if (includeNumbers) {
    chars += numberChars;
  }
  if (includeSpecialChars) {
    chars += specialChars;
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    password += getRandomCharacter(chars)
  }

  return password;

}

function getRandomCharacter(str) {
  var randomIndex = Math.floor(Math.random() * str.length);
  return str.charAt(randomIndex);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





  
  




  
