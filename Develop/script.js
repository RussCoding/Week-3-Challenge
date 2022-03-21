// Assignment code here
// Variables for password character types and list of questions
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var numString = ["0","1","2","3","4","5","6","7","8","9"];
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
var passWord1 = "";


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
function writePassword() 
{ 
  // loop for answering each question
  for (let q = 0; q < questionsArr.length; q++)
  {
      var validAns = false;
      while (validAns === false) 
      {
        var ans = prompt(questionsArr[q]);
        if ((ans.toUpperCase() === "YES" || ans.toUpperCase() === "Y") && q<4)
          {
            validAns = true;
            validChar.push(charTypes[q]);
          }
        else if ((ans.toUpperCase() === "NO" || ans.toUpperCase() === "N") && q<4)
          {
            validAns = true;
          }
        else if (validChar.length === 0 && q === 4)
          {
            alert("Please choose at least one character type");
            q = 0;
          }
        else if (q === 4 && Number(ans) > 7  && Number(ans) < 129)
          {
            validAns = true;
            passLength = ans;
          }
        
      }
    }

  

  
  var password = generatePassword(passLength);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


function generatePassword(size)
{
  var pass = "";
  var letters = validChar.flat;
  for (let i = 0; i < size; i++)
  {
    var num = Math.floor(Math.random() * (letters.length + 1));
    pass = pass.concat(chars[num])
  }
  pass = pass.toString("");
  return pass;
}
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);


      //  first try
      // loop to stay on the same question until valid answer is input
      // while (validAns === false)
      // {
      //   //Checks for yes or know for all yes or no questions
      //   if (q >= 0 && q < 4)
      //   {
      //     if (ans.toUpperCase === "YES" || ans.toUpperCase === "Y")
      //     {
      //       validAns = true;
      //       validChar.concat(charTypes[q]);
      //     }
      //     else if (ans.toUpperCase === "NO" || ans.toUpperCase === "N")
      //     {
      //       validAns = true;
      //     }
      //   }
      //   //case for last question where a number between 8-128 is needed
      //   else
      //   {
      //     if (8 >= parseInt(ans) <= 128)
      //       {
      //         validAns = true;
      //         passLength = ans;
      //       }
      //   }
      // }