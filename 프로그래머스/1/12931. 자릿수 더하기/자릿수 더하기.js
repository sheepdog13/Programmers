function solution(n)
{
        let answer = 0;
        let cur = n;
        let flag = 0;
        while (flag === 0) {
            if (cur < 10) flag = 1;
            answer += cur % 10;
            cur = Math.floor(cur / 10);
          }
        
        return answer;
}