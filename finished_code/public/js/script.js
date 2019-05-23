console.log("amp-script here");

const passwordBox = document.getElementById("passwordBox");
const lowerCheck = document.getElementById("lowercase");
const upperCheck = document.getElementById("capital");
const numberCheck = document.getElementById("number");
const specialCheck = document.getElementById("special");
const lengthCheck = document.getElementById("eight");
const submitButton = document.getElementById("submitButton");

const passwordChecks = {
  items: [
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
    }]
}

function initCheckPassword(el) {
   // removes checkFail class and replaced with checkPass if check is met
   const checkMet = (listItem) => {
    listItem.classList.remove("checkFail");
    listItem.classList.add("checkPass");
    return true
  };
  // removes checkPass class and replaced with checkPass if check is deleted
  const checkRemoved = (listItem) => {
    listItem.classList.remove("checkPass");
    listItem.classList.add("checkFail");
    return false
  }
  const checkPassword = () => {
    let failed = false;
    let successTest = passwordChecks.items.filter((item) => {
      let passed = item.checkRegEx(el.value);
       // passed logic 
       return passed ? checkMet(item.text) : checkRemoved(item.text);
    });
    if (successTest.length == 4 && el.value.length >= 8) {
      // changes length check text color
      checkMet(lengthCheck);
      // enables submit button 
      submitButton.setAttribute("class", "");
    }

  } 
  
    // is called when user types in input
    el.addEventListener("keyup", checkPassword);
    // is called if user pastes into input 
    el.addEventListener("change", checkPassword);
};

initCheckPassword(passwordBox);
