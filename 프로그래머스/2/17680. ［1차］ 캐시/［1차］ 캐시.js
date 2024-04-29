function solution(cacheSize, cities) {
    var answer = 0;
    let cache = Array.from({ length: cacheSize }, (v) => (v = 0));
    
        for (let x of cities) {
            x= x.toLowerCase()
                let pos = -1;
            
            for(let i = 0; i < cacheSize; i++){
                if(cache[i] === x) pos = i;
            }
          if (pos !== -1) {
             answer += 1
            cache.splice(cache.indexOf(x), 1);
            cache.unshift(x);
          } else {
             answer += 5
            cache.pop();
            cache.unshift(x);
          }
        }

    return answer;
}