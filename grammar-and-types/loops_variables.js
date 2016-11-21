/**
* Topic: Loops and variables
* Problem instructions: Here you can learn about for loop and variables try to type a code yourself. Links below.
* Relevant resources:
* - https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/%D0%A6%D0%B8%D0%BA%D0%BB%D1%8B_%D0%B8_%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B8
*/
//Example.1 This code will count from 0 to 12.
 var a = 12;
 for (let i = 0; i < a; i++) {
   console.log(i);
 }

//Example.2 This code will print all odd numbers from 0 to 100
const p = [];
for (let i = 0; i < 101; i++) {
  p[i] = i;
  if(p[i] % 2 !== 0){
  console.log(p[i]);
}
}
