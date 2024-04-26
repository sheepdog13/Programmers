function solution(arr)
{
    var answer = [];
    let cur = arr[0];
    answer.push(cur)
    for(let x of arr){
        if(cur !== x){
            answer.push(x);
            cur = x;
        } 
    }

    
    return answer;
}