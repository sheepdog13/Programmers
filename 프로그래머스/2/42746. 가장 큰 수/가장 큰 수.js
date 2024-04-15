function solution(numbers) {
    var answer = '';
    let arr =[];
    arr = numbers.map(v => v+"");
    answer = arr.sort((a,b) => (b+a) - (a+b)).join("")
    
    return answer[0] === '0' ? '0' : answer;

}