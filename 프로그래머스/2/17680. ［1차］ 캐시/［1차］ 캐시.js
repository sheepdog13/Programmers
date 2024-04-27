function solution(cacheSize, cities) {
    var answer = 0;
    let cache = Array.from({length:cacheSize},()=>"");
    console.log(cache)
    cities.forEach(city => {
        city = city.toLowerCase();
        let hitpos = -1
        for(let i = 0; i < cacheSize; i++){
            if(cache[i] === city) hitpos = i;
        }
        if(hitpos === -1){
            answer += 5;
            for(let j = cacheSize-1; j >= 1; j--){
                cache[j] = cache[j-1]
            }            
        }
        else{
            answer += 1;
            for(let j = hitpos; j >= 1; j--){
                
                cache[j] = cache[j-1]
            }
        }
                cache[0] = city;
        
    })
    return answer;
}