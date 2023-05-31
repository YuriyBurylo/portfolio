"use strict"
let eyesColor;
let user;
let userName = 'Вася';
user = userName;
console.log(user);
let myName = 'Yuriy';
 function nameCall() {
    let myName = 'Vasya';
    console.log(myName);
 }
 nameCall();
 const COLOR_RED = '#f00';
 console.log('The name of this person is: ' + user);

 const N = 'Юра'
 console.log(N)
 const RED_COLOR = '#f00'
 console.log(RED_COLOR)
 let a = 100
 let b = 50
 const c = a + b
 console.log(c)
 const person = {
    firstName: 'Vova',
    lastName: 'Romanov',
    age: 50
 }
 console.log(person)
 person.age = 45
 console.log(person)
 console.log(person.age)
 console.log(person.firstName)
 person.firstName = 'Vita'
 console.log(person)
 person.lastName = 'Nagaichuk'
 console.log(person.lastName)
 person.age = 46
 console.log(person)
 const isProgrammer = false
 let x
 b *= a
 b /= a
 b -= a
 console.log(b)
 console.log(b--)
 console.log(b)
 console.log(typeof b)
 console.log(typeof N)
 console.log(typeof isProgrammer)
 console.log(typeof x)
 console.log(typeof person)
 const birthYear = 1980
 const currentYear = 2022
 const fullAge = 40
 const isFullAge = (currentYear - birthYear) >= fullAge
console.log(isFullAge)

const isReady = 'fail' // ready, fail

// if (isReady === 'pending') {
//    console.log('The course is still being developed')
// } else if (isReady === 'ready') {
//    console.log('The course is ready ! You can use it !')
// } else {
//    console.log('The development of the course has failed')
// }
isReady === 'ready' ? console.log('The course is ready ! You can use it !') : console.log('The course is not ready yet. Please, wait !')

const num1 = 50
const num2 = '50'
console.log(num1 === num2)


function calculateAge(birthYear) {
   return currentYear - birthYear
}
console.log(calculateAge(1980))
console.log(calculateAge(1976))
console.log(calculateAge(1996))

function aboutPerson(name, birthYear) {
   const age = calculateAge(birthYear)
   if (age > 0) {
      console.log('Человек по имени ' + name + ' имеет ' + age + ' лет')
   } else {
      console.log('Этот человек еще не родился.')
   }
}
aboutPerson('Юрий', 1980)
aboutPerson('Ольга', 1989)

const cars = ['Porche', 'Mersedes', 'Audi']
console.log(cars)
const persons = new Array ('Olga', 'Helen', 'Vova', 'Jack')

for (let i = 0; i < cars.length; i++) {
   const car = cars[i]
   console.log(car)
}

for (let p of persons) {
   console.log(p)
}

let temp = cars[0]
cars[0] = cars[cars.length - 1]
console.log(cars)
cars[cars.length - 1] = temp
console.log(cars)
const numbers = [1, 2, 9, 4, 5, 7, 2]
let out = ''
for(let i = 0; i < numbers.length; i++) {
   out += numbers[i] + ' '
}
document.querySelector('.out').innerHTML = out

let max = numbers[0]
for(let i = 0; i < numbers.length; i++) {
   if (numbers[i] > max) {
      max = numbers[i]
   }
}
console.log(max)

let min = numbers[0]
for (let i = 0; i < numbers.length; i++) {
   if (numbers[i] < min) {
      min = numbers[i]
   }
}
console.log(min)

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
   sum += numbers[i]
}
console.log('sum: ' + sum)
const profile = {
   firstName: 'Goga',
   lastName: 'Ivanov',
   age: 30,
   languages: ['En', 'Ru', 'Ukr'],
   hasWife: true,
   hasKids: false
}

let output = ''
for (let key in profile) {
   output += key + ': ' + profile[key] + '<br>'
} 
document.querySelector('.output').innerHTML = output

const arr = [
   [2, 4, 6],
   [1, 3, 5],
   [7, 8, 9],
]

// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i])
//    let smallArr = arr[i]
//    for (let k = 0; k < smallArr.length; k++) {
//       console.log(smallArr[k])
//    }
// }

for (let i = arr.length - 1; i >= 0; i--) {
   // console.log(arr[i])
   for (let k = arr[i].length - 1; k >= 0; k--) {
      console.log(arr[i][k])
   }
}
let skinColor = 'black';
let myFriend;
let myFriendName = 'Goga';
myFriend = myFriendName;
console.log(myFriend);

let _userName = 41;
let userInfo = `Возраст пользователя: ${_userName}`;
console.log(userInfo);

let z = 145/0;
console.log(z);
console.log(typeof z);

let q = "50"/"10";
console.log(q);
console.log(typeof q);

_userName = String(_userName);
console.log(_userName);
console.log(typeof _userName);

_userName = Number(_userName);
console.log(_userName);
console.log(typeof _userName);

// _userName = Boolean(_userName);
// console.log(_userName);
// console.log(typeof _userName);

// _userName = -1;
// _userName = Boolean(_userName);
// console.log(_userName);
// console.log(typeof _userName);

let d = 45 > 5;
console.log(d);
console.log(typeof d);

let result = 56 + ' Freelancer';
console.log(result);

let result2 = 5 + '10';
console.log(result2);

let result3 = 10 + 8 + ' years old';
console.log(result3);

let result4 = + "112";
console.log(result4);

let v = 2 + 2;
console.log(`Результат сложения ${v}`);

v = 5 - 2;
console.log(`Результат вычитания ${v}`);

v = 5 * 3;
console.log(`Результат умножения ${v}`);

v = 10 / 2;
console.log(`Результат деления ${v}`);

v = 3 ** 2;
console.log(`Результат возведения в степень ${v}`);

v = 15 % 4;
console.log(`Остаток после деления ${v}`);

let result5 = "30" - 10;
console.log(result5);
console.log(typeof result5);

let result6 = 5 * "100";
console.log(result6); 
console.log(typeof result6);

let result7 = "120" / "20";
console.log(result7);
console.log(typeof result7);

let var1 = +"25";
console.log(var1);
console.log(typeof var1); 

// let var2 = var3 = var4 = 5 + 7;
// console.log(var2);
// console.log(var3);
// console.log(var4);

let usersCount = 0;
console.log(++usersCount);
let newUsers = 0;
newUsers -= 5;
console.log(newUsers);

console.log(5 < 0);
console.log(3 > 1);
console.log(78 == 45);
console.log(4 != 5);

let endResult = 3 != 5;
console.log(endResult);

console.log("56" < 10);
console.log("009" === 9);

console.log(true > 0);
console.log(false === 0); 

console.log("D" > "E");
console.log("Keny" < "Kent");

let itemA = 0;
let itemB = "0";
console.log(Boolean(itemA));
console.log(Boolean(itemB));
console.log(itemA === itemB);

console.log(0 === false);
console.log("007" === 7);
console.log("60" !== 60);

let message = 'Hi, freelancer !!!';

let number = 70;

if (number > 30) {
   console.log(`${number} is greater than 30`)
} else if (number > 20) {
   console.log(`${number} is greater than 20`)
} else if (number > 10) {
   console.log(`${number} is greater than 10`)
} else {
   console.log(`Sorry, ${number} is too little, too late !`)
}

let greeting = 'Hello, ';
let ageGroup;
let age = 70;

// if (age > 60) {
//    ageGroup = 'old man !'
// } else if (age < 18) {
//    ageGroup = 'young man !'
// } else {
//    ageGroup = 'middle-aged person !'
// }
ageGroup = age > 60 ? 'old-timer !': age < 18 ? 'small boy !' : 'middle-aged man !'
greeting += ageGroup;
console.log (greeting);

const button = document.querySelector('button');
const input = document.querySelector('.age');

button.onclick = function () {
   let userAge = +input.value;
   if (userAge > 18 && userAge < 70) {
      console.log('You are welcome, horny stud !');
      switch (userAge) {
         case 20:
            console.log('Hello, 20-year old !');
            break;
         case 30: 
            console.log('Hi, 30-year old !!');
            break;
         case 40:
            console.log('Hi five, 40-year old !!!');
            break;
         default:
            console.log("Enjoy sex !");
      }
   } else {
      console.log('Go away, fucking pervert !!!');
   }
};

let num = 5;
while (num > 0) {
   console.log(num);
   num--;
};
console.log(num);

do {
   console.log(num);
   num++;
} while (num < 0);

Marker: for (let num = 0; num < 4; num ++) {
   for (let size = 5; size > 0; size--) {
      console.log(size);
      if (size === 3) continue Marker;
   };
};
num = 0;
while (num < 3) {
   console.log(`Число: ${num}`);
   num++;
};

Mark2: for (let num = 0; num < 3; num++) {
   for (let size = 0; size < 4; size++) {
      console.log(`Number : ${size}`);
      if (size === 2) continue Mark2;
   };
};

const square = document.getElementById('out');

let squareOut = '';
for (let i = 0; i < 6; i++) {
   squareOut += '*************************' + '<br/>';
};
square.innerHTML = squareOut;

let block = document.querySelectorAll('.one');
// block.style.background = 'red';
console.log(block);

for (let i = 0; i < block.length; i++) {
   block[i].style.background = 'blue';
   block[i].onclick = () => {
      console.log('Hello world !');
   };
};

let block2 = document.getElementsByClassName('one');
console.log(block2);

for (let i = 0; i < block2.length; i++) {
   block2[i].style.border = '2px solid red';
};

document.getElementById('btn').onclick = () => {
   let radio = document.getElementsByName('r');
   console.log(radio);
   for (let i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
         console.log(radio[i].value);
      };
   };
};
const block3 = document.querySelector('#out2');
let i = 0;
let outStr = '';
let flag = 5;
while (i < 6) {
   let k = 0;
   while (k < 5) {
      if (k < flag) {
         outStr += '*';
      }
      else {
         outStr += '0';
      }
      k++;
   };
   outStr += '<br>';
   i++;
   flag--;
};

block3.innerHTML = outStr;

const out3 = document.querySelector('#out3');
// let table = '';
for (let i = 1; i <= 10; i++) {
   for (let k = 0; k <=10; k++) {
      out3.innerHTML += `${i}*${k}=${i*k}<br>`;
   };
   out3.innerHTML += "<hr>";
};
// out3.innerHTML = table;

const num3 = Number.MAX_SAFE_INTEGER;
console.log('MAX_SAFE_INTEGER: ' + num3);
console.log('MAX_SAFE_INTEGER: ', Math.pow(2, 53)-1);
const num4 = Number.MIN_SAFE_INTEGER;
console.log('MIN_SAFE_INTEGER: ' + num4);
console.log('MIN_SAFE_INTEGER: ', -(Math.pow(2, 53)-1));
console.log('MAX_VALUE: ', Number.MAX_VALUE);
console.log('MIN_VALUE: ', Number.MIN_VALUE);
const pow = 5e3;
console.log(pow);
console.log('POSITIVE_INFINITY: ', Number.POSITIVE_INFINITY);
console.log('NEGATIVE_INFINITY: ', Number.NEGATIVE_INFINITY);
console.log(typeof Infinity);
console.log(typeof NaN);
console.log(3/undefined);
let num6 = 6/undefined;
console.log(num6);
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(42));
console.log(isNaN(5));
console.log(isNaN(num6));

let numInt = '40';
let numFloat = '40.42';
console.log(+numInt + 5);
console.log(Number(numInt)+9);
console.log(Number.parseInt(numInt) + 10);

console.log(parseInt(numFloat));
console.log(Number.parseFloat(numFloat));
console.log(Number(numFloat));
console.log(+numFloat +10);

console.log(0.2 + 0.4);
console.log(+(0.2 + 0.4).toFixed(1));
console.log(parseFloat((0.2 + 0.4).toFixed(1)));

console.log(parseInt(3454364n - 432434n));
console.log(parseInt(6789n) - 345);
console.log(Math.E);
console.log(Math.PI);
console.log(Math.sqrt(36));
console.log(Math.pow(2, 3));
console.log(Math.abs(-45));
console.log(Math.max(34, 67, 90, 234));
console.log(Math.min(78, 23, 3, 90, 34, 456));
console.log(Math.floor(4.8)); 
console.log(Math.ceil(5.3));
console.log(Math.round(2.6));
console.log(Math.trunc(7.8));
console.log(Math.random());

function getRandomBetween(min, max) {
   return Math.round(Math.random()*(max-min) + min);
}
console.log(getRandomBetween(20, 30));
console.log(Math.round(5.854));
console.log(Math.round(5.854*10)/10);
let num7 = Math.round(5.854*100)/100;
console.log(num7);
let numOne = 5.85; 
console.log(numOne.toFixed(1));
console.log(+numOne.toFixed(1));
let valueOne = +"150";
console.log(valueOne);
console.log(typeof valueOne);
let valueTwo = +"150px";
console.log(valueTwo);
console.log(typeof valueTwo);
let valueThree = parseInt("150.56px");
console.log(valueThree);
console.log(typeof valueThree);

let valueFour = parseFloat("150.58px");
console.log(valueFour);
console.log(typeof valueFour);

let valueFive = parseFloat("as150.57");
console.log(valueFive);
console.log(typeof valueFive);
console.log(Math.floor(58.858));
console.log(Math.max(10, 58, 39, -150, 0));
let valueSix = parseFloat("135.58px");
console.log(valueSix);
console.log(typeof valueSix);

let name = 'Yura';
let vik = 41;
function myAge() {
   return currentYear - birthYear;
};
let outString = 'Привет ! Меня зовут ' + name + '. Мне сейчас ' + vik + ' лет.';
console.log(outString);
// let outString2 = `Hello  world !, My name is ${name} and I am ${myAge()} years old.`;
// console.log(outString2);
let outString3 = `Hi there ! My name is ${name} and I am ${currentYear - birthYear} years of age.`;
console.log(outString3);
let outString4 = `How do you do ? My name is ${name} and I want to ${vik > 18 ? 'have sex with you' : 'read a book'}.`;
console.log(outString4);
let poem = `Bla Bla Bla
Bla Bla Bla
Bla Bla Bla`;
console.log(poem);
let poem2 = "\t\tBLO BLO BLO\\ \n\tBLO BLO BLO \n\t\tBLO BLO BLO\\";
console.log(poem2);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.charAt(2));
console.log(name.charAt(0));
console.log(name.indexOf('a'));
console.log(name.indexOf('u'));
console.log(name.indexOf('s'));
console.log(name.startsWith('Saw'));
console.log(name.endsWith('lo'));
console.log(name.charAt(name.length - 1));
console.log(name.repeat(5));
console.log(name.toUpperCase().startsWith('YU'));
console.log(name.toLowerCase().endsWith('ra'));
let string = "    password    ";
console.log(string);
console.log(string.trimStart());
console.log(string.trimEnd());
let message3 = 'dumb ass';
console.log(`Hello ! ${message3} !`);
function sumUp(a, b) {
   return a + b;
}
console.log(`The sum is equal to ${sumUp(45, 55)} dollars.`);
console.log(`
Fuck, Fuck, Fuck,
Pussy, Pussy, Pussy,
Boobs, Boobs, Boobs,
`)
console.log(string.includes('ss')); 
console.log(name.includes('Yu'));
console.log(string.includes('ttt'));
// Function Declaration

function greeting3(nomen) {
   console.log('Hello, ', nomen);
};

greeting3('Tanya');
// Function Expression
const greeting5 = function(nomen) {
   console.log('Hello, ', nomen);
};
let nameGf = 'Roxana';
greeting5(nameGf); 
console.log(typeof greeting3);
console.dir(greeting5);
// Anonimous functions
// let counter = 0;
// setInterval(function() {
//    console.log(++counter);
// }, 1000);
// let counter = 0;
// const interval = setInterval(function() {
//    if (counter === 10) {
//       clearInterval(interval);
//    } else {
//       console.log(++counter);
//    };
// }, 1000);
const arrow = (nomen, age) => {
   console.log(`This person's name is ` + nomen + ` and the age of this person is ` + age + ` years old.`);
};
arrow('Sam', 45);
const arrow2 = nomen => console.log(`Hello, my dear`, nomen);
arrow2(`Jesse`);
const bigSum = num => console.log(num**2);
bigSum(5);
const bigSum2 = (num, pow) => console.log(num**pow);
bigSum2(5,5);

const bigSum3 = (a = 4, b = a * 3) => a + b;
console.log(bigSum3(8, 5));

function sumAll(...all) {
   let result = 0;
   for(let num of all) {
      result += num;
   };
   return result;
};
let res = sumAll(3, 6, 9, 7, 45);
console.log(res);

// function showNumber(num) {
//    console.log(num);
//    let timeId = setTimeout(showNumber, 1000, ++num);
//    if (num === 10) {
//       clearTimeout(timeId);
//    };
// };
// setTimeout(showNumber, 1000, 1);

let result10 = 0;
function showResult(number) {
   console.log(result10);
   result10 += number;
   if (result10 === 30) {
      clearInterval(timer);
   }
};
let timer = setInterval(showResult, 1000, 3);


function createMessage(text, name) {
   let message = `${text} ${name}`;
   return message;
};
function showMessage(message) {
   console.log(message);
};
function useMessage(text, name) {
   showMessage(createMessage(text, name));
};

useMessage('Hi, Hi, Hi, dear friend', 'Yuriy');


function getRandom(minimum, maximum) {
   let rand = Math.floor(minimum + Math.random()*(maximum - minimum));
   console.log(rand);
}

getRandom(56, 89);

let sum2 = 9;
function calcSum() {
   sum2++;
   console.log(sum2);
}

calcSum();
calcSum();
calcSum();

let width = 100;
function growWidth() {
   width++;
   document.querySelector('.out4').style.width = width + 'px'
}
document.querySelector('.out4').addEventListener('click', growWidth)

let height = 100;
function growHeight() {
   height++;
   document.querySelector('.out4').style.height = height + 'px';
}
document.querySelector('.out4').onclick = growHeight;

function calculateSum(a = 0, b = 5) {
   console.log(a + b);
}
calculateSum(5, 10);
let newVar = 20;
calculateSum(newVar);

function getSum(a, b = 0) {
   document.querySelector('.out5').textContent = a + b;
}
getSum(20, 100);

function getSum2(element, a, b = 10) {
   document.querySelector(element).textContent = a * b;
}
getSum2('.out6', 500, 700);

function getSum3(x, y, elem = '.out5') {
   console.log(arguments);
   document.querySelector(elem).textContent = arguments[0] + arguments[1];
}
getSum3(45, 100);

// getSum3(100, 100, document.querySelector('.out6'));

const out6 = '.out6';
getSum3(250, 250, out6);

function getSumAll() {
   console.log(arguments);
   // let sum = 0;
   // for(let i = 0; i < arguments.length; i++) {
   //    sum += arguments[i];
   // };
   // console.log(sum);
   let sum = Array.from(arguments).reduce((accum, item) => accum += item);
   console.log(sum);
}
getSumAll(2, 4, 6, 7, 9, 10);

function getSumAll2(...args) {
   console.log(args);
   let sum = args.reduce((accum, item) => accum += item);
   console.log(sum);
}
getSumAll2(10, 20, 30, 40);

function showNumber(number) {
   document.querySelector('.out6').innerHTML = `<b>${number}</b>`
}
function showNewMessage(func, ...num) {
   func(num);
}
showNewMessage(showNumber, 69, 77, 333);

function calcNum(x, y) {
   return x + y
}
function calcNum2(x, y) {
   return x * y
}
console.log(calcNum(3, 4) + calcNum2(4, 5));

function randInt(min, max) {
   let rand = min + Math.random()*(max - min + 1);
   return Math.floor(rand)
}
console.log(randInt(0, 5) + 100);
const ran = randInt(50, 100);
console.log(ran);
document.querySelector('.out4').textContent = randInt(100, 300);
document.querySelector('.out4').style.background = `rgb(${randInt(0, 255)},${randInt(0, 255)},${randInt(0, 255)})`;
document.querySelector('.btn').addEventListener('click', 
   function() {
      let info = document.querySelector('.inp').value;
      document.querySelector('#output').textContent = `Hello, ${clearText(info)}`;
      console.log(`Hello, ${clearText(info)}`);
});
function clearText(data) {
   return data.trimStart().toLowerCase();
}

function indexOfEmul (arr, item) {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) return i;
   };
   return -1
}

let outcome = indexOfEmul([25, 34, 45, 23, 9], 45);
console.log(outcome);

document.getElementById('btn2').addEventListener('click', 
   function() {
      let v = +document.getElementById('inp').value;
      if(isNaN(v)) {
         console.log('This is not a number !'); 
         return;
      };
      if (v <= 0 || v >= 120) {
         console.log('You are either too old or have not been born yet. Please enter correct age !')
         return;
      };
      document.getElementById('output2').innerHTML = v;
      console.log(v);
   });
const array = [[3, 5, 8],[2, 7, 4],[1, 5, 9, 3, 8],[9, 3, 11, 20]];

function sumUpArray(arr) {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      sum += sumArray(arr[i]);
   };
   return sum; 
}
function sumArray(arr) {
   let sum = 0;
   for(let i = 0; i < arr.length; i++) {
      sum += arr[i];
   };
   return sum;
}
console.log(sumUpArray(array));

const evenArray = array.filter(function(item){
   return sumArray(item) % 2 !== 0
});
console.log(evenArray);

function drawFunc() {
   return sumArray;
}
let s = drawFunc();

console.log(s([6, 5, 3, 7]));

const array2 = [22, 3, 41, 5, 6];
let array2new = array2.map(pow3);
function pow3(a) {
   return a**3; 
}
console.log(array2);
console.log(array2new);

let array3new = array2.map(function(item) {
   return item**3;
});
console.log(array2);
console.log(array3new);

let array4new = array2.map(item => item**3);
console.log(array2);
console.log(array4new);

const array5new = array2.filter(function(item) {
   if (item % 2 === 0)
   return true; 
});
console.log(array2);
console.log(array5new);

const array6 = array2.filter((item, index) => index % 2 !== 0);
console.log(array6);

document.querySelector('#btn2').addEventListener('click', function() {
   console.log(this);
});
document.querySelector('#btn2').addEventListener('click', () => {
   console.log(this);
});

const funcArrow = (...all) => {
   console.log(all);
   console.log('Greetings, Greetings, Greetings !!!');
}
funcArrow(67, 78, 98, 199);

function createMemeber(name) {
   return function(lastName) {
      console.log(name, lastName)
   }
}
const getLastName = createMemeber('Vova');
console.log(getLastName('Burmistrov'));

const cars2 = ['Toyota', 'BMW', 'Mercedes', 'Audi'];
const fibNumbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
console.log(fibNumbers);
console.log(cars2);

const firstCar = cars2.shift();
console.log(cars2);
console.log(firstCar);
cars2.unshift('GAZ');
console.log(cars2);
const lastCar = cars2.pop();
console.log(cars2);
console.log(lastCar);
cars2.push('LADA');
console.log(cars2);
cars2.reverse();
console.log(cars2);
const text = 'Привет,я изучаю JavaScript !';
let reverseText = text.split('').reverse().join('');
console.log(reverseText);
const index = cars2.indexOf('BMW');
console.log(index);
cars2[index] = 'Ferrari';
console.log(cars2);
const people = [
   {
      name: 'Vova',
      lastName: 'Semenov',
      age: 40,
      netWorth: 1000,
   },
   {
      name: 'Galya',
      lastName: 'Romanova',
      age: 30,
      netWorth: 2000,
   },
   {
      name: 'John',
      lastName: 'Smith',
      age: 34,
      netWorth: 5000,
   },
];
// let personIndex = people.findIndex(person => person.age === 40);
// console.log(personIndex);
// let personDetails = people.find(person => person.name === 'Vova');
// console.log(personDetails);
for(const person of people) {
   if (person.age === 30) {
      console.log(person);
   };
};
for (const index in people) {
   if(people[index].lastName === 'Smith') {
      console.log(index);
   };
};
console.log(cars2.includes('LADA'));
const carsUpperCase = cars2.map(item => item.toUpperCase());
console.log(carsUpperCase);
const powC = num => num ** 2;
const fibNumPow2 = fibNumbers.map(powC);
console.log(fibNumPow2);
const resFilter = fibNumbers.filter(num => num > 10);
console.log(resFilter);
const totalWorth = people.filter(person => person.netWorth <= 2000).reduce((acc, person) => acc += person.netWorth, 0);
console.log(totalWorth);
fibNumbers.forEach((num, index) => {
   fibNumbers[index] = num * 3;
});
console.log(fibNumbers);
