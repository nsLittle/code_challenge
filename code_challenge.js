const findSum = function(array) {
  // your code here - don't forget to return a number!
  let sum = 0;
	for (let i = 0; i < array.length; i++) {
 		sum += array[i];
	};
	return sum;
};

const findFrequency = function(array) {
  // your code here - don't forget to return an object!
  let count = [];
  for (const num of array) {
    count[num] = count[num] ? count[num] + 1 : 1;
  };
  let maxValue = Math.max(...Object.values(count));
  let minValue = Math.min(...Object.values(count));
  let keys = Object.keys(count);
  let values = Object.values(count);
  let indexOfMax = values.indexOf(maxValue);
  let indexOfMin = values.indexOf(minValue)
  let valueOfMax = keys[indexOfMax];
  let valueOfMin = keys[indexOfMin];
  let completeAnswer = {};
  let keyMost = "most: ";
  let keyLeast = "least: ";
  completeAnswer[keyMost] = valueOfMax;
  completeAnswer[keyLeast] = valueOfMin;
  return JSON.stringify(completeAnswer);
};

const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!
  let reversedPalindrome = str.split("").reverse().join("");
	if (reversedPalindrome === str) {
		return true;
	} else {
    return false;
  };
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
  let products = [];
  for (let i = 0; i < array.length; i++) {
    let firstPair = array[i];
    let secondPair = array[i + 1];
    let product = firstPair * secondPair;
    if (product) {
      products.push(product);
    };
  };
  return Math.max(...products);
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
  let newStr = str.replace(/[()]/g, "");
  return newStr;
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
  const scores = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10
};

let scoreTally = [];
for (let i = 0; i < str.length; i++) {
  let keys = Object.keys(scores);
  let values = Object.values(scores);
  // console.log(keys); // output 'a', 'b', 'c'...
  // console.log(values);  // output 1, 3, 3...
  for (let j = 0; j < keys.length; j++) {
    if (str[i] === keys[j]) {
      scoreTally.push(values[j]);
    };
  };
};

let finalScore = 0;
for (let i = 0; i < scoreTally.length; i++) {
   finalScore += scoreTally[i];
};
return finalScore;
};
