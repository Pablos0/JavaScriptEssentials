let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = document.getElementById('pagesNumber').value;
    
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function showbooks() {
    const booksDiv = books.map((book, index)  => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name: </strong>${book.authorName}</p>
        <p><strong>Book Description: </strong>${book.bookDescription}</p>
        <p><strong>No. of Pages: </strong>${book.pagesNumber} page(s)</p>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

 /* function deleteBook() {
    const bookDelete = books.map(book, index) 
    document.getElementById('deleteBook').innerHTML = books.splice(index, 1);
}
*/ 

/* 
        IDENTIFICAR POR QUE NO ES POSIBLE CORRER EL CODIGO... QUE HACE FALTA?


function deleteBook(bookTitle) {
    // Encuentra el índice del libro que deseas eliminar
    const index = books.findIndex(book => book.title === bookTitle);
    
    // Verifica si el libro existe
    if (index !== -1) {
        // Elimina el libro del array
        books.splice(index, 1);
        
        // Actualiza el contenido del elemento con id 'deleteBook'
        document.getElementById('deleteBook').innerHTML = 'Libro eliminado';
    } else {
        document.getElementById('deleteBook').innerHTML = 'Libro no encontrado';
    }
}

*/