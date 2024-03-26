function solution(s){
    var answer = true;
    let sum = 0;
    [...s].forEach(function(value){
        if(sum < 0) answer = false;
        if(value === "("){
            sum++
        }else{
            sum--
        }
    })
    if(sum !== 0) answer = false;
    return answer;
}