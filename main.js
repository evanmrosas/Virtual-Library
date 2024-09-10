// Import classes here to console.log and debug
const Media = require("./classes/Media.js")
const Book = require("./classes/Book.js")
const Movie = require("./classes/Movie.js")
const Music = require("./classes/Music.js")
const Podcast = require("./classes/Podcast.js")

const media1 = new Media("tiltel", 2000, "pop")
const media2 = new Media("tilte2", 2001, "jazz")
const media3 = new Media("tilte3", 2002, "rap")

console.log(Media.ALL_MEDIA)
