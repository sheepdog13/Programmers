function solution(progresses, speeds) {
    var answer = [];
    let completeArr = []
    let cnt = 0;
    for(let i = 0; i < progresses.length; i++){
        cnt = 0;
        while(progresses[i] < 100){
            progresses[i] += speeds[i]
            cnt++
        }
        completeArr.push(cnt)
    }
    cnt = 1;
    let max = completeArr[0];
    for(let i = 1; i < completeArr.length; i++){
        if(completeArr[i] <= max) cnt++
        else{
            answer.push(cnt)
            cnt = 1;
            max = completeArr[i]
        }
        if(i === completeArr.length -1) answer.push(cnt)
    }
    
    
    return answer;
}