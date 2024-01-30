function uniqueValues(arr) {
    let newArr = [];
    arr.forEach(elem => {
        if (!(newArr.includes(elem))) {
            newArr.push(elem);
        }
    });
    return newArr;
}