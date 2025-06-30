const bookForm = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");
const feedback = document.getElementById("feedback");

let books = [];

bookForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();

  if (title && author) {
    books.push({ title, author });
    showFeedback("Book added successfully!");
    displayBooks();
    bookForm.reset();
  } else {
    showFeedback("Please enter both title and author.", true);
  }
});

function displayBooks() {
  bookList.innerHTML = "";
  books.forEach((book, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${book.title} by ${book.author}
      <button onclick="removeBook(${index})">Remove</button>`;
    bookList.appendChild(li);
  });
}

function removeBook(index) {
  books.splice(index, 1);
  showFeedback("Book removed.");
  displayBooks();
}

function showFeedback(message, isError = false) {
  feedback.style.color = isError ? "red" : "green";
  feedback.textContent = message;
  setTimeout(() => (feedback.textContent = ""), 3000);
}
