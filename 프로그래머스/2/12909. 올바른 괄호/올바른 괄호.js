function solution(s){
    var answer = true;
    let stack = []
    for(let x of s){
        if(x === "(") stack.push(x)
        else{
            if(stack.length === 0) return false;
            stack.pop();
        }
    }
    if(stack.length > 0) answer = false
    return answer;
}