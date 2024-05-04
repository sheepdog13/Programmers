function solution(name) {
    var answer = 0;
    let min_move = name.length - 1;
    
    
    for(let i = 0; i < name.length; i++){
        if(name[i].charCodeAt() - 65 < 91 - name[i].charCodeAt()) answer += name[i].charCodeAt() - 65
        else answer += 91 - name[i].charCodeAt()
        
        // 방향 이동수
        let idx = i + 1;

        // 연속되는 A의 개수 count
        while (idx < name.length && name[idx] === 'A') {
          idx++;
        }

        min_move = Math.min(
          min_move,
          i * 2 + name.length - idx,
          i + 2 * (name.length - idx),
        );
    }

    return answer+min_move;
}