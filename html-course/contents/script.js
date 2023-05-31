
let name = 'Inna';
let pass = 555;

const person1 = new User (name, pass);
console.log(person1);

const person2 = new User ('Ivan', 777);
console.log(person2);

let a = 'Olga';
let b = 333555845678;

const person3 = new User (a, b);
console.log(person3);
console.log(person3.validatePassword());

const student1 = new Student ('Gosha', 567444, 'Aspirant');
console.log(student1);
console.log(student1.getCourses());
console.log(student1.validatePassword());