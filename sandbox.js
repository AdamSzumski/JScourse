// 1. // Napisz funkcję, która dodaje 2 liczby i zwraca wynik (z użyciem return). Nazwij funkcję sum.


// // function sum (a, b){
// //         return a + b;
// // }

// // - przypisz wywołanie sum(5, 5) funkcji do zmiennej ten
// // - przypisz wywołanie sum(2, 2) funkcji do zmiennej four
// // - wykorzystaj funkcję sum, aby dodać wartości zmiennych ten i four. Wynik przypisz do zmiennej i wydrukuj wartość tej zmiennej na konsoli.



// // const sum = (2, 2);


// // const sum = function (a, b) {
// //     return a + b;
// // }
// // const ten = sum(5, 5);
// // const four = sum(2, 2);
// // console.log(ten);

// // console.log(four);
// // const suma = sum(ten, four);
// // console.log(suma);


// //Zadanie 2
// // Napisz funkcję, która zwraca większą liczbę.

// // Dla wywołania getBiggerNumber(2, 4) zwraca liczbę 4
// // Dla wywołania getBiggerNumber(2, 10) zwraca liczbę 10
// // Dla wywołania getBiggerNumber(2000, 100) zwraca liczbę 2000



// const getBiggerNumber = function (a, b) {
//     if (a > b) {
//         return a;
//     }
//     return b;
// }
// const result = getBiggerNumber(2, 4);
// console.log(result);


// // Zadanie 3
// // Napisz funkcje, która sprawdza czy przekazane liczby są równe:

// // Dla wywołania isEqual(2, 2) zwraca true
// // Dla wywołania isEqual(2, 10) zwraca false
// // Dla wywołania isEqual(2000, 100) zwraca liczbę false
// // Dla wywołania isEqual(100, '100') zwraca liczbę false

// const isEqual = function (x, y) {
//     if (x === y) {
//         return true;
//     }
//     return false;
// }
// const checkIfEqual = isEqual(2000, 100);
// console.log(checkIfEqual);

// // Napisz funkcję, która zwraca długość przekazanej tablicy

// // Dla wywołania getArrayLength([1,2,3]) zwraca 3
// const getArrayLength=[1,2,3];
// console.log (getArrayLength [2]);

// // Dla wywołania getArrayLength([]) zwraca 0 (nie wychodzi)

// // const getArrayLength=[]; 
// // console.log (getArrayLength []);

// // // Dla wywołania getArrayLength([1,2,3,4,5]) zwraca liczbę 5 (nie wychodzi)
// // const getArrayLength=[1, 2, 3, 4, 5]; 
// // console.log (getArrayLength[4]);



// // console.log(x);

// // var x = 1;

// // var y = 1;
// // if (true){
// //     var y = 5;
// // }
// // console.log(y);

// const arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// console.log(arr);
// for(let i =0; i < arr.lenght; i++){
// console.log('ggg: ' + i);
// console.log('ffff: ' + arr[i]);
// }

// const car = {
//     model: 'm3',
//     doors: 5,
//     hp: 400,


// print: function() {
//     console.log("to jset auto: " + this.model + " i ma drzwi: " + this.doors)

// }
// }
// console.log(car.print());


// const doorCount = car.doors;
// console.log(car.model);

// const sayHello = function(name) {
//     console.log("czesc mam na imie " + name);
   

// }

// console.log(sayHello('1'));


//             // sayHello("Maciej");
//             // sayHello("Mmichal");
//             // sayHello("Mdfdj");
//             // sayHello("Mhthrtej");

//         //      const sum = (a, b) => {
//         //         return a + b;
//         //     }
            
//         //     const sum1 = function (a, b){
            
//         //     return a + b;
//         //     }

//         //    console.log(sum(2,2));


// //          const number = 2;

// //         if (number === 1) {
// //             console.log("licxzba pierwsza")
// //         }

// //         if (number === 1) {
// //             console.log ("piekna liczba")
// //         }

// // if (number === 1) {
// //     console.log("magiczna liczna")
// // }
// // console.log(error);

// const person = {
//     name: "Maciek",
//     age: 16,
// }

// const isAdultPerson = function(personParameter){
//     console.log(personParameter)

// if(personParameter.age >= 18){
//     return "Person is adult";
// }

// return "Person is not adult";
// }
// isAdultPerson(person);

// const amIAdult = isAdultPerson(person);

// console.log(amIAdult)

// const fruits=['banana', 'strawberry', 'kiwi'];
// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);
// for (let i=0; i < fruits.length; i++) {
// console.log(fruits[i]);
// }


// function printArrayElements(arr) {
//     for (let i = 0; i < printArrayElements; i++){
//         console.log(arr[i]);

//     }
// }

const names = ["Dominik", "andrzej", "Jan"];
const arr = names.forEach(function(el, i, arr){
    console.log(el, i, arr);
}
)

