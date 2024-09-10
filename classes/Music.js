// import the Media class:
const Media = require('./Media')
// create your Music class:
class Music extends Media{
    constructor(title, year, genre, artist, length){
        super(title,year,genre)
       this.artist = artist;
       this.length = length;
    }

    summary(){
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`
    }

    static shortestAlbum(music){
        let shortestLength = music[0]
        for(let i = 1; i < music.length; i++){
            if(music[i].length < shortestLength.length){
                shortestLength = music[i]
            }
        }
        return shortestLength;
    }
}
// don't change below
module.exports = Music;
