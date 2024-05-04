function solution(genres, plays) {
    var answer = [];
    let genresObj = {};
    let songs = {};
    

    for(let i = 0; i < genres.length; i++){
        genresObj[genres[i]] = (genresObj[genres[i]] || 0) + plays[i];
        songs[i] = {play: plays[i], genre : genres[i]}
    }
    
    const sortGenres = Object.keys(genresObj).sort((a,b) => genresObj[b] - genresObj[a])
    for(let sortedgenre of sortGenres){
        const twoSongs = Object.values(songs).filter((song)=> song.genre === sortedgenre).sort((a,b) => b.play - a.play).slice(0,2)
        
        twoSongs.forEach((song) => {
            const uniqueId = Object.values(songs).indexOf(song);
            answer.push(uniqueId);
        });
    }
    
    
    return answer;
}