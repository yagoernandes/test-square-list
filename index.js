function squareRootMap(list){
    // Validations
    if(Object.prototype.toString.call(list) !== '[object Array]') throw new Error('Must be an array')
    if(list.length <= 0) throw new Error('Array cannot be empty')

    return list.filter(x=>Number.isInteger(x)).map(x=> x*x).sort((a,b)=>a-b)
}

module.exports = squareRootMap