function solution(clothes) {
    var answer = 1;
    let cH = new Map()
    for(let [val, key] of clothes){
        if(cH.has(key)) cH.set(key, cH.get(key) + 1)
        else cH.set(key, 1)
    }
    
    for (let [key, val] of cH){
        answer *= cH.get(key) + 1
    }
    
    return answer - 1;
}