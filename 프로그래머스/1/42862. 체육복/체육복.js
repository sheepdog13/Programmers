function solution(n, lost, reserve) {
    var answer = 0;
    // 처음 체육복 배열
    let reserveArr = []
    for(let i = 0; i < n; i++){
        reserveArr.push(1);
        for(let x of reserve){
            if(i === x-1) reserveArr[i]++;
        }
    }
    // lost
    for(let i = 0; i < n; i++){
        for(let x of lost){
            if(i === x-1) reserveArr[i]--;
        }
    }
    // 체육복 나눠주기
    for(let i = 0; i < n; i++){
        if(reserveArr[i] === 0 && reserveArr[i-1] === 2){
            reserveArr[i] = 1
            reserveArr[i-1] = 1
        }
        else if(reserveArr[i] === 0 && reserveArr[i+1] === 2){
            reserveArr[i] = 1
            reserveArr[i+1] = 1
        }
    }
    answer = reserveArr.filter(v => v >=1).length
    return answer;
}