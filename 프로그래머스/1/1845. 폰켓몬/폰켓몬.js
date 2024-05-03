function solution(nums) {
    var answer = 0;
    let monsters = new Map();
    let n = nums.length;
    for(let monster of nums){
        if(monsters.has(monster)) monsters.set(monster, monsters.get(monster) + 1)
        else monsters.set(monster, 1)
    }
    
    answer = (n/2) < monsters.size ? n/2 : monsters.size
    return answer;
}