// 2.Task: Object Manipulation
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  { title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953 },
  { title: "Jane Eyre", author: "Charlotte Brontë", year: 1847 },
];

// Get The Book Titles
const getBookTitle = (books) => {
  const bookTitles = books.map((book) => book.title);
  return bookTitles;
};

console.log(getBookTitle(books));
