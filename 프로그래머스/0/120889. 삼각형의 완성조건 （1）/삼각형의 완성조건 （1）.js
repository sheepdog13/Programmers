function solution(sides) {
    var answer = 0;
    
    const sum = sides.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    const max = Math.max(...sides)
    
    sum - max * 2 > 0 ? answer = 1 : answer = 2
    
    return answer;
    
}