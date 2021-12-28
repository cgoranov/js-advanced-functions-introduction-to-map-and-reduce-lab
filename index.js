// Your code here

function mapToNegativize(arr) {
    const negArr = arr.map(function(element) {
        return element * -1
    })
    return negArr
}

function mapToNoChange(arr) {
    const sameArr = arr.map(element => element)
    return sameArr
}

function mapToDouble(arr) {
    const doubleArr = arr.map(element => element * 2)
    return doubleArr
}

function mapToSquare(arr) {
    const squareArr = arr.map(element => element ** 2)
    return squareArr
}

function reduceToTotal (arr, start=0) {
    const total = arr.reduce(function(accum, element) { return accum + element }, start)
    return total
}

function reduceToAllTrue (arr) {
    const result = arr.filter(element => !!element === false )
    if (result.length === 0) {
        return true
    } else {
        return false
    }
}

function reduceToAnyTrue (arr) {
    const result = arr.find(element => !!element === true )
    if (!!result) {
        return true
    } else {
        return false
    }
}