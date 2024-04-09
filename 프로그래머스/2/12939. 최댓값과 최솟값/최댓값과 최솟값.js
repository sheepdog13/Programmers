function solution(s) {
    var answer = '';
    const input = s.toString().split(" ").map(v => +v);
    
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    
    for(let i = 0; i < input.length; i++){
        console.log(input[i]);
        if(input[i] > max) max = input[i];
        if(input[i] < min) min = input[i];
    }
    answer += min
    answer += " " + max
    return answer;
}