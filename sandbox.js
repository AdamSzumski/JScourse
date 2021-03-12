1. // Napisz funkcję, która dodaje 2 liczby i zwraca wynik (z użyciem return). Nazwij funkcję sum.


function sum (a, b){
        return a + b;
}

// - przypisz wywołanie sum(5, 5) funkcji do zmiennej ten
// - przypisz wywołanie sum(2, 2) funkcji do zmiennej four
// - wykorzystaj funkcję sum, aby dodać wartości zmiennych ten i four. Wynik przypisz do zmiennej i wydrukuj wartość tej zmiennej na konsoli.



// const sum = (2, 2);


const sum = function (a, b) {
    return a + b;
}
const ten = sum(5, 5);
const four = sum(2, 2);
console.log(ten);
console.log(four);
const sum = sum(ten, four);
console.log(sum);
//Zadanie 2
const getBiggerNumber = function (a, b) {
    if (a > b) {
        return a;
    }
    return b;
}
const result = getBiggerNumber(2000, 100);
console.log(result);
//Zadanie 3
const isEqual = function (x, y) {
    if (x === y) {
        return true;
    }
    return false;
}
const checkIfEqual = isEqual(2, 3);
console.log(checkIfEqual);