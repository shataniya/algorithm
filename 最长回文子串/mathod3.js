function palindrome(s){
    if(!s.length){
        return s
    }
    var i = 0
    var limit = [0,0]
    while(i < s.length){
        i = getIndex(s, i, limit)
    }
    return s.slice(limit[0], limit[1])
}

function getIndex(s, low, limit){
    var high = low+1
    while(high < s.length && s[high] === s[low]){
        high++
    }
    var result = high
    while(low > 0 && high < s.length && s[low-1] === s[high]){
        low--
        high++
    }
    if(high- low > limit[1] - limit[0]){
        limit[1] = high
        limit[0] = low
    }
    return result
}

console.log(palindrome("babaddtattarrattatddetartrateedredividerb"))