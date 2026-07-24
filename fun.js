// waf to take any digit (0-9) and return its in word
// 0-one
// 5-five
const digitToWord = (digit)=> {
  const word = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  return words[digit];
}
console.log(toWords(5));
console.log(toWords(3));
console.log(toWords(6));
