console.log("amp-script here")

const passwordBox = document.getElementById("passwordBox");
const lowerCheck = document.getElementById("lowercase");
const upperCheck = document.getElementById("capital");
const numberCheck = document.getElementById("number");
const specialCheck = document.getElementById("special");
const lengthCheck = document.getElementById("eight");
const submitButton = document.getElementById("submitButton");

// list of checks that must be met for password to be valid
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
  // removes invalid class and replaced with valid if check is met
  const checkMet = (listItem) => {
    listItem.classList.remove("invalid");
    listItem.classList.add("valid");
    return true
  };
  // removes valid class and replaced with valid if check is deleted
  const checkRemoved = (listItem) => {
    listItem.classList.remove("valid");
    listItem.classList.add("invalid");
    return false
  }
  // function goes over each check to see if its been met
  const checkPassword = () => {
    let failed = false;
    let successTest = passwordChecks.items.filter((item) => {
      let passed = item.checkRegEx(el.value);
      // calls checkMet or checkRemoved
      return passed ? checkMet(item.text) : checkRemoved(item.text);
    });
    // if all four checks are met and password is 8 or more char
    // successTest.length will equal 4
    if (successTest.length == 4 && el.value.length >= 8) {
      // changes length check text color
      checkMet(lengthCheck);
      // enables submit button 
      submitButton.setAttribute("class", "");
    }
  };
  el.addEventListener("keyup", checkPassword);
  el.addEventListener("change", checkPassword);
};

// calls password checker function
initCheckPassword(passwordBox);