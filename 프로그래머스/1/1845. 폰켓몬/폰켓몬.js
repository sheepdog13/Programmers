function solution(nums) {
    var answer = 0;
    let n = nums.length;
    let monsters = new Set();
    for(let x of nums){
        monsters.add(x)
    }
    answer = (n/2) < monsters.size ? n/2 : monsters.size
    return answer;
}