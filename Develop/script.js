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
var charTypes = [lowercase, uppercase, numString, specials];
var validChar = [];


var input = document.createElement("input");
input.type = "text";
input.id = "answer";
input.placeholder = "Enter Answer Here";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Variable to access card header for questions
var question = document.querySelector("#question");
var answerArea = document.querySelector(".card-body");
var passLength = 0;

// Write password to the #password input
function writePassword() {
  answerArea.appendChild(input);
  // loop for answering each question
  for (let q = 0; q < questionsArr.length; q++)
  {
      question.value = questionsArr[q];
      
      var validAns = false;
      // loop to stay on the same question until valid answer is input
      while (validAns === false) {
        //Checks for yes or know for all yes or no questions
        if (q >= 0 && q < 4)
        {
          if (input.value.toUpperCase === "YES" || input.value.toUpperCase === "Y")
          {
            validAns = true;
            validChar.concat(charTypes[q]);
          }
          else if (input.value.toUpperCase === "NO" || input.value.toUpperCase === "N")
          {
            validAns = true;
          }
        }
        //case for last question where a number between 8-128 is needed
        else
        {
          var ans = parseInt(input.value);
          if (8 >= ans <= 128)
            {
              validAns = true;
              passLength = ans;
            }
        }
      }
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
