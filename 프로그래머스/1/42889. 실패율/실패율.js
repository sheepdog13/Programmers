function failNum(stage, users){
    let fail = 0
    for(let x of users){
        if(x > stage) return fail
        else fail++;
    }
    return fail
}

function solution(N, stages) {
    var answer = [];
    let userNum = stages.length;
    stages = stages.sort((a,b) => a-b);
    
    for(let i = 1; i <= N; i++){
        let fail = failNum(i, stages)
        answer.push({stage : i, percent : fail/userNum})
        for(let j = 0; j < fail; j++){
            stages.shift();
            userNum--
        }
    }
    
    answer = answer.sort((a,b) => b.percent - a.percent);
    answer = answer.map(v => v.stage);
    return answer;
}