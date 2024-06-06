function solution(survey, choices) {
    var answer = '';
    const types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
    for(let i = 0; i < survey.length; i++){
        const [l, r] = survey[i].split("")
        const score = Math.abs(choices[i] - 4);
        if (choices[i] < 4) {
          // 왼쪽일때
          types[l] += score;
        } else if (choices[i] > 4) {
          // 오른쪽일때
          types[r] += score;
        }
    }
    const type = Object.keys(types);
    for (let i = 0; i < type.length; i += 2) {
      const left = types[type[i]];
      const right = types[type[i + 1]];
      if (left >= right) {
        answer += type[i];
      } else {
        answer += type[i + 1];
      }
    }
    return answer;
}