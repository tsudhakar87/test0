import express from 'express';
import cors from "cors";
import helmet from "helmet";
import path from "path";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());


// lambda function: () => {} 
// (@params) => {body}

// this is a specific subset of lambda functions called a callback functions
// HTTP requests
app.get("/", (req, res) => {
    res.sendFile(path.resolve() + "/index.html");
});

const HOSTNAME = 'localhost';
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`)
});



// classes
class Book {
    // constructor
    constructor(pages, title, author, year_of_publication) {
        this.pages = pages;
        this.title = title; // need to do this like in java
        this.author = author;
        this.year_of_publication = year_of_publication;
    }

    // methods in js assume return type
    toString() {
        return this.pages + " | " + this.title + " | " + this.author + " | " + this.year_of_publication;
    }

}

var game_of_thrones = new Book(2, "Game of Thrones", "Marin", 201);
console.log(game_of_thrones.toString());

// static class with static methods
class GroupOfSimilarMethods {
    static cool() {
        console.log("beans");
    }

    static meth1() {
        this.cool();
    }
}

GroupOfSimilarMethods.cool();
GroupOfSimilarMethods.meth1();