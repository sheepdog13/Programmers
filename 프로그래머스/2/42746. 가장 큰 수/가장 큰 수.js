function solution(numbers) {
    numbers = numbers.map((v) => ""+v);
    
    answer = numbers.sort((a,b)=> (b+a) - (a+b)).join("")
    
    return answer[0] === '0' ? '0' : answer;
}