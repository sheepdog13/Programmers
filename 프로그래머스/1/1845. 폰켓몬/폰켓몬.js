function solution(nums) {
    var answer = 0;
    // 가져갈 수 있는 포켓몬 개수
    const maxPokemonCount = nums.length/2
    let pokemons = {}
    for (let pokemon of nums) {
        pokemons[pokemon] = true;
    }
    // 포켓몬 종류수
    const pokemons_num = Object.keys(pokemons).length;
    // 가져갈 포켓몬수가 많을때
    pokemons_num > maxPokemonCount ? answer = maxPokemonCount : answer = pokemons_num
    return answer;
}