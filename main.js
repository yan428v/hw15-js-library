const library = [];

let inputData = prompt('Enter book data separate by ";"');
while (inputData) {
    let splitData = inputData.split(";");
    let newBook = new Book(splitData[0], splitData[1], splitData[2], splitData[3]);
    library.push(newBook);
    console.log(library);
    inputData = prompt('Enter book data separate by ";"');
}


printLibrary(library);
findBook(library, 443);

function findBook(library, isbn) {
    let index = -1;
    library.forEach((b,i) => {
        if (b.isbn === isbn) {
            index = i;
        }
    });
    console.log(index);
    return index;
}

function printLibrary(x) {
    x.forEach((b) => {
        console.log(b.toString());
    });
}

function Book(isbn, title, author, year) {
    this.isbn = +(isbn);
    this.title = title;
    this.author = author;
    this.year = +(year);
    this.toString = function () {
        return `ISBN : ${this.isbn}, Title : ${this.title},
                Author : ${this.author}, Year : ${this.year}`;
    }
}