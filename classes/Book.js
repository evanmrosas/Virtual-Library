// import the Media class:
const Media = require("./Media")
// create your Book class:
class Book extends Media {
    constructor(title, genre, year, author, numPages, rating){
        super(title, genre, year);
        this.author = author;
        this.numPages = numPages;
        this.rating = rating;
    }

    summary() {
        return "Title: " + this.title + ", Author: " + this.author + ", Year: " + this.year +
         ", Page Count: " + this.numPages + ", Genre: " + this.genre + ", Rating: " + this.rating;
    }

    static highestRating(Book) {
        let highestRatedBook = Book[0];

        for(let i = 1; i < Book.length; i++){
            if(highestRatedBook.rating < Book[i].rating) {
                highestRatedBook = Book[i];
                console.log(highestRatedBook)
            }        
       
        return highestRatedBook
        }
    }

    static calculateAverageRating(book){
        let sumOfrating = 0
        for(let i = 0; i < book.length; i++){
            sumOfrating += book[i].rating
        }
        return sumOfrating / book.length
    }
}


// don't change below
module.exports = Book;
