function jump(ss){
    var len = ss.length
    var ll = l = nn = 0
    var cc = ss[ll]
    while(cc < len-1){
        var max_l = ll+1, l = max_l+1
        while(l <= ll+ss[ll]){
            if(ss[l]+l >= ss[max_l]+max_l){
                max_l = l
            }
            l++
        }
        cc = ss[max_l]+max_l
        ll = max_l
        nn++
    }
    return nn+1
}

console.log(jump([2,3,1,1,4]))
console.log(jump([3,2,1]))