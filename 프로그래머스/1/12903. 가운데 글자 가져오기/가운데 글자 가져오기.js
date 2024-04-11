function solution(s) {
    var answer = '';
    const mid = Math.floor(s.length/2)
    console.log(mid)
    if(s.length%2 ===1) answer += s.substr(mid,1)
    else answer += s.substr(mid-1,2)
    return answer;
}