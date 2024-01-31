// Напишите функцию, которая возвращает массив уникальных элементов 

//с помощью filter 
function uniqueValues(arr) {
    let newArr = arr.filter((elem, index) => arr.indexOf(elem) == index)
    return newArr;
}

// с помощью Set
function uniqueValuesSet(arr) {
    return Array.from(new Set(arr));
}

// только уникальные элементы
function onlyUniqueValues(arr) {
    let newArr = arr.filter(elem => arr.indexOf(elem) == arr.lastIndexOf(elem));
    return newArr;
}
