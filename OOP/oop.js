// Object Literals
const book0 = {
    title: 'Book One',
    author: 'Iain Slim',
    year: '2022',

    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

//console.log(book0.title);
//console.log(book0.getSummary());
// console.log(Object.values(book0));
// console.log(Object.keys(book0));


// Constructors
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

const book1 = new Book('Book One', 'Iain Slim', '2022');
const book2 = new Book('Book Two', 'Iain Slim', '2023');

console.log(book1.getSummary());

// Prototype (create a method outside of the constructor)
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

console.log(book1.getAge());

// Inheritance
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

const mag1 = new Magazine('Mag One', 'Iain Slim', 2020, 'Nov');

console.log(mag1.getAge());

// Object Create
const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },

    getAge: function() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

// Creating the object
// const book3 = Object.create(bookProtos);
// book3.title = 'Book Three';
// book3.author = 'Iain Slim';
// book3.year = '2013';

const book3 = Object.create(bookProtos, {
    title: {value: 'Book Three'},
    author: {value: 'Iain Slim'},
    year: {value: '2013'},
});

console.log(book3);


// Classes
class Books {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    //Static methods (can be used without instaniating an object)
}

const book4 = new Books('Book Four', 'Iain Slim', '2022');


// Subclasses
class Magazines extends Books {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}