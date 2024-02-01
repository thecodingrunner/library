let formInput = document.querySelector("#form")
let para = document.querySelector("p")
let button = document.querySelector("button")
let table = document.querySelector("table")
let formDisplay = document.querySelector(".display")
// let input = document.querySelector("input")
let popup = document.querySelector(".form-popup")


function openForm() {
  popup.style.display = "block";
}

function closeForm() {
  popup.style.display = "none";
}

const myLibrary = [];

function Book(author, name, pages, read) {
  this.author = author;
  this.name = name;
  this.pages = pages;
  this.read = read;
}

// const book2 = new Book('lord of the rings', 400)

function addBookToLibrary(author, name, pages, read) {
  let book = new Book(author, name, pages, read);
  myLibrary.push(book);
}

// console.log(nameInput)

// addBookToLibrary('random', 5)

formInput.addEventListener("submit", (event) => {
  event.preventDefault()
  let authorInput = document.querySelector("#author").value;
  let nameInput = document.querySelector("#name").value;
  let pagesInput = document.querySelector("#pages").value;
  let readInput = document.querySelector("#read").value;
  addBookToLibrary(authorInput, nameInput, pagesInput, readInput);
})

formDisplay.addEventListener("click", () => {
  myLibrary.forEach((book) => {
    let newRow = table.insertRow(1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    cell1.textContent += book.author;
    cell2.textContent += book.name;
    cell3.textContent += book.pages;
    cell4.textContent += book.read;
  })
});