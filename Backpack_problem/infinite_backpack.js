// 无限背包的问题，就是商品的次数没有使用的限制
// Ax + By = C
function solve_binary(A, B, C){
    var max_a = Math.floor(C/A)
    var plan_array = []
    for(let i=0; i<=max_a; i++){
        var b = (C - A*i)/B
        // 为了确保b为整数
        if(b === Math.floor(b)){
            var _array = [i, b]
            plan_array.push(_array)
        }
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

// 所有合适的方案
// space_array 商品的空间数组
// max_package 背包的最大容量
function proper_plan(space_array, max_package){
    if(space_array.length === 2){
        var args = [...space_array].concat(max_package)
        return solve_binary.apply(null, args)
    }
    var _space = [...space_array]
    var start = _space.shift()
    var max_a = Math.floor(max_package/start)
    var _result = []
    for(let i=0; i<=max_a; i++){
        var end = max_package - start*i
        var result = proper_plan([..._space], end)
        for(let j=0,len=result.length; j<len; j++){
            result[j].unshift(i)
            _result.push(result[j])
        }
    }
    return _result
}

// 求解无限背包问题
// price_array 商品的价值数组
function solve_package(space_array, price_array, max_package){
    // 获取所有适合的方案
    var proper_array = proper_plan(space_array, max_package)
    var max_cost = 0 // 商品的最大价值
    var max_plan = null // 存储最大价值的所有方案
    for(let i=0,len=proper_array.length; i<len; i++){
        var _array = proper_array[i]
        // 求出每一种方案对应的价值，然后进行比较
        var cost = mul_array(_array, price_array)
        if(cost > max_cost){
            max_cost = cost
            max_plan = [_array]
        }else if(cost === max_cost){
            // 如果价值一样，那么就添加方案
            max_plan.push(_array)
        }
    }
    // 如果最终的方案只有一种，那么直接返回这种方案
    if(max_plan.length === 1){
        max_plan = max_plan[0]
    }
    // 进行封装：
    var _object = {
        max_package, // 背包的最大容量
        space_array, // 商品的空间数组
        price_array, // 商品的价值数组
        max_cost, // 最大价值
        max_plan // 最大价值对应的方案
    }
    return _object
}

var max_package = 5
var space_array = [1, 2, 3, 4, 5]
var price_array = [2, 3, 4, 5, 6]

var _object = solve_package(space_array, price_array, max_package)
console.log(_object)