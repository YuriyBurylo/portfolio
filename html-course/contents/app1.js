const array = [2, 3, 5, 6, 8, 12];
const out_1 = document.querySelector('.out-1');
const out_2 = document.querySelector('.out-2');
const out_3 = document.querySelector('.out-3');

function upgradeArray(arr, func, block) {
    arr.forEach((item, index) => arr[index] = item * 5);
    console.log(arr);
    func(arr, block);
}

function showArray(arr, block) {
    let acc = '';
    for(let i = 0; i < arr.length; i++) {
        acc += arr[i] + '_';
    };
    block.innerHTML = acc;
}
upgradeArray(array, showArray, out_1);

function squad(item) {
    return item**2
}
const array2 = array.map(item => item ** 3);
showArray(array2, out_3);

document.querySelector('.btn').addEventListener('click', () => {
    showValue(fixUserName)
});
function showValue(fixFunc) {
    const userName = document.getElementById('inp').value;
    console.log(fixFunc(userName));
    document.querySelector('.out').innerHTML = userName;
}
function fixUserName(str) {
    return str.trim().toLowerCase();
}
function pageLoader(callbackfn) {
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => getAJAX(data))
}
function getAJAX(data) {
    console.log('Запрос отправлен');
    console.log('Данные получены');
    console.log(data);
}
pageLoader(getAJAX);

const person = {
    name: 'Yuriy',
    age: 41,
    occupation: 'lawyer',
    languages: ['ru', 'ukr', 'en'],
    isMarried: false,
    isprogrammer: false,
    'Learning JavaScript': true,
    ['Computed key_' + (1 + 6)]: 'Unknown value',
    greeting() {
        console.log('Hi there !');
    },
    info() {
        console.log('this', this);
        console.info('Человек по имени - ', this.name);
    },
};
person.greeting();
console.log(person.name);
console.log(person.languages);
console.log(person['age']);
const maritalStatus = 'isMarried';
console.log(person[maritalStatus]);
console.log(person['Learning JavaScript']);
console.log(person['Computed key_7']);
person['Computed key_7'] = 'New Value';
console.log(person['Computed key_7']);
person['Computed key_7'] = undefined; 
console.log(person['Computed key_7']);
delete person['Computed key_7'];
console.log(person);
console.log(person['Computed key_7']);
person.age++;
console.log(person.age);
person.age = 30;
console.log(person.age);
person.age--;
console.log(person.age);
person.age++;
console.log(person.age);
person.languages.push('de');
console.log(person.languages);
person.languages.unshift('fr');
console.log(person.languages);
person.languages.pop();
person.languages.shift();
console.log(person.languages);
// const name = person.name;
// console.log(name);
// const age = person.age;
// console.log(age);
// const occupation = person.occupation;
// console.log(occupation);
// const learningJavaScript = person['Learning JavaScript'];
// console.log(learningJavaScript);
// const languages = person.languages; 
// console.log(languages);
let {name, age, occupation, languages, isprogrammer} = person;
console.log(name, age, occupation, languages, isprogrammer);
console.log(age);
age = 20;
console.log(age);
age = 50;
isprogrammer = true;
console.log(isprogrammer);
console.log(person);
// for(let key in person) {
//     if (person.hasOwnProperty(key)){
//         console.log('Key:', key);
//         console.log('Value:', person[key]);
//     };
// };
console.log(Object.keys(person));
Object.keys(person).forEach(key => {
    console.log('key : ', key);
    console.log('value : ', person[key]);
});
person.info();

const logger = {
    keys() {
        console.log('Keys: ', Object.keys(this));
    },
    keysAndValues() {
        Object.keys(this).forEach(key =>
            console.log(`${key} : ${this[key]}`))
    },
    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log("-----Start-----");
        };
        Object.keys(this).forEach((key, index, array) => {
            console.log(`${key} : ${this[key]}`);
            if (between && index !== array.length - 1) {
                console.log("----------------");
            };
        });
        if (bottom) {
            console.log("------End------");
        };
    },
}
// logger.keys.call(person);
// const keysAndValues = logger.keysAndValues.bind(person);
// keysAndValues();
// logger.withParams.call(person, true, true, true);
logger.withParams.apply(person, [true, true, true]);
const openBtn = document.querySelector('#open');
const dialog = document.querySelector('dialog');
const closeBtn = document.querySelector('#close');
openBtn.onclick = () => dialog.showModal();
closeBtn.onclick = () => dialog.close();

let man = new Object({        
    name: 'Sasha',
    lastName: 'Ivanov',
    age: 30,
    'likes javascript': true,
    isMarried: false,
});
let id = Symbol('id');
let firstPart = 'Likes expensive cars';
let man2 = {
    nomen: 'Anna',
    age: 23,
    [firstPart]: true,
    [id]: 1098,

};
console.log(man);
console.log(man2);
let arr3 = new Array('Lana', 30, false);
console.log(arr3);
console.log(man2[firstPart]);
console.log(man2[id]);
console.log(parseInt('259000'));
let floatNum = parseFloat('345.789');
console.log(floatNum);
console.log(Boolean(floatNum));
console.log(Boolean("0"));
const userInfo = {
    name: 'Vano',
    lastName: 'Kiwi',
    address: {
        city: 'Kiev',
        street: 'Maidan',
    },
    sex: 'male',
    age: 35,
};
console.log(userInfo.address.city);
console.log(userInfo.address.street);
console.log(userInfo);
console.log(userInfo.address);

function makeNewObject(name, age, sex, married) {
    return {
        name,
        age,
        sex,
        married,
        'learns JavaScript': true,
    };
}
 let newUser = makeNewObject('Alex', 40, 'male', true);
 console.log(newUser);
 newUser.isProgrammer = true;
 console.log(newUser);
 newUser['likes to fuck girls'] = true;
 console.log(newUser);
//  newUser.address = {
//     county: 'Kent',
//     city: 'Bradford',
//     street: 'Baker Lane',
//  };
 console.log(newUser);
 newUser['learns JavaScript'] = undefined; 
 newUser['married'] = undefined;
 newUser['isProgrammer'] = undefined;
 console.log(newUser);
 delete newUser['isProgrammer'];
 delete newUser.married;
 delete newUser['learns JavaScript'];
 delete newUser.sex;
 console.log(newUser);
 newUser.name = 'Masha';
 newUser.age = 50; 
 newUser['likes to fuck girls'] = false; 
//  newUser.address.county = 'Durham';
 console.log(newUser);
 let newUserFriend = newUser;
 console.log(newUserFriend);
 newUserFriend.age = 70;
 console.log(newUser);
 newUserFriend.address = {
    country: 'USA',
    state: 'California',
    city: 'San-Francisco',
 };
 console.log(newUser);
 console.log(newUserFriend);
 const user2 = Object.assign({}, newUser);
 console.log(user2);
 user2.name = 'Jack';
 user2.age = 16;
 console.log(user2);
 console.log(newUser);
 const user3 = Object.assign({}, {name: 'Anna', lastName: 'Sentsova'});
 console.log(user3);
 console.log(user3.age);
 user3.age = 45; 
 console.log(user3);
 if (user3.age) {
    console.log('Возраст человека : ', user3.age);
 } else {
    console.log('Значение не задано !');
 };
 console.log(newUser?.address?.city);
 if ('address' in newUser) {
    console.log(newUser.address);
 } else {
    console.log('Sorry, there is no such property');
 };
const user4 = {
    name: 'Ivan',
    lastName: 'Potapov',
    age: 25,
    address: {
        country: 'Russia',
        city: 'Moscow',
        street: 'Red Square',
    },
    showInfoPerson: function () {
        console.log(`${this.name} ${this.lastName} is ${this.age} years old. His address is : ${this.address.country}, ${this.address.city}, ${this.address.street}`);
    },
};
user4.showInfoPerson();

function UserInfo(name, lastName, age, sex) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.sex = sex;
}
 const ind = new UserInfo('Jim', 'Smith', 21, 'male');
 console.log(ind);
 const ind2 = new UserInfo('Anna', 'Bolotova', 89, 'female');
 console.log(ind2);

 function ShowDetails(name, lastName, age, phone) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.phone = phone;
 }
const ind3 = new ShowDetails('John', 'Swallow', 87, 785000);
console.log(ind3);

function createObject(name, lastName, age, sex) {
    return {
        name,
        lastName,
        age,
        sex,
        ['likes to cook']: true
    }
}
const ind4 = createObject('Ivan', 'Semenov', 36, 'male');
console.log(ind4);
const ind5 = createObject('Jerry', 'Simons', 54, 'male');
console.log(ind5);

Object.defineProperty(ind5, 'occupation', {
    value: 'lawyer',
    enumerable: false,
});
let keys = Object.keys(ind5);
let values = Object.values(ind5);
console.log(keys);
console.log(values);
let entries = Object.entries(ind5);
console.log(entries);

console.log(ind5);

const persona = Object.create({
    calculateAge() {
        console.log('Age : ', new Date().getFullYear() - this.birthYear)
    }
}, 
{
    name: {
        value: 'Jesse',
        enumerable: true,
        writable: true,
        configurable: true,
    },
    birthYear: {
        value: 1980,
        enumerable: true,
        writable: true,
        configurable: true,
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear;
        },
        set(value) {
            document.body.style.background = 'red';
            console.log('Set age :', value);
        },
    },
});

for (let key in persona) {
    if (persona.hasOwnProperty(key)) {
        console.log (`Key: ${key} = ${persona[key]}`);
    }
};
// console.log(persona);
// persona.birthYear = 2000;
// console.log(persona);
// delete persona.birthYear;
// console.log(persona);
// console.log(persona.age);
console.log(persona.age);
persona.calculateAge();


let a = 10;
let b = 20;
let interval;
let i = new Promise((resolve, reject) => {
    interval = setInterval(() => {
        a += b;
        console.log(a);
        if (a > 50) {
            resolve(a)
        };
    }, 3000)
});
i.then(data => {
    console.log('Bingo: ', data);
    clearInterval(interval);
});

const ONE_JUMP_TIME = 500;
const ONE_SQUAT_TIME = 1000;

function jumping(jumps) {
    return new Promise ((resolve, reject) => {
        if (jumps > 20 || jumps === undefined) {
            reject(new Error ('Слишком много прижков !'));
        };
        setTimeout(
            resolve(jumps), 
            jumps * ONE_JUMP_TIME)});
}
function squatting(squats) {
    return new Promise ((resolve, reject) => {
        if (squats > 10 || squats === undefined) {
            reject(new Error('Слишком много приседаний !'));
        };
        setTimeout(
            resolve(squats), 
            squats * ONE_SQUAT_TIME)});
}
// console.log('Начать упражнения !')
// jumping(100)
//     .then(data => {
//         console.log(`Выполнил ${data} прижков на месте`);
//         return squatting(5);
//     })
//     .then(data => {
//         console.log(`Выполнил ${data} приседаний`);
//         return 'Упражнения закончены. Ура !';
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err.toString());
//     });
async function training(jumps, squats) {
    try {
        console.log('Начинаем тренировку !');
        await jumping(jumps);
        console.log(`Выполнил ${jumps} прижков на месте`);
        await squatting(squats);
        console.log(`Выполнил ${squats} приседаний`);
        console.log('Тренировка прошла успешно ! Ура !');
    }
    catch(err) {
        console.log(err.toString());
    }
}

training(10, 5).then(()=> {
    console.log('Какое счастье ! What a miracle !');
});




