
// function calculateAge(year){
// 	return 2022 - year					
// }


// function logInfoAbout(name, year) {
// 	const age = calculateAge(year)

// 	if (age > 0) {
// 		console.log('My name is ' + name + ', and I have ' + age + ' years old.')
// 	} else {
// 		console.log('LOL' + name)
// 	}
// }

// logInfoAbout('Serge', 1990)

// // // МАССИВЫ
// // const cars = ['Mazda', 'Mersedez', 'Ford']
// // console.log(cars.length)
// // console.log(cars[0])
// // console.log(cars[1])
// // cars[0] = 'Porcshe'
// // console.log(cars);


// // ЦИКЛЫ
// const cars = ['Mazda', 'Mersedez', 'Ford', 'Bmw']
// for (let i = 0; i < cars.length; i++) {
// 	const car = cars[i];
// 	console.log(cars);
// }

// //ЧИСЛА
// const num = 42
// const float = 42.42
// console.log(float)

// //MATH
// console.log(Math.sqrt(121))
// console.log(Math.abs(-100));
// console.log(Math.round(4.8));

// function getRandomNumber(min, max){ //from 1 to 20 without decimels
// return Math.round(Math.random()*(max-min+1)+min)
// }
// console.log(getRandomNumber(1, 20));

// //Строки
// const namee = 'Serge'
// const agee = 31
// const output = `My name is ${namee} and I have ${agee} years old.`
// console.log(output);


// //Функции
// //Function declaration - можно вызывать ДО и ПОСЛЕ написания функции
// function greet(name) {
// 	console.log('Hello, my name is ' + name );
// }
// greet('Serge')

// //Function express - можно вызывать только ПОСЛЕ, вызывать ДО - нельзя
// const greet2 = function greet2(age) {
// 	console.log('I have '+ age + ' years old.' );
// }
// greet2(31)

// //Function anonyme
// let counter = 0
// const interval = setInterval(function() {
// 	if (counter === 5) {
// 		clearInterval (interval)
// 	} else {
// 		console.log(++counter)
// 	}
// }, 2000)


// //Стрелочные функции
// const arrow = (name, age) => console.log('Hi, I am ' + name + ' and I have ' + age + ' years')
// arrow('Sergio', 31 )

// // Параметры по умолчанию
// const sum = (a=40, b=a*2) => a+b
// console.log(sum(20, 30));

// function sumAll(...all) {
// 	let result = 0
// 	for (let num of all) {
// 		result += num
// 	}
// 	return result
// }

// const res = sumAll(1, 2, 3, 4)
// console.log(res)

// //Замыкания 
// function createMember (name){
// 	return function (lastName) {
// 		console.log(name+lastName)
// 	}
// }

// const logWithLastName = createMember ('Serge ')
// console.log(logWithLastName('Miro'))


// //Массивы - Array
// const cars = ['Mazda', 'Ford', 'BMW', 'Mersedez']
// const fib = [1, 1, 2, 3, 5, 8, 13]

// function addItemToEnd() {
// }

// //Метод для массива
// cars.push('Renault')
// cars.unshift('Volga')
// const	firstItem = cars.shift()
// console.log(firstItem);
// console.log(cars)

// //Задача-1
// const text = 'Hello, life is good'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText);

// //----------
// const index = cars.indexOf('Ford')
// console.log(cars[index])

// //---------
// const people = [
// 	{name: 'Serge', budget: 1500},
// 	{name: 'ALina', budget: 1000},
// 	{name: 'Richi', budget: 2000}
// ]
// const person = people.find(function(person){
// 	return person.budget === 1500
// })
// console.log(person)

// //---------
// let findedPerson
// for (const person of people) {
// 	if (person.budget === 1000) {
// 		findedPerson = person
// 	}
// }
// console.log(findedPerson);

// //Методы высокого порядка:
// //--Метод MAP, возврат массива
// const upperCaseCars = cars.map (car => {
// 	return car.toUpperCase()
// })
// console.log(upperCaseCars)

// const pow2Fib = fib.map (num => num **2 )
// console.log(pow2Fib);

// const pow3 = num =>num **2
// const pow3Fib = fib.map(pow3)
// console.log(pow3Fib);

// //--Метод Filter, фильтрация массива
// const filteredNumbers = pow3Fib.filter(num=> {
// 	return num>20
// })
// console.log (filteredNumbers);

// //--Метод Reduce, соединение данных
// const allBudget = people
// 	.filter (person => person.budget>1000)
// 	.reduce((acc, person) => {
// 		acc += person.budget
// 		return acc
// 	}, 0)
// console.log(allBudget)


// Обьекты - objects
const person = {
	name: 'Serge',
	lastName: 'Miro',
	age: 31,
	isProgrammer: true,
	languages: ['ru', 'en', 'fr'],
	//синтаксис для добавления ключа в виде функции в обьект
	greet() {console.log('greet from person')},
	//синтаксис для добавления ключа в кавычках в обьект, для сложных названий
	'complex key': 'Complex Value',
	['key_'+(4+2)]: 'Computed Key', //key_6
}
console.log(person.name)
console.log(person['age'])

const ageKey = 'age'
console.log(person[ageKey])

console.log(person['complex key'])
console.log(person)
person.greet()

person.age++ 
person.languages.push('ukr')

delete person['key_6']
console.log(person);

// //**********************************************
// //Деструктуризация - преобразовать ключи обьекта в переменные CONST
// //Пример:
// const name = person.name
// const age = person.age
// const languages = person.languages
// //результат:
// 	//-1
// 	const {name, age, languages} = person
// 	//-2
// 	const {name, age: personAge=18, languages} = person
// 	console.log(name);
// //**********************************************

//Управление обьектом и его ключами через OBJECTS
Object.keys(person).forEach((key) =>{
	console.log(key);
	console.log(person[key]);
})

//КОНТЕКСТ - Context : (THIS) (withParams)
withParams (top = false, between = false, bottom = false) {
	if (top) {console.log(-------start--------)}
	Object.keys(this).forEach((key, index, array) =>{
	console.log(`'${key}': ${this[key]}`)
		if (between && index !==array.length - 1) {
		console.log('-------------------')
		}
	})
	if (bottom) {console.log('-----------End------------')}
}
logger.withParams.call(person, true, true, true)

