//pure functions / same entry, same exit - no secondary effects.

//side effects - TURN FUNCTIONS INTO IMPURE FUNCTIONS
//modify global variables, modify parameters, http request'API', LOGS-Alerts-printingOverall
//DOM manipulation, to access local data/time

//PURE FUNCTION
function sum(a, b) {
  return a + b;
}

function square(x) {
  return x * x;
}

function addTen(y) {
  return y + 10;
}

const number = 5;
const finalResut = addTen(square(number));
console.log(finalResut);

//IMPURE FUNCTION
function sum(a, b) {
  console.log("A: ", a);
  return a + b;
}

let total = 0;
function sumWithSideEffect(a) {
  total += a;
  return total;
}
