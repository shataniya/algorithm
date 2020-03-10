// 获取指定的0数组，例如如果长度为3，那么就是 [0, 0, 0]
function zero_array(length){
    var array = []
    for(let i=0; i<length; i++){
        array.push(0)
    }
    return array
}
// 获取所有的方案
function all_plan(goods_length){
    var plan_length = Math.pow(2, goods_length)
    var plan_array = []
    for(let i=0; i<plan_length; i++){
        var array = Number(i).toString(2).split('').map(el=>+el)
        var over_length = goods_length - array.length
        var _array = zero_array(over_length).concat(array)
        plan_array.push(_array)
    }
    return plan_array
}
// 两个数组元素依次相乘的和
function mul_array(array1, array2){
    var sum = 0
    for(let i=0,len=array1.length; i<len; i++){
        sum += array1[i]*array2[i]
    }
    return sum
}
// 筛选出合格的方案
function proper_plan(space_array, max_package){
    var goods_length = space_array.length
    var max_space = Math.max.apply(null, space_array)
    var plan_array = all_plan(goods_length)
    var proper_array = []
    for(let i=0,len=plan_array.length; i<len; i++){
        var _array = plan_array[i]
        var sum = mul_array(_array, space_array)
        if(sum && sum <= max_package && sum > max_package - max_space){
            proper_array.push(_array)
        }
    }
    return proper_array
}

function solve_package(space_array, price_array, max_package){
    var proper_array = proper_plan(space_array, max_package)
    var max_cost = 0
    var max_plan = null
    for(let i=0,len=proper_array.length; i<len; i++){
        var _array = proper_array[i]
        var cost = mul_array(_array, price_array)
        if(cost > max_cost){
            max_cost = cost
            max_plan = [_array]
        }else if(cost === max_cost){
            max_plan.push(_array)
        }
    }
    if(max_plan.length === 1){
        max_plan = max_plan[0]
    }
    var _object = {
        max_package,
        space_array,
        price_array,
        max_cost,
        max_plan
    }
    return _object
}

var max_package = 10
var space_array = [1, 2, 3, 4, 5]
var price_array = [2, 3, 4, 5, 6]

var _object = solve_package(space_array, price_array, max_package)
console.log(_object)