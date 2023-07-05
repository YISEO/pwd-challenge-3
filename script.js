var generateBtn = document.querySelector("#generate");

// create a password that meets the selected criteria
function generatePassword(){
  // present with a series of prompts for password criteria
  let length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters)")); //integer
  let includeLower = confirm("Does the character include lowercase?");
  let includeUpper = confirm("Does the character include uppercase?");
  let includeNum = confirm("Does the character include numeric?");
  let includeSpecial = confirm("Does the character include special characters?");

  if(Number.isNaN(length) || length < 8 || length > 128){
    window.alert("You must enter the number between 8 and 128 characters");
    return;
  }

  if (!includeLower && !includeUpper && !includeNum && !includeSpecial){
    window.alert("You must select at least one character type.");
    return;
  }

  // Setting the list of characters for the password
  let lowercaseLi = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseLi = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numericLi = "0123456789";
  let incSpecialCharacterLi = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  let character = "";
  if(includeLower == true){
    character += lowercaseLi;
  }
  if(includeUpper == true){
    character += uppercaseLi;
  }
  if(includeNum == true){
    character += numericLi;
  }
  if(includeSpecial == true){
    character += incSpecialCharacterLi;
  }

  let result = "";
  let characterLength = character.length;
  for (let i = 0; i < length; i++){
    // charAt() returns the character at a specified index
    result += character.charAt(Math.floor(Math.random() * characterLength));
  }

  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
