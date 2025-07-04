const books = [
  { title: "Python Crash Course", author: "Eric Matthes", language: "Python", category: "Beginner" },
  { title: "Fluent Python", author: "Luciano Ramalho", language: "Python", category: "Advanced" },
  { title: "Automate the Boring Stuff", author: "Al Sweigart", language: "Python", category: "Practical" },
  { title: "Eloquent JavaScript", author: "Marijn Haverbeke", language: "JavaScript", category: "Beginner" },
  { title: "You Don't Know JS", author: "Kyle Simpson", language: "JavaScript", category: "Advanced" },
  { title: "Effective Java", author: "Joshua Bloch", language: "Java", category: "Best Practices" },
  { title: "Head First Java", author: "Kathy Sierra", language: "Java", category: "Beginner" },
  { title: "C++ Primer", author: "Stanley B. Lippman", language: "C++", category: "Beginner" },
  { title: "Effective Modern C++", author: "Scott Meyers", language: "C++", category: "Advanced" },
  { title: "The Go Programming Language", author: "Alan A. A. Donovan", language: "Go", category: "Beginner" },
];

const bookList = document.getElementById("bookList");
const filter = document.getElementById("languageFilter");

function renderBooks() {
  const selected = filter.value;
  bookList.innerHTML = "";

  const filtered = selected === "All"
    ? books
    : books.filter(b => b.language === selected);

  filtered.forEach(book => {
    const card = document.createElement("div");
    card.className = "col-sm-6 col-md-4 col-lg-3 mb-4";
    card.innerHTML = `
      <div class="card h-100 shadow-sm book-card">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${book.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
          <p class="card-text mt-auto">
            <span class="badge bg-primary">${book.language}</span>
            <span class="badge bg-secondary">${book.category}</span>
          </p>
        </div>
      </div>
    `;
    bookList.appendChild(card);
  });
}

filter.addEventListener("change", renderBooks);

// Initial render
renderBooks();