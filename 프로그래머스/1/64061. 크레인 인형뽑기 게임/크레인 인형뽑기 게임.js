function solution(arr, arr2) {
        let answer = 0;
        let stack = [];
        let flag = 0;
        arr2 = arr2.map((v) => v - 1);
        for (let x of arr2) {
          flag = 0;
          for (let i = 0; i < arr[0].length; i++) {
            if (flag === 1) break;
            if (arr[i][x] !== 0) {
              if (arr[i][x] === stack[stack.length - 1]) {
                stack.pop();
                answer += 2;
              } else {
                stack.push(arr[i][x]);
              }
              arr[i][x] = 0;
              flag = 1;
            }
          }
        }

        return answer;
      }