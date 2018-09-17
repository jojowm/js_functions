function f (name, age) {
    console.log(this.value)
    console.log(name)
    console.log(age)
}

var obj = {
    value: 1
}

// 要实现 let newF = f.bind1(obj)

Function.prototype.bind1 = function (obj) {
    var self = this
    var args = [].slice.call(arguments, 1)
    return function () {
        var bindArgs = [].slice.call(arguments)
        // 给f传入的参数是args.concat(bindArgs)返回数组的前两位
        self.apply(obj, args.concat(bindArgs))
    }
}

let newF = f.bind1(obj, 'wang', 29)
console.log(newF(2,3))