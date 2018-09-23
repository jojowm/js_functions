// reduce实现map
// arr.map(f)
function f (item) {
    return item + 1
}
Array.prototype.mapByreduce = function (f, thisArg) {
    let arr = this
    return arr.reduce((ret, cur, index, array) => {
        ret.push(f.call(thisArg, cur, index, array))
        // ret.push(f(cur, index, array))
        return ret
    }, [])
}

console.log([1, 2, 3, 4, 5].mapByreduce(f))