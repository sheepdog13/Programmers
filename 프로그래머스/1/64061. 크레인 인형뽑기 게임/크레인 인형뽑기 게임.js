function solution(board, moves) {
        let answer = 0;
        let stack = [];
        moves = moves.map((v) => v - 1);
        for (let x of moves) {
          for (let i = 0; i < board[0].length; i++) {
            if (board[i][x] !== 0) {
              if (board[i][x] === stack[stack.length - 1]) {
                stack.pop();
                answer += 2;
              } else {
                stack.push(board[i][x]);
              }
              board[i][x] = 0;
              break;
            }
          }
        }

        return answer;
      }