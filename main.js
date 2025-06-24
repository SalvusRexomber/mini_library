import { Book }  from "./book.js";
import { Library } from "./library.js";

const library = new Library();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("book-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let renderedBook = new Book(
      form.author.value,
      form.title.value,
      form.category.value,
      form.read.checked);
      const bookId = addBookToLibrary(renderedBook);
      form.reset();
      console.log(`Book with ID ${bookId} added to the library.`);
      renderLibrary();
      console.log("Library rendered successfully.");
  });
  });


function addBookToLibrary(book) {
  const id = library.addBook(book);
  return id;
}

function renderLibrary(){
  const booklist = document.getElementById("book-list");
  booklist.innerHTML = ""; // Clear existing list
  const books = library.getBooks();
  books.forEach(({ id, author, title, category, isRead }) => {
    const li = document.createElement("li");
    li.textContent = `${title} by ${author} (${category}) - ${isRead ? "Read" : "Not Read"}`;
    li.dataset.id = id; // Store the ID for potential future use
    booklist.appendChild(li);
  });
  if (books.length === 0) {
    booklist.innerHTML = "<li>No books in the library.</li>";
  }
}

