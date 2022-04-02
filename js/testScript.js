
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
// console.log('res: ', res)

// //Замыкания 
// function createMember (name){
// 	return function (lastName) {
// 		console.log(name+lastName)
// 	}
// }

// const logWithLastName = createMember ('Serge ')
// console.log(logWithLastName('Miro'))


// //Массивы
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
// console.log('reverseText: ', reverseText);

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

//---------
