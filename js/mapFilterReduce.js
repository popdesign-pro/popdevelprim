/*      map
syntax map(callBackFunciton(Element, Index, Array) { }, thisArgument)
important! map return A NEW ARRAY
*/
// Anonymous Function
// =======>> run
/*
let myNums = [1, 2, 3, 4, 5];
// old way
let new_myNums = [];
for (let i = 0; i < myNums.length; i++) {
  new_myNums.push(myNums[i] + myNums[i]);
}
console.log(new_myNums);
// map way
let mapArr = myNums.map(function (element) {
  return element + element;
});
console.log(mapArr);
let esMapArr = myNums.map((el) => el + el);
console.log(esMapArr);
// Named Function
function addition(el) {
  return el * el;
}
let add = myNums.map(addition);
console.log(add);
let swappingCase = "pOpdEVEl",
  invertedNumbers = [1, -10, -20, 15, 100, -30],
  ignoreNumbers = "po2p3dev23el";
let sw = swappingCase
  .split("")
  .map((el) => (el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()))
  .join("");
console.log(sw);
let inv = invertedNumbers.map((el) => -el);
console.log(inv);
let ign = ignoreNumbers
  .split("")
  .map((el) => (isNaN(parseInt(el)) ? el : ""))
  .join("");
console.log(ign);
*/

/*      filter
syntax filter(callBackFunciton(Element, Index, Array) { }, thisArgument)
important! filter return A NEW ARRAY has PASS the test only....
// Get friends start with D character
let friends = ["Peter", "Dany", "Abeer", "Beren"];
let nFriends = friends.filter((el) => el.startsWith("D"));
console.log(nFriends);
// Get Even Numbers only
let num = [11, 20, 2, 5, 17, 10];
let even = num.filter((el) => el % 2 === 0);
console.log(even);
// filter words more than 4 characters
let txt = "I Love Egypt my coding son Playing football so much";
let txt4 = txt
  .split(" ")
  .filter((el) => el.length <= 4)
  .join(" ");
console.log(txt4);
// Ignore characters and mutiplye
let ignoreChar = "po3pd3ev3l";
let ignC = ignoreChar
  .split("")
  .filter((el) => !isNaN(parseInt(el)))
  .map((el) => el * el)
  .join("");
console.log(ignC);
*/

/*      reduce
syntax reduce(callBackFunciton(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
important! method executed a reducer function on each element of hte array,
           resulting in a single output value.
*/
/*
let nums = [10, 20, 15, 30];
let sums = nums.reduce(function (acc, current, index, arr) {
  console.log(`Accumulator => ${acc}`);         //30
  console.log(`Current Elelment => ${current}`);//20
  console.log(`Current Element Index => ${index}`);//1
  console.log(`Array => ${arr}`);                 //10,20,15,30
  console.log(acc + current);   //30
  console.log(`#############`); //#############
  return acc + current;
});
let sums = nums.reduce(function (acc, current, index, arr) {
  return acc + current;
});
console.log(sums);
let theBiggest = ["bla", "battery", "propaganda", "other", "aaa", "test"];
let big=theBiggest.reduce(function(acc, current){
  console.log(`Accumulator => ${acc}`);
  console.log(`Current Elelment => ${current}`);
  console.log(acc.length > current.length? acc:current);
  console.log(`#############`);
  return acc.length > current.length? acc:current;
})
console.log(big);
let removeChars = ["p", "@", "@", "o", "@", "p", "d"];
let sym = removeChars
  .filter((el) => !el.startsWith("@"))
  .reduce((acc, current) => acc + current);
console.log(sym);
*/

/*      forEach
syntax forEach(callBackFunciton(Element, Index, Array) { }, thisArgument)
important! doesn't return anything [undefined]
            break will not break the loop
*/
