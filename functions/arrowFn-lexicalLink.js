const greeting = function (name) {
  return `Hi, ${name}`;
};

//arrow fn explicit return
const newGreeting = (name) => {
  return `Hi, ${name}`;
};

//arrow fn implicit return
const newGreetingImplicit = (name) => `Hi, ${name}`;

//implicit with multiple parameters
const newGreetingImplicitWithTwoParameters = (name, lastName) =>
  `Hi, I'm ${name} ${lastName}`;

//lexical binding
const finctionalCharacter = {
  name: "Uncle Ben",
  messageWithTraditionalFunction: function (message) {
    console.log(`${this.name} says: ${message}`);
  },
  messageWithArrowFunction: (message) => {
    console.log(`${this.name} says: ${message}`);
  },
};
finctionalCharacter.messageWithTraditionalFunction(
  "With great power comes great responsability."
);
finctionalCharacter.messageWithArrowFunction("Beware of Doctor Octopus.");
