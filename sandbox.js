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

// const names = ["Dominik", "andrzej", "Jan"];
// const arr = names.forEach(function(el, i, arr){
//     console.log(el, i, arr);
// }
// )


// const tab = ["Marcin", "Ania", "Agnieszka"];
// tab.push ("adam");
// console.log(tab);
// tab[3] = "robert";
// console.log(tab)
// const cars = ["Mercedes", "Audi", "BMW"];
// console.log(cars.join("").length);
// const adam = "kartofel";
// const tab = [...adam];
// console.log(tab);
// const tab = ["Agnieszka", "Marcin", "Ania", "Agnieszka", "Monika"];
// const index = tab.lastIndexOf("Agnieszka");

// if (index !== -1) {
//     console.log("Ostatnie wystąpienie w tablicy to", index);
// }
// const tab1 = ["Ala", "Basia"];
// const tab2 = ["Piotr", "Marcin"];
// console.log(tab1 + tab2);

// const anim1 = ["Pies", "Kot"];
// const anim2 = ["Słoń", "Wieloryb"];
// const anim3 = ["Chomik ninja", "Świnka morderca"];
// const table = anim1.concat(anim2);
// console.log(table);
// const tableBig = anim1.concat(anim2, anim3);
// console.log(tableBig);
// const anim1 = ["Pies", "Kot"];
// const anim2 = ["Słoń", "Wieloryb"];
// const table = [...anim1, ...anim2];
// console.log(table)
// const tab = ["Marcin", "Ania", "Agnieszka", "Monika", 'magda'];

// const tab2 = tab.slice(0, 1);
// console.log(tab2)
// console.log(tab)
// const tab3 = tab.slice(2)
// console.log(tab3)
// const tab4 = tab.slice(1,3)
// console.log(tab4)
// tab.splice(2, 3);
// console.log(tab);

// const tab = new Array(20);
// console.log(tab);
// tab.fill("kot")
// console.log(tab)
// console.log("co" + tab.join(""))

// const tab2 = [];
// tab2.length = 15;
// console.log(tab2);
// tab2.fill("kot", 2, 5);
// console.log(tab2);
// const tab3 = [1, 2, 3, 4, 5];
// tab3.fill("pies", 2, 4);
// console.log(tab3);

// const tab = ["Marcin", "Ania", "Agnieszka"];
// for (let i=0; i<tab.length; i++){
//     console.log("licznik pętli: " + i);
//     console.log(tab[1]);
// }

// const tab = [
//     ["Marcin", 183, "red", "kot"],
//     ["Ania", 173, "blue", "pies"],
//     ["Agnieszka", 170, "yellow", "świnka"]
// ]

// console.log(`
//     imię:       ${tab[0][0]}
//     wzrost:     ${tab[0][1]}
//     kolor:      ${tab[0][2]}
//     zwierzak:   ${tab[0][3]}
// `);

// const level = [
//     [1, 1, 0, 0, 2, 2, 0, 0, 1, 1],
//     [1, 0, 0, 0, 2, 2, 0, 0, 0, 1],
//     [1, 0, 1, 1, 2, 2, 1, 1, 0, 1],
//     [1, 0, 2, 2, 2, 2, 2, 2, 0, 1],
//     [2, 2, 2, 2, 1, 1, 2, 2, 2, 2],
//     [2, 2, 2, 2, 1, 1, 2, 2, 2, 2],
//     [1, 0, 2, 2, 2, 2, 2, 2, 0, 1],
//     [1, 0, 1, 1, 2, 2, 1, 1, 0, 1],
//     [1, 0, 0, 0, 2, 2, 0, 0, 0, 1],
//     [1, 1, 0, 0, 2, 2, 0, 0, 1, 1]
// ];
// let str = "";

// for (const subTab of level) {
//     //pod subTab mamy każdą kolejną podtablicę

//     for (const el of subTab) {
//         switch (el) {
//             case 0 : str += "🟩"; break;
//             case 1 : str += "🟫"; break;
//             case 2 : str += "⬛"; break;
//         }
//     }

//     str += "\n";
// }

// console.log(str);


// function dupa(name = "Michał", status = "najlepszy") {
//     console.log(name + " jest " + status);
// }

// dupa();
// dupa("karol")

// const tabUsers = ["ala", "bala", "cala"];
// tabUsers.forEach(el => console.log(el.toUpperCase()) );

// const tab = ["Marcin", "Ania", "Agnieszka", "Piotrek", "Grześ", "Magda"];

// for (let i=0; i < tab.length; i++){
//     console.log(tab[i]);
// }

// const tab = ["Marcin", "Ania", , "Agnieszka"];

// //pod zmienną el trafią kolejne elementy
// tab.forEach(el => {
//     console.log(el.toUpperCase());
// });
// tab.forEach(() => {
//     //wykonam się tyle razy co liczba elementów
//     console.log("Lubię placki");
// });

// tab.forEach((el, i) => {
//     console.log(`Aktualny element to ${el}, a jego indeks to ${i}`);
// });

// tab.forEach((el, i, arr) => {
//     console.log(`Indeks elementu to ${i}, a długość tablicy to ${arr.length}`);
// });

// function printDetails(el, i, arr) {
//     console.log(el, i, arr);
// }

// tab.forEach(printDetails);

// const ob = {
//     name: "Marcin"
// };
// tab.forEach(function(){
// console.log(this);
// });
// tab.forEach(function(){

// }, ob);

// const tab = [1, 3, 5, 8, 9];
// const allEven = tab.every(el => el % 2 === 0);
// console.log(allEven);

// const tab = [
//     {name: "piotr", age: 18},
//     {name: "ania", age: 15},
//     {name: "monika", age: 16},
//     ];
//     const allAdult = tab.every(el => el.age >= 18);
//     console.log(allAdult);

// zad. 9
    // const family = [
    //     { name: "Wes", year: 1988 },
    //     { name: "Kait", year: 1986 },
    //     { name: "Irv", year: 1970 },
    //     { name: "Lux", year: 2015 },
    //   ];
//       const personAtLeast19 = family.every(el => el.age = 2002);
//       console.log( personAtLeast19);

//       console.log( family.some(el => el.age < 2002));


// const tab = ["Marcin", "Ania", "Agnieszka"];

// const tab2 = tab.map(el => el.toUpperCase())
// console.log(tab);
// console.log(tab2);

// const tab = [1, 2, 3];
// const tab2 = tab.map(el => el*2);
// console.log(tab2);

// const numbers = [1.2, 4.5, 9.3];
// const tab2 = numbers.map(el => Math.ceil(el));
// console.log(tab2);

// function multiple3(number) {
//     return number * 3;
// }

// const ourTable = [1, 2, 3];

// const tab = [1, 2, 3, 4, 5, 6];
// const evenNumbers = tab.filter(el => el % 2 === 0);
// console.log(evenNumbers);

// const tab = ["Marcin", "Ania", "Agnieszka", "Monika", "Piotrek"];
// const woman = tab.filter(name => name.startsWith("A"));
// console.log(woman);

// const tab = [
//     { name : "Piotr", age: 18 },
//     { name : "Ania", age: 15 },
//     { name : "Monika", age: 16 },
//     { name : "Andrzej", age: 20 },
// ];

// const adultUSers = tab.filter(user => user.age <= 18);
// console.log(adultUSers);

// const tab = [1, 2, 3, 4];
// const result = tab.reduce((prev, curr) => prev + curr);

// const tab = [3, 2, 4, 2];

// const result = tab.reduce((a, b) => a * b);

// const tab = [3, 2, 4, 2];
// let sum = 0;
// for (let i = 0; i<tab.length; i++){
//     sum += tab[i];
// }
// console.log(tab)

// const sum = [1, 2, 3].reduce((a, b) => a + b, 0);
// console.log(sum)

// const sum2 = [1, 2, 3].reduce((a, b) => a + b, "");
// console.log(sum2)

// const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// const flatArray = data.reduce((total, amount) => total.concat(amount), []);
// console.log(flatArray)

// Zad. 9
// const comments = [
//     { text: "Love this!", id: 523423 },
//     { text: "Super good", id: 823423 },
//     { text: "You are the best", id: 2039842 },
//     { text: "Ramen is my fav food ever", id: 123523 },
//     { text: "Nice Nice Nice!", id: 542328 },
//   ];

// // const findComment = comments.find(el => el.id === 823423);
// // console.log(findComment);

// const index = comments.findIndex(el => el.id === 823423)
// comments.splice(index, 1);
// console.log(comments)

