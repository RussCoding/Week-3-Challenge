// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var specials = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/",":", 
                ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var input = document.createElement("input");
input.type = "text";
input.id = "answer"
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var question = document.querySelector("#question");
var answerArea = document.querySelector("");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword(){

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
