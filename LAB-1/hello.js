console.log("Aaradhya Singh");
// write a function to take  two number and return their sum
function sum(a,b){
    return a+b;
}

const add =(a,b) =>{
    return a+b;

};
const add2 = (a,b) =>{
    return a+b;
};
const add2 =(a,b) =>a+b;
console.log(sum(20,10));
console.log(add(20,10));
console.log(add(20,10));

// waf to take any digit (0-9) and return its in word 
// 0-one 
// 5-five
function digitToWords(digit){
    const word = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    return words[digit];
}