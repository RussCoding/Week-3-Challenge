// Assignment code here
// Variables for password character types and list of questions
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var numString = ["0","1","2","3","4","5","6","7","8","9"]
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var specials = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/",":", 
  ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

  var questionsArr = ["Would you like to include lowercase letters?", 
                      "Would you like to include uppercase letters?",
                      "Would you like to include numbers?",
                      "Would you like to include special characters?",
                      "Please enter a number from 8 to 128 for your password length."
                  ];


var input = document.createElement("input");
input.type = "text";
input.id = "answer";
input.placeholder = "Enter Answer Here";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Variable to access card header for questions
var question = document.querySelector("#question");
var answerArea = document.querySelector(".card-body");

// Write password to the #password input
function writePassword() {
  answerArea.appendChild(input);
  for (let q = 0; q < questionsArr.length; q++)
  {
      question.value = questionsArr[q];
  }
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


function generatePassword(){
  return "password";

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
