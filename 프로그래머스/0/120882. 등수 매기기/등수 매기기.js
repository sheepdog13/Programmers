function solution(score) {
    var answer = [];
    let resultArr = []
    for(let x of score){
        const result =  (x[0] + x[1]) /2
        resultArr.push(result)
    }
    answer = Array.from({length:resultArr.length}, ()=>1)
    for(let i = 0; i < answer.length; i++){
        for(let j = 0; j < answer.length; j++){
            if(resultArr[i] < resultArr[j]) answer[i]++
        }
    }
    return answer;
}