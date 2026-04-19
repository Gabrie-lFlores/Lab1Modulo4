const books=[];

function addBook(){
    const title=document.getElementById("bookName").value;
    const author=document.getElementById("authorName").value;
    const description=document.getElementById("bookDescription").value;
    const pages=document.getElementById("pagesNumber").value;
   
   if(title=="" || author=="" || description=="" || pages==""){
    alert("Please fill in all fields.");
    return;
   }
    const book={
    bookName: title,
    bookAuthor: author,
    bookDescription: description,
    pagesNumber: pages
   }
   books.push(book);
    showBooks();  
    clearInputs();
}
function showBooks(){
    const bookContainer=document.getElementById("books");
    if(bookContainer==null) {
        bookContainer.innerHTML = "<p>No se encontraron libros.</p>";
        return;}
   bookContainer.innerHTML = books.map((b,index) => ` <h1> book number: ${index + 1}</h1> <p><strong> Book name: </strong>${b.bookName} <br> <strong>Author: </strong>${b.bookAuthor} <br> <strong>Description: </strong>${b.bookDescription} <br> <strong>Pages: </strong> ${b.pagesNumber}</p> <button onclick="editBook(${index})"> Edit </button> <button onclick="deleteBook(${index})"> Delete </button>`).join('');
     
}
function clearInputs(){
    document.getElementById("bookName").value="";
    document.getElementById("authorName").value="";
    document.getElementById("bookDescription").value="";
    document.getElementById("pagesNumber").value="";
}
function editBook(index){
    const book=books[index];
    document.getElementById("bookName").value=book.bookName;
    document.getElementById("authorName").value=book.bookAuthor;
    document.getElementById("bookDescription").value=book.bookDescription;
    document.getElementById("pagesNumber").value=book.pagesNumber;
    books.splice(index,1);
    showBooks();
}
function deleteBook(index){
    books.splice(index,1);
    showBooks();
}