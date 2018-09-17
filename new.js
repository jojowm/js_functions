function F (name) {
    this.name = name
}

var obj = {}

function newObj (F, obj) {
    obj.__proto__ = F.prototype
    var res = F.call(obj, "wang")
    return typeof res === 'object' ? res : obj
}

var result = newObj(F, obj) 
console.log(result.name)