// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
// works in objects because they have properties and values
//     }
// }

const listOfShopping = {
    apples: 5,
    pears: 3,
    oranges: 2,
    grapes: 1
}

for (fruits in listOfShopping) {
    console.log(fruits);
}

for (fruits in listOfShopping) {
    console.log(`${fruits} : ${listOfShopping[fruits]}`);
}