/* напишите функцию, которая ожидает массив элементов в качестве первого аргумента,
и перемещает все нули в конец массива, сохраняя порядок остальных элментов */

function moveZeros(arr) {
    let zeroCount = arr.filter(elem => elem === 0).length;
    arr = arr.filter(elem => elem !== 0);
    return arr.concat(Array(zeroCount).fill(0));
}

// изменяет входящий массив
function moveZeroChange(arr) {
    let zeroCount = arr.filter(elem => elem === 0).length;
    for (let i=0; i<zeroCount; i++) {
        arr.splice(arr.indexOf(0), 1);
        arr.push(0);
    }
}

