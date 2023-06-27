var generateBtn = document.querySelector("#generate");

// create a password that meets the selected criteria
function generatePassword(){
  // present with a series of prompts for password criteria
  let length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters)"));
  let includeLower = confirm("Does the character include lowercase?");
  let includeUpper = confirm("Does the character include uppercase?");
  let includeNum = confirm("Does the character include numeric?");
  let includeSpecial = confirm("Does the character include special characters?");

  if(Number.isNaN(length) || length < 8 || length > 128){
    window.alert("You must enter the number between 8 and 128 characters");
    return;
  }

  if (!length && !includeLower && !includeUpper && !includeNum && !includeSpecial){
    window.alert("You must select at least one character type.");
    return;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
