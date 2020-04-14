function trap(ss){
    var len = ss.length
    var ll = l = 0, rr = r = len-1
    var cc = maxindexOf(ss)
    var water = 0
    while(rr > ll){
        if(ll < cc){
            l = ll+1
            while(ss[ll] > ss[l]){
                water += ss[ll] - ss[l]
                l++
            }
            ll = l
        }
        if(rr > cc){
            r = rr-1
            while(ss[rr] > ss[r]){
                water += ss[rr] - ss[r]
                r--
            }
            rr = r
        }
    }
    return water
}

function maxindexOf(ss){
    var max_val = Math.max.apply(null, ss)
    for(let i=0,len=ss.length; i<len; i++){
        if(ss[i] === max_val){
            return i
        }
    }
}

trap([4,2,0,3,2,4,3,4])
trap([4,2,3])
trap([5,4,1,2])
trap([6,4,2,0,3,2,0,3,1,4,5,3,2,7,5,3,0,1,2,1,3,4,6,8,1,3])
trap([4,9,4,5,3,2])
trap([5,5,4,7,8,2,6,9,4,5])