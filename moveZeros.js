function moveZeros(arr) {
    let newArr = [];
    let zeroArr = [];
    arr.forEach(elem => {
        elem === 0 ? zeroArr.push(elem) : newArr.push(elem);
    });
    newArr = newArr.concat(zeroArr);
    return newArr;
}