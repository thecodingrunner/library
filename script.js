let formInput = document.querySelector("#form")
let para = document.querySelector("p")
let button = document.querySelector("button")
let table = document.querySelector("table")

const myLibrary = [];

function Book(name, pages) {
  this.name = name;
  this.pages = pages;
}

// const book2 = new Book('lord of the rings', 400)

function addBookToLibrary(name, pages) {
  let book = new Book(name, pages);
  myLibrary.push(book);
}

// console.log(nameInput)

// addBookToLibrary('random', 5)

formInput.addEventListener("submit", () => {
  let nameInput = document.querySelector("#name").value
  let pagesInput = document.querySelector("#pages").value
  addBookToLibrary(nameInput, pagesInput)
  // myLibrary.forEach((book) => {
    let newRow = table.insertRow(1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell1.textContent += nameInput;
    cell2.textContent += pagesInput;
  // })
});

