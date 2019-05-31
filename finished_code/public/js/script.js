console.log("amp-script here");

const passwordBox = document.getElementById("passwordBox");
const lowerCheck = document.getElementById("lowercase");
const upperCheck = document.getElementById("capital");
const numberCheck = document.getElementById("number");
const specialCheck = document.getElementById("special");
const lengthCheck = document.getElementById("eight");
const submitButton = document.getElementById("submitButton");

const passwordChecks = [
    {
      checkRegEx: (password) => (password.search(/[a-z]/) >= 0),
      text: lowerCheck
    },
    {
      checkRegEx: (password) => (password.search(/[A-Z]/) >= 0),
      text: upperCheck
    },
    {
      checkRegEx: (password) => (password.search(/[0-9]/) >= 0),
      text: numberCheck
    },
    {
      checkRegEx: (password) => (password.search(/[^a-z0-9]/i) >= 0),
      text: specialCheck
    },
    {
      checkRegEx: (password) => (password.length >= 8),
      text: lengthCheck
    }
  ]

function initCheckPassword(element) {
   // removes checkFail class and replaced with checkPass if check is met
   const checkMet = (listItem) => {
    listItem.classList.remove("checkFail");
    listItem.classList.add("checkPass");
  };
  // removes checkPass class and replaced with checkPass if check is deleted
  const checkRemoved = (listItem) => {
    listItem.classList.remove("checkPass");
    listItem.classList.add("checkFail");
  }
  const checkPassword = () => {
    passwordChecks.forEach((item) => {
      let passed = item.checkRegEx(element.value);
       // passed logic 
       passed ? checkMet(item.text) : checkRemoved(item.text);
    });
  } 
  
    // is called when user types in input
    element.addEventListener("keyup", checkPassword);
    // is called if user pastes into input 
    element.addEventListener("change", checkPassword);
};

initCheckPassword(passwordBox);
