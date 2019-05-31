console.log("amp-script here");

const passwordBox = document.getElementById("passwordBox");


const passwordChecks = [
  {
    test: (password) => (password.search(/[a-z]/) >= 0),
    text: "lowercase"
  },
  {
    test: (password) => (password.search(/[A-Z]/) >= 0),
    text: "capital"
  },
  {
    test: (password) => (password.search(/[0-9]/) >= 0),
    text: "number"
  },
  {
    test: (password) => (password.search(/[^a-z0-9]/i) >= 0),
    text: "special"
  },
  {
    test: (password) => (password.length >= 8),
    text: "eight"
  }
]

function initCheckPassword(element) {
  const checkPassword = () => {
    passwordChecks.forEach((item) => {
      let passed = item.test(element.value);
      // captures element
      let checkText = document.getElementById(item.text)
      console.log(item.text)
       // passed/fail logic 
       checkText.classList.toggle('pass', passed)
    });
  } 
    // is called when user types in input
    element.addEventListener("keyup", checkPassword);
    // is called if user pastes into input 
    element.addEventListener("change", checkPassword);
};

initCheckPassword(passwordBox);
