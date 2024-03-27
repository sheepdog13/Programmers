function solution(progresses, speeds) {
    var answer = [];
    var stack = []
    progresses.forEach((value, index) => {
        let progress = value;
        let day = 0;
        while (progress < 100) {
            progress += speeds[index]
                day++;
        }
        stack.push(day)
 });
    while (stack.length > 0) {
        let complete = 1;
        let current = stack.shift();
        
        while (stack.length > 0 && current >= stack[0]) {
            stack.shift();
            complete++;
        }
        
        answer.push(complete);
    }

    return answer;
}