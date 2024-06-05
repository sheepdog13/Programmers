function isRight(num){
    if(num === 3 || num === 6 || num === 9) return true
    else false
}
function isLeft(num){
    if(num === 1 || num === 4 || num === 7) return true
    else false
}

let keypad = [[1,2,3], [4,5,6],[7,8,9],["*",0,"#"]]

function changePostion(num){
    for(let i = 0; i < keypad.length; i++){
        for(let j = 0; j < keypad[0].length; j++){
            if(num === keypad[i][j]) return [i,j]
        }
    }
}
function distancePostion(num, num2){
    return Math.abs(num[0] - num2[0]) + Math.abs(num[1] - num2[1])
}

function solution(numbers, hand) {
    var answer = '';
    let lp = [3,0];
    let rp = [3,2];
    for(let i = 0; i < numbers.length; i++){
        if(isRight(numbers[i])){
            answer += "R"
            rp = changePostion(numbers[i])
        }else{
            if(isLeft(numbers[i])){
                answer += "L"
                lp = changePostion(numbers[i])
            }else{
                
                let nump = changePostion(numbers[i]);
                if(distancePostion(nump, lp) > distancePostion(nump, rp)){
                    answer += "R"
                    rp = changePostion(numbers[i])  
                }else{
                    if(distancePostion(nump, lp) === distancePostion(nump, rp)){
                        if(hand === "right"){
                            answer += "R"
                            rp = changePostion(numbers[i]) 
                        }
                        else{
                            answer += "L"
                            lp = changePostion(numbers[i])
                        }
                    }
                    else{
                        answer += "L"
                        lp = changePostion(numbers[i])
                    }
            }
        }
    }
        
    }
    return answer;
    
}