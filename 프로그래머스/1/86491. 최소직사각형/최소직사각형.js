function solution(sizes) {
    var answer = 0;
    let w = []
    let h = []
    
    for(let size of sizes){
        let max = Math.max(size[0], size[1])
        let min = Math.min(size[0], size[1])
        w.push(max);
        h.push(min);
    }
    
    return answer = Math.max(...w) * Math.max(...h)
}