// 1) Напишите функцию cloneDeep таким образом, чтобы она была 
//способна клонировать переданный как параметр объект.
 
const obj = {one: 1, two: 2, three: 3, four: 4};

const cloneDeep = (par) => {
    return {...par}
}

const obj1 = cloneDeep(obj)

console.log(obj1);

// 2) Свертка. Используйте метод reduce в комбинации с concat для свёртки массива массивов 
// в один массив, у которого есть все элементы входных массивов.

let arrays = [[1, 2, 3], [4, 5], [6]];
let flattened = arrays.reduce(function(a, b) {
  return a.concat(b);
});

console.log(flattened)

// 3)  Допустим, у вас есть функция primitiveMultiply, которая в 50% случаев перемножает 2 числа, 
// а в остальных случаях выбрасывает исключение типа MultiplicatorUnitFailure. 
// Напишите функцию, обёртывающую эту, и просто вызывающую её до тех пор, 
// пока не будет получен успешный результат.

// function MultiplicatorUnitFailure() {}
// function primitiveMultiply(a, b) {
//   if (Math.random() < 0.5)
//     return a * b;
//   else
//     throw new MultiplicatorUnitFailure();
// }
// function reliableMultiply(a, b) {
//     let res = primitiveMultiply(a,b)
//     console.log(res)
//     if(res != 'number'){
//         reliableMultiply(a,b)
//     }
// }

// console.log(reliableMultiply(8, 8));

// 4) Расширить прототип Array, добавив к нему метод добавления элемента 
// в начало без использование unshift.


// 5) Выведите все элементы массива используя рекурсию.
let array = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi']; 

const recurseLog = (arr) => {
    if(arr.length > 0){
        console.log(arr.shift())
        recurseLog(arr)
    }
}

recurseLog(array)

// 7) Сделать функцию поиска значений в массиве
const names =  ['vasya', 'petya', 'petr', 'sasha', 'dasha']

const value = 'ya'

function searchFilter (val, arr) {
    let word = [];
    for (let i = 0; i < arr.length; i++){
       if (arr[i].includes(val)){
           word = [...word, arr[i]]
       }
    }
    return word
}

console.log(searchFilter(value, names))

// 8) Сделать функцию которая обрезает массив до указанного значения.

let testData = [44, 2, 1990, 85, 24, "Vasya", "Rafshan", "ashan@example.com", true, false];

const arrayCutUntil = (arr, value) => {
    let newArray = []
    let index = arr.indexOf(value)
    for(let i = 0; i < arr.length; i++){
        if(index <= i){
            newArray.push(arr[i])
        }
    }
    return newArray
}

console.log(arrayCutUntil(testData, 'Vasya'))

// 10) Сделать функцию которая возвращает уникальные элементы массива.

let testData1 = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1, 1,2,3];

const uniqueArray = (arr1, arr2) => {
    let array3 = arr1.concat(arr2)
    let arr4 = []
    for(val of array3){
        if(!arr4.includes(val)){
            arr4.push(val)
        }
    }
    return arr4
}

console.log(uniqueArray(testData1, testData2))

// 11) Сделать функцию которая сможет делать срез данных с ассоциативного массива.

let testData3 = [
    {"name":"Vasya","email":"vasya@example.com","age":20,"skills":{"php":0,"js":-1,"madness":10,"rage":10}},
    {"name":"Dima","email":"dima@example.com","age":34,"skills":{"php":5,"js":7,"madness":3,"rage":2}},
    {"name":"Colya","email":"colya@example.com","age":46,"skills":{"php":8,"js":-2,"madness":1,"rage":4}},
    {"name":"Misha","email":"misha@example.com","age":16,"skills":{"php":6,"js":6,"madness":5,"rage":2}},
    {"name":"Ashan","email":"ashan@example.com","age":99,"skills":{"php":0,"js":10,"madness":10,"rage":1}},
    {"name":"Rafshan","email":"rafshan@example.com","age":11,"skills":{"php":0,"js":0,"madness":0,"rage":10}}
];

let name2 = testData3[0].name
console.log(name2)

const showPropertyValue = (arr, value) => {
    let val
    let newArray = []
    for(let i = 0; i < arr.length; i++){
        if(value === arr[i].value){
            newArray.push(arr[i].value)
        }
    }
    return newArray
}

let name1 = showPropertyValue(testData3, name)
console.log(name1)