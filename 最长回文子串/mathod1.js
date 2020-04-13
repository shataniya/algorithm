function checkPalindrome(s){
    var center = 0
    var _center = 0
    var low = 0,hei = 0
    var len = s.length
    var posi = [0, 0]
    while(center < len){
        _center = center+1
        while(s[center] === s[_center]){
            _center++
        }
        low = center-1
        hei = _center
        while(low >=0 && hei <len && s[low] === s[hei]){
            low--
            hei++
        }
        low = low+1
        if(hei - low > posi[1] - posi[0]){
            posi[0] = low
            posi[1] = hei
        }
        center = _center
    }
    return s.slice(posi[0], posi[1])
}

console.log(checkPalindrome("aba"))