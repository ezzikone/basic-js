module.exports = function transform(arr) {
    let string = Object.prototype.toString;
    if (string.call(arr) !== '[object Array]') {
        throw new Error()
    }
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === '--discard-next') {
            i += 1
            continue
        }
        if (arr[i] === '--discard-prev') {
            if (i === 0) {
                continue
            }
            newArr.pop()
            continue
        }
        if (arr[i] === '--double-next') {
            if (i === arr.length - 1) {
                continue
            }
            newArr.push(arr[i + 1])
            continue
        }
        if (arr[i] === '--double-prev') {
            if (i === 0  ) {
                continue
            }
            newArr.push(arr[i-1]);
            continue
        }

        newArr.push(arr[i])
    }
    return newArr
}

