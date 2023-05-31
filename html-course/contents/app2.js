const greeting = document.getElementById('greeting');
// const heading1 = document.getElementsByTagName('h2')[0];
// const heading2 = heading1.nextElementSibling;
const headingsList = document.querySelectorAll('h2');
const text = document.querySelector('p');
console.log(greeting);
console.log(headingsList);

function changeStyle(node, color = 'red', bgcolor = 'black', padding = '2rem') {
    node.style.color = color;
    node.style.backgroundColor = bgcolor;
    node.style.textAlign = 'center';
    node.style.padding = padding;
}
setTimeout(() => {
    changeStyle(greeting, 'yellow', 'green', '1.5rem');
    greeting.textContent = 'I love you, baby !!! I love you, my sweetheart !!!';
    console.log(greeting.innerHTML);
}, 3000);

setTimeout(() => {
    changeStyle(text,)
}, 5000);

setTimeout(() => {
    changeStyle(headingsList[0], '#fff', 'blue', '1.2rem')
}, 7000);

setTimeout(() => {
    changeStyle(headingsList[1], 'orange', 'green', '1.2rem')
}, 9000);

greeting.onclick = function () {
    if (this.style.backgroundColor === 'green') {
        this.style.color = 'red';
        this.style.backgroundColor = '#000';
        this.style.padding = '2rem';
    } else {
        this.style.color = 'yellow';
        this.style.backgroundColor = 'green';
        this.style.padding = '1.5rem';
    };
};
text.addEventListener('dblclick', function () {
    this.style.color = '#fff';
    this.style.backgroundColor = 'red';
    this.style.padding = '2.5rem';
});
const headNode = document.head;
console.log(headNode);
const bodyNode = document.body;
console.log(bodyNode);

const bodyFirstChild = bodyNode.firstChild;
console.log(bodyFirstChild);
const bodyLastChild = bodyNode.lastChild;
console.log(bodyLastChild);
const bodyNodes = bodyNode.childNodes;
console.log(bodyNodes);
const bodyChildren = bodyNode.children;
console.log(bodyChildren);
const prevSibling = bodyNode.previousSibling;
console.log(prevSibling);
const prevElSibling = bodyNode.previousElementSibling;
console.log(prevElSibling);
const nextSibling = bodyNode.nextSibling;
console.log(nextSibling);
const nextElSibling = bodyNode.nextElementSibling;
console.log(nextElSibling);  
const parentNode = bodyNode.parentNode;
console.log(parentNode);
const parentEl = bodyNode.parentElement;
console.log(parentEl);
const headings = document.querySelectorAll('h2');
console.log(headings);
const heading = document.querySelectorAll('.h2-heading');
console.log(heading);
const listItems = document.querySelectorAll('.list .list-item');
console.log(listItems);
const greet = document.querySelectorAll('#greeting');
console.log(greet);
for(let item of listItems) {
    console.log(item);
};
console.log(headings[0]);
listItems.forEach(item => console.log(item));
const list = document.querySelector('ul');
console.log(list.firstElementChild);
console.log(list.lastElementChild);
const greetId = document.getElementById('greeting');
console.log(greetId);
const headings2 = document.getElementsByTagName('h2');
console.log(headings2); 
const newList = document.getElementsByClassName('list-item');
console.log(newList);
const listing = document.getElementsByName('listing');
console.log(listing);
const listing2 = document.querySelectorAll('[name="listing"]');
console.log(listing2);
const listParent = newList[0].closest('.list');
console.log(listParent);
if (newList[0].matches('.list-item')) {
    console.log('Bingo !');
} else if (newList[0].matches('.listing')) {
    console.log("It`s not that good !");
} else {
    console.log("it`s a real fuckup !");
};
const paragraph = document.querySelector('p');
const paraText = paragraph.innerHTML;
console.log(paraText);

const paraTextOuter = paragraph.outerHTML;
console.log(paraTextOuter);
paragraph.innerHTML = 'Hello World ! Hello World ! Hello World !';
console.log(paragraph.innerHTML);
const element = document.querySelectorAll('h2')[1];
const elementText = element.textContent;
console.log(elementText);
element.textContent = 'You are the best of the best !!!'
console.log(element.textContent);
const symb = paragraph.nextSibling;
const comment = symb.nextSibling; 
console.log(comment.data);
comment.data = 'New comments. New issues. New solutions';
console.log(comment.data);
const newElement = document.createElement('div');
console.log(newElement);
newElement.textContent = 'Bravo ! Bravo ! Bravo !';
console.log(newElement);
paragraph.after(newElement);
newElement.style.backgroundColor = 'yellow';
newElement.style.fontSize = '2rem';
newElement.style.textAlign = 'center';
newElement.style.color = 'green';
const newHeading = document.createElement('h1');
newHeading.innerHTML = 'New Heading ! New Heading ! New Heading !';
newHeading.style.backgroundColor = '#000';
newHeading.style.color = '#fff';
newHeading.style.fontSize = '2rem';
newHeading.style.textAlign = 'center';
list.after(newHeading);
const newtext = document.createTextNode('Привет, Вася ! Рад тебя видеть здесь !');
list.append(newtext);
const newText2 = document.createTextNode('Привет всем !!! Привет муркет !');
list.prepend(newText2);
const newParagraph = document.createElement('p');
newParagraph.innerHTML = 'Привет, омлет !!!';
console.log(newParagraph);
element.insertAdjacentHTML('afterend', '<p>Jesse Jane - the best actress of the year !</p>');
element.insertAdjacentElement('beforebegin', newParagraph);
list.insertAdjacentText('beforeend', 'I am very glad to see you here ! You are welcome !');
paragraph.append(newParagraph);
const jesse = element.nextSibling;
console.log(jesse);
element.insertAdjacentElement('afterend', jesse);
newElement.prepend(newtext);
newHeading.append(newText2);
console.log(list);
list.lastChild.remove();
jesse.remove();
const listClassNames = list.className;
console.log(listClassNames);
list.className = 'newlist';
console.log(list.className);
list.classList.add('list_red');
list.classList.add('list');
for(let className of list.classList) {
    console.log(className);
};
console.log(list.classList.contains('newlist'));
list.style.backgroundColor = '#00f';
console.log(list.style.backgroundColor);
list.style.backgroundColor = "";
const elemStyle = getComputedStyle(list);
console.log(elemStyle.backgroundColor);
console.log(elemStyle.fontSize);
list.classList.toggle('list');
console.log(list.className);
const newHeadingStyle = getComputedStyle(newHeading);
console.log(newHeadingStyle.color);
console.log(newHeadingStyle.backgroundColor);
console.log(newHeading.style.textAlign);
newHeading.style.color = 'red'; 
console.log(newHeading.style.color);
newHeading.style.cssText = `
margin: 30px;
background-color: #0f0;`
console.log(newHeadingStyle.margin);
console.log(newHeadingStyle.backgroundColor);
console.log(list.tagName);
console.log(newParagraph.tagName); 
list.hidden = true;
newHeading.hidden = true;
console.log(greetId.getAttribute('id'));
greetId.setAttribute('name', 'hello-message');
if (greetId.hasAttribute('name')) {
    console.log(greetId.getAttribute('name'));
};
greetId.removeAttribute('name');
if (greetId.hasAttribute('name')) {
    console.log(greetId.getAttribute('name'));
} else {
    console.log('Sorry, there is no such attribute here !');
};
const para = document.querySelector('.one');
para.style.width = '200px';
para.style.padding = '50px';
para.style.fontSize = "1.5rem";
console.log(para.style);
para.classList.add('two', 'three');
para.classList.remove('three');
const btn = document.querySelector('.btn');
btn.onclick = function () {
    this.classList.toggle('three');
};
para.setAttribute('data', 'privet moy svet !!!');
const paraData = para.getAttribute('data');
console.log(paraData);
const link = document.querySelector('link');
console.log(link.href);
para.setAttribute('data-num', 5);
console.log(para.getAttribute('data-num'));

const gas = document.querySelectorAll('.gas');
for(let i = 0; i < gas.length; i++) {
    gas[i].onclick = function () {
        let amount = document.querySelector('.gallons').value;
        let price = this.getAttribute('data');
        console.log(amount * price);
    }
};
const a = document.createElement('div');
a.innerHTML = 'Hello World !';
a.classList.add('one', 'two', 'btn');
a.onclick = function () {
    alert('ALARM, ALARM, ALARM !!!');
};
document.getElementById('box').appendChild(a);
let string = 'Happy New Year !!!';
let newArr = string.split(' ');
console.log(newArr);
let newString = newArr.join('*');
console.log(newString);
let massiv = [1, 3, 5, 7, 9];
massiv.forEach((elem, index) => console.log(`${index} : ${elem*3}`));
massiv.push('jesse jane');
console.log(massiv);
massiv.pop();
console.log(massiv);
let num = massiv.pop();
console.log(num);
console.log(massiv);
delete massiv[2];
console.log(massiv);
massiv.splice(2,2,'hi');
console.log(massiv);
massiv.unshift('Jolly Good');
console.log(massiv);
massiv.unshift('Ha ha ha');
console.log(massiv);
massiv.shift();
console.log(massiv);
let message = massiv.shift();
console.log(massiv);
console.log(message);
let message2 = massiv.pop();
console.log(message2);
console.log(massiv);
massiv.push(56,76,89,90);
console.log(massiv);
let bit = massiv.splice(2,3, 'Jolly Good !');
console.log(bit);
console.log(massiv);
let newMassive = massiv.filter(item => {
    if (typeof item === 'string') {
        return true;
    };
});
console.log(newMassive);
let newMassive2 = massiv.filter(item => {
    if (item >= 20) {
        return true
    };
});
console.log(newMassive2);

let newMassive3 = massiv.filter((item, index) => {
    if (index % 2 === 0 && index !== 0) {
        return item
    };
});
console.log(newMassive3);
let newMassive4 = massiv.map(item => item**3);
console.log(newMassive4);

let newMassive5 = massiv.map((item, index) => {
    if (index > 1) {
        item = item * 10;
    }
    return item;
});
console.log(newMassive5);
let newMassive6  = massiv.map(item => {
    if (item % 2 == 0 && typeof item === 'number') {
        item = item * 10;
    };
    return item;
});
console.log(newMassive6);
let massik = [1, 23, 4, 2, -5, -3, 7];
let sumMassik = massik.reduce((accum, item) => {
    accum += item;
    return accum;
}, 10);
console.log(sumMassik);
let sumMassik2 = massik.reduce((accum, item) => {
    if (item < 0) {
        accum += item;
    };
    return accum;
}, 0);
console.log(sumMassik2);
let max = massik.reduce((accum, item) => {
    if (item > accum) {
        accum = item;
    };
    return accum;
});
console.log(max);
let min = massik.reduce((accum, item) => {
    if(item < accum) {
        accum = item;
    };
    return accum;
});
console.log(min);
let complexArray = [
    {"id" : 34, "city" : "London"},
    {"id" : 50, "city" : "New York"},
    {"id" : 67, "city" : "Paris"},
];
let cities = complexArray.reduce((accum, item) => {
    accum.push(item.city);
    return accum
}, []);
console.log(cities);
let str = 'London';
console.log(Array.isArray(str));
let d = [2, 5, 3, 8, 1];
let firstNum = d.shift();
console.log(firstNum);
console.log(d);
d.unshift(10);
console.log(d);
let lastNum = d.pop();
console.log(lastNum);
console.log(d);
let len = d.unshift(99);
console.log(d);
console.log(len);
d = [15, 12, 8, 5, 3, 4, 17, 20, 6];
let newD = d.slice(2);
console.log(d);
console.log(newD);
let string2 = 'Hello';
let string3 = string2.slice(2,4);
console.log(string2);
console.log(string3);
let newData = newD.slice(2, 5);
console.log(newD);
console.log(newData);
const k = [21, 22, 23, 24, 25];
const j = [31, 32, 33, 34, 35];
const t = [];
t[22] = 100;
let z = j.concat(t, k);
console.log(z);
let stroka = 'Hello';
let stroka2 = 'Goga';
let newStroka = stroka.concat(' ', stroka2, ' !');
console.log(newStroka);
let w = [34, 56, 67, 78, 89, 100, 120];
console.log(w);
let ww = w.splice(3, 3, 'Jesse Jane', 'the best actress');
console.log(w);
console.log(ww);
const test = [22, 45, 34, 65, 89, 90, 45, 65];
console.log(test.indexOf(34));
if (test.indexOf(80) !== -1) {
    console.log('Yes, this value is available');
} else {
    console.log('No, this value is unavailable');
};
console.log(test.includes(95));
console.log(stroka.includes('o'));
const arrNew = [
    {"person" : "Petrov", "age" : 23},
    {"person" : "Ivanov", "age" : 45},
    {"person" : "Alekseev", "age" : 50},
];
let extract = arrNew.filter(item => item.person.includes('ov'));
console.log(extract);
console.log(test.indexOf(650));
console.table(test);
console.log(test.indexOf(34));
const stringArray = ['Hello', 'Hi', 'Jesse Jane'];
console.log(stringArray.indexOf('Jesse Jane'));
console.log(stroka.indexOf('h'));
if(test.indexOf(90) !== -1) {
    console.log(`It's been found !`);
} else {
    console.log(`it's not here !`);
};
let found = stringArray.indexOf('Jesse Jane');
console.log(found);
console.log(test.indexOf(65, 4));
function indexOfEmulator (ar, item, from = 0) {
    for (let i = from; i < ar.length; i++) {
        if (ar[i] === item) {
            return i;
        };
    };
    return -1;
}
console.log(indexOfEmulator(test, 65));
let v = [2, [4, 5], [3,[6, 8], 5, 8], 6];
let b = v.flat(2);
console.log(v);
console.log(b);
let zzz = [9, 0, 1, 6, 4, 3];
let xxx = zzz.fill(5);
console.log(zzz);
console.log(xxx);
console.log(Object.keys(zzz));
let ccc = {"name" : "Jerry", "lastName" : "Sokolov", "age" : 45, "married" : true};
console.table(ccc);
console.log(Object.keys(ccc));
const qqq = [2, 4, 3, 7, 8, 1, 9, 3, 8];
let finding = qqq.find(item => {
    if (item < 5) {
        return true
    }
});
console.log(qqq);
console.log(finding);
let finding2 = qqq.filter(item => {
    if (item < 5) {
        return true
    }
});
console.log(finding2);
let finding3 = qqq.find(item => {
    if (item > 9) {
        return true
    }
});
console.log(finding3);
let finding4 = qqq.findIndex(item => {
    if(item === 9) {
        return true
    }
});
console.log(finding4);
let finding5 = qqq.indexOf(9);
console.log(finding5);
let finding6 = qqq.findIndex(item => {
    if (item > 9) {
        return true
    }
});
console.log(finding6);
let stringNew = 'Johny_nnnn';
// let finding7 = stringNew.findIndex(item => {
//     if (item === 'n') {
//         return true
//     }
// });
// console.log(finding7);
let finding8 = stringNew.lastIndexOf('n');
console.log(finding8);
let finding9 = qqq.lastIndexOf(3);
console.log(finding9);
let qqqNew = qqq.fill(5);
console.log(qqq);
console.log(qqqNew);
let rrr = [1, 2, [3, 5], 8, [9, 5, 3]];
let rrrNew = rrr.flat();
console.log(rrr);
console.log(rrrNew);
const ttt = [2, 4, 3, 9, 12, 18];
let outcome = ttt.every(item => {
    if (item > 3) {
        return true;
    };
});
console.log(outcome);
const personnel = [
    {name : "Jesse", age : 40},
    {name : "Sarah", age : 20},
    {name : "Ivan", age : 17},
    {name : "Bobby", age : 27},
];
let outcome2 = personnel.every(item => {
    if (item.age > 18) {
        return true;
    };
});
console.log(outcome2);
let outcome3 = ttt.some(item => {
    if (item < 2) {
        return true;
    };
});
console.log(outcome3);
let outcome4 = personnel.some(item => {
    if (item.age < 10) {
        return true;
    };
});
console.log(outcome4);
const fff = [1, 2, 3, 4, 5];
console.log(fff);
fff.reverse();
console.log(fff);
const unsorted = [2, 1, 4, 3, 5];
const ascending = [...unsorted].sort((a, b) => a - b).map(item => item * 10);
const descending = [...ascending].sort((a, b) => b - a).map(item => item * 10);
console.log(unsorted);
console.log(ascending);
console.log(descending);
const citiesRussia = ['Moskow', 'Saint Petesberg', 'Kazan', 'Rostov', 'Vladivostok'];
const citiesEurope = ['Berlin', 'Paris', 'Oslo', 'Madrid'];
console.log(citiesRussia);
console.log(...citiesRussia);
const allCities = [...citiesEurope, 'Washington', ...citiesRussia];
console.log(allCities);
const allCitiesConcat = citiesRussia.concat(citiesEurope).concat('Minsk');
console.log(allCitiesConcat);
const populationRussia = {
    Moskow : 20,
    SaintPetesberg : 12,
    Rostov : 5,
    Kursk : 3,
};
const populationEurope = {
    Moskow : 25,
    Berlin : 12,
    Paris : 10,
    Madris : 9,
};
console.log(populationRussia);
console.log(populationEurope);
const totalPopulation = {...populationRussia, ...populationEurope};
console.log(totalPopulation);

console.log(Math.max(34, 12, 5, 98, 44));
const arrayMax = [34, 12, 5, 98, 44];
console.log(Math.max(arrayMax));
console.log(Math.max(...arrayMax));
const divs = document.querySelectorAll('div');
const nodes = [...divs];
console.log(divs, Array.isArray(divs));
console.log(nodes, Array.isArray(nodes));
function sum (a, b, ...rest) {
    return a + b + rest.reduce((acc, item) => acc + item, 0)
}
console.log(sum (2, 3, 4, 5, 6, 7));
const numbers = [10, undefined, 30, 40, 50];
console.log(sum (...numbers));
let m = numbers[0];
let y = numbers[1];
console.log(m, y);
let [h, u, x, ...others] = numbers;
console.log(h, u = 333, x, others);
const persona = {
    name : "Misha",
    age : 54,
    address: {
        city : "Kiev",
        country : "Ukraine", 
    },
};
const {name: alias = "John", age: years = 35, address : {city : homeTown, country}} = persona;
console.log(alias, years, homeTown, country);
function logPerson({name, age}) {
    console.log(name + ' | ' + age);
}
logPerson(persona);

