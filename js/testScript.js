

function calculateAge(year){
	return 2022 - year					
}


function logInfoAbout(name, year) {
	const age = calculateAge(year)

	if (age > 0) {
		console.log('My name is ' + name + ', and I have ' + age + ' years old.')
	} else {
		console.log('LOL' + name)
	}
}

logInfoAbout('Serge', 1990)

// // МАССИВЫ
// const cars = ['Mazda', 'Mersedez', 'Ford']
// console.log(cars.length)
// console.log(cars[0])
// console.log(cars[1])
// cars[0] = 'Porcshe'
// console.log(cars);


// ЦИКЛЫ
const cars = ['Mazda', 'Mersedez', 'Ford', 'Bmw']
for (let i = 0; i < cars.length; i++) {
	const car = cars[i];
	console.log(cars);
}

//ЧИСЛА
const num = 42
const float = 42.42
console.log(float)

//MATH
console.log(Math.sqrt(121))
console.log(Math.abs(-100));
console.log(Math.round(4.8));

function getRandomNumber(min, max){ //from 1 to 20 without decimels
return Math.round(Math.random()*(max-min+1)+min)
}
console.log(getRandomNumber(1, 20));

//Строки
const namee = 'Serge'
const agee = 31
const output = `My name is ${namee} and I have ${agee} years old.`
console.log(output);


//Функции
//Function declaration - можно вызывать ДО и ПОСЛЕ написания функции
function greet(name) {
	console.log('Hello, my name is ' + name );
}
greet('Serge')

//Function express - можно вызывать только ПОСЛЕ, вызывать ДО - нельзя
const greet2 = function greet2(age) {
	console.log('I have '+ age + ' years old.' );
}
greet2(31)

//Function anonyme
let counter = 0
const interval = setInterval(function() {
	if (counter === 5) {
		clearInterval (interval)
	} else {
		console.log(++counter)
	}
}, 2000)

//Стрелочные функции
function greet(name) {
	console.log('Hello, my name is', name);

}