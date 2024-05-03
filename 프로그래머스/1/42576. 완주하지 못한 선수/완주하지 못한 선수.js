function solution(participant, completion) {
    var answer = '';
    const pH = new Map();
    const cH = new Map();
    
    for(let x of participant){
        if(pH.has(x)) pH.set(x, pH.get(x)+1)
        else pH.set(x,1)
    }
    for(let x of completion){
        if(pH.has(x)){ 
            pH.set(x, pH.get(x) -1)
            if(pH.get(x) === 0) pH.delete(x)
        }
    }
    let iterator = pH.keys();
    let firstKey = iterator.next().value;
    
    answer = firstKey
    return answer;
}