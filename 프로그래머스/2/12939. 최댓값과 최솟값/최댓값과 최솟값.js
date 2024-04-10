function solution(s) {
    var answer = '';
    const input = s.toString().split(" ").map(v => +v);
    
    answer += Math.min(...input) + " " + Math.max(...input)
    return answer;
}