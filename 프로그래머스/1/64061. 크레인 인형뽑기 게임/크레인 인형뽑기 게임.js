function solution(board, moves) {
        let answer = 0;
        let stack = [];
        moves = moves.map((v) => v - 1);
        for (let x of moves) {
          for (let i = 0; i < board[0].length; i++) {
            // 인형이 있을경우
            if (board[i][x] !== 0) {
              // stack안의 마지막 인형과 같을 경우 pop
              if (board[i][x] === stack[stack.length - 1]) {
                stack.pop();
                answer += 2;
              } else {
                // stack안의 마지막 인형과 다를경우 push
                stack.push(board[i][x]);
              }
              // 인형을 뺐기 때문에 0
              board[i][x] = 0;
              break;
            }
          }
        }

        return answer;
      }