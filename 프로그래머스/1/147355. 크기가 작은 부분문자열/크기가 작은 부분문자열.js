function solution(t, p) {
    var answer = 0;
    let sum = ""
    for(let rt =0; rt < t.length; rt++){
        if(sum.length < p.length){sum += t[rt]} 
        else{
            sum = sum.substring(1) + t[rt];
        }
        if(sum.length === p.length) {
            sum <= p && answer++
        }
    }
    return answer;
}