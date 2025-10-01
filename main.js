import './style.css'

const books = [
  {
    id: 1,
    title: "O'tkan kunlar",
    author: "Abdulla Qodiriy",
    price: "45,000 so'm",
    icon: "📚"
  },
  {
    id: 2,
    title: "Mehrobdan chayon",
    author: "Abdulla Qodiriy",
    price: "40,000 so'm",
    icon: "📖"
  },
  {
    id: 3,
    title: "Kecha va kunduz",
    author: "Cho'lpon",
    price: "38,000 so'm",
    icon: "📕"
  },
  {
    id: 4,
    title: "Hamsa",
    author: "Alisher Navoiy",
    price: "65,000 so'm",
    icon: "📗"
  },
  {
    id: 5,
    title: "Sarob",
    author: "Abdulla Qahhor",
    price: "35,000 so'm",
    icon: "📘"
  },
  {
    id: 6,
    title: "Nur borki, soya bor",
    author: "Said Ahmad",
    price: "42,000 so'm",
    icon: "📙"
  },
  {
    id: 7,
    title: "Ikki eshik orasi",
    author: "O'tkir Hoshimov",
    price: "48,000 so'm",
    icon: "📔"
  },
  {
    id: 8,
    title: "Dunyoning ishlari",
    author: "O'tkir Hoshimov",
    price: "50,000 so'm",
    icon: "📓"
  }
];

function renderBooks(booksToRender) {
  const booksGrid = document.getElementById('booksGrid');
  booksGrid.innerHTML = '';

  booksToRender.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.innerHTML = `
      <div class="book-cover">${book.icon}</div>
      <div class="book-info">
        <h3 class="book-title">${book.title}</h3>
        <p class="book-author">${book.author}</p>
        <p class="book-price">${book.price}</p>
      </div>
    `;
    booksGrid.appendChild(bookCard);
  });
}

const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeLogin = document.getElementById('closeLogin');
const closeRegister = document.getElementById('closeRegister');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const searchInput = document.getElementById('searchInput');

loginBtn.addEventListener('click', () => {
  loginModal.classList.add('active');
});

registerBtn.addEventListener('click', () => {
  registerModal.classList.add('active');
});

closeLogin.addEventListener('click', () => {
  loginModal.classList.remove('active');
});

closeRegister.addEventListener('click', () => {
  registerModal.classList.remove('active');
});

window.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.classList.remove('active');
  }
  if (e.target === registerModal) {
    registerModal.classList.remove('active');
  }
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Tizimga kirish funksiyasi amalga oshirilmoqda...');
  loginModal.classList.remove('active');
  loginForm.reset();
});

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Ro'yxatdan o'tish muvaffaqiyatli amalga oshirildi!");
  registerModal.classList.remove('active');
  registerForm.reset();
});

searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm) ||
    book.author.toLowerCase().includes(searchTerm)
  );
  renderBooks(filteredBooks);
});

renderBooks(books);
