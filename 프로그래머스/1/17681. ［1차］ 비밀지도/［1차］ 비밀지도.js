function init(n, arr){
    let map = [];
    for(let x of arr){
        let bin = x.toString(2);
        if(bin.length === n) map.push(bin)
        else {
            let blank = ""
            for(let i = 0; i < n - bin.length; i++){
                blank += "0"  
            }
            map.push(blank+bin)
        }
    }
    return map
}

function solution(n, arr1, arr2) {
    var answer = [];
    let map1 = init(n, arr1);
    let map2 = init(n, arr2);
    for(let i = 0; i < n; i++){
        let x = ""
        for(let j = 0; j < n; j++){
            if(map1[i][j] === "0" && map2[i][j] === "0") x += " "
            else x += "#"
        }
        answer.push(x);
    }
    
    
    return answer;
}