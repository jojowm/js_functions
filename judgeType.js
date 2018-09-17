// 判断传入参数类型的函数
function judgeType (n) {
    let type = Object.prototype.toString.call(n)
    switch(type) {
        case '[object Object]':
            type = 'Object'
            break
        case '[object Function]':
            type = 'Function'
            break
        case '[object Array]':
            type = 'Array'
            break
        case '[object String]':
            type = 'String'
            break
        case '[object Undefined]':
            type = 'Undefined'
            break
        case '[object Null]':
            type = 'Null'
            break
        case '[object Boolean]':
            type = 'Boolean'
            break
    }
    return type
}

let n = function () {}
console.log(judgeType(n))