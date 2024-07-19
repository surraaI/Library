document.addEventListener('DOMContentLoaded', () => {
    let books = [];
    let bookCounter = 0;

    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.bookNumber = ++bookCounter;
        this.info = function() {
            return `${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not read yet'}`;
        }
    }

    let addBookbtn = document.getElementById('addBookbtn');
    let displaybtn = document.getElementById('displaybtn');
    let displaySection = document.querySelector('.displaysection');

    addBookbtn.addEventListener('click', () => {

        let form = document.createElement('form');

        let title = document.createElement('input');
        title.setAttribute('type', 'text');
        title.setAttribute('placeholder', 'Title');
        title.required = true;
        form.appendChild(title);

        let author = document.createElement('input');
        author.setAttribute('type', 'text');
        author.setAttribute('placeholder', 'Author');
        author.required = true;
        form.appendChild(author);

        let pages = document.createElement('input');
        pages.setAttribute('type', 'number');
        pages.setAttribute('placeholder', 'Pages');
        pages.required = true;
        form.appendChild(pages);

        let read = document.createElement('input');
        read.setAttribute('type', 'checkbox');
        let readLabel = document.createElement('label');
        readLabel.textContent = 'Read';
        form.appendChild(readLabel);
        form.appendChild(read);

        let submit = document.createElement('button');
        submit.textContent = 'Add Book';
        form.appendChild(submit);

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let book = new Book(title.value, author.value, pages.value, read.checked);
            books.push(book);
            alert('Book added successfully!');
            form.reset(); // Clear the form fields
        });

        // Append the form to the display section
        displaySection.innerHTML = ''; // Clear previous forms if any
        displaySection.appendChild(form);
    });

    displaybtn.addEventListener('click', () => {
        displaySection.innerHTML = ''; // Clear previous content

        if (books.length === 0) {
            displaySection.innerHTML = '<p>No books to display.</p>';
        } else {
            books.forEach((book, index) => {
                let bookElement = document.createElement('div');
                bookElement.className = 'book';
                bookElement.innerHTML = `<h2>Book ${index + 1}</h2>
                                         <p><strong>Title:</strong> ${book.title}</p>
                                         <p><strong>Author:</strong> ${book.author}</p>
                                         <p><strong>Pages:</strong> ${book.pages}</p>
                                         <p><strong>Status:</strong> ${book.read ? 'Read' : 'Not read yet'}</p>`;
                displaySection.appendChild(bookElement);
            });
        }
    });
});