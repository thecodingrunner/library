let formInput = document.querySelector("#form")
let para = document.querySelector("p")
let closeForm = document.querySelector(".closeForm")
let table = document.querySelector("table")
let formDisplay = document.querySelector(".display")
// let input = document.querySelector("input")
// let popup = document.querySelector(".form-popup")
const dialog = document.querySelector("dialog");
const openForm = document.querySelector(".openForm")


openForm.addEventListener('click', () => {
  dialog.showModal();
});


closeForm.addEventListener('click', () => {
  dialog.close();
});

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
    if (table.rows.length < myLibrary.length + 1) {
    let newRow = table.insertRow(1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    cell1.textContent += book.author;
    cell2.textContent += book.name;
    cell3.textContent += book.pages;
    cell4.textContent += book.read;
    let del = document.createElement("button");
    del.textContent = "delete";
    cell5.appendChild(del);
    del.addEventListener('click', (book) => {
      myLibrary.splice(myLibrary.indexOf(book));
      newRow.remove();
    })
    }
  })
});
