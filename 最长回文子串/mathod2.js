function isPalindrome(string){
    if(string.length === 1){
        return true
    }
    var _string = string.split("").reverse().join("")
    return string === _string
}

function comString(array1, array2){
    var string = ""
    var array = []
    for(let i=0,len=array1.length; i<len; i++) {
        if(array1[i] === array2[i]){
            string += array1[i]
            if(i === len-1){
                if(isPalindrome(string)){
                    array.push(string)
                }
            }
        }else{
            if(isPalindrome(string)){
                array.push(string)
            }
            string = ""
        }
    }
    array = max_length_array(array)
    return array[0]
}

function max_length_array(array){
    var array_length = array.map(el=>el.length)
    var max_length = Math.max.apply(null, array_length)
    array = array.filter(el=>el.length === max_length)
    return array
}

function crossString(s){
    var array1 = s.split("")
    var array2 = s.split("").reverse()
    var _XS1 = XString(array1, array2)
    var _XS2 = XString(array2, array1)
    if(_XS1.length >= _XS2.length){
        return _XS1
    }else{
        return _XS2
    }
}

function XString(array1, array2){
    var array = []
    for(let i=1,len=array1.length; i<=len; i++){
        var _array1 = array1.slice(0, i)
        var _array2 = array2.slice(len-i, len)
        var _array = comString(_array1, _array2)
        array.push(_array)
    }
    array = max_length_array(array)
    return array[0]
}

// console.log(crossString("babaddtattarrattatddetartrateedredividerb"))
var s1 = "aba"
var s2 = s1.split("").reverse().join("")
console.log(s1 === s2)
