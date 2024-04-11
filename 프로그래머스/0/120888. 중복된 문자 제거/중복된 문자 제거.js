function solution(s) {
    var answer = '';
    for(let i = 0; i < s.length; i++){
        if(i === s.indexOf(s[i])) answer += s[i]
    }
    return answer;
}