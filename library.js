export class Library{
    constructor() {
        this.books = new Map();
        this.nextId = 1;
    }

    addBook(book){
        const id = this.nextId++;
        this.books.set(id, book);
        return id;
    }
    removeBook(index){
        if (this.books.has(index)) {
            this.books.delete(index);
            return true;
        }
        return false;
    }
    getBooks(){
        return Array.from(this.books.entries()).map(([id, book]) => ({ id, ...book }));
    }
}