import Filtering from "./Filtering";
import SingleBook from "./SingleBook";
import bookslist from "../../assets/books.json";
import { useState } from "react";
export default function BookListSection() {
  const [books, setBooks] = useState(bookslist);

  // Filter books based on the search term
  function searchBook(searchTerm) {
    console.log(searchTerm)
    const filteredBooks = bookslist.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())

    );
    setBooks([...filteredBooks]);
  }
  function sortingBooks(sort_name){
    console.log(sort_name);
    let sortedArrayOfObjects = null;
    if (sort_name==='name_asc'){
        sortedArrayOfObjects = books.sort((a, b) => a.title.localeCompare(b.title));
        setBooks([...sortedArrayOfObjects]);
    }
    if (sort_name==='name_desc'){
        sortedArrayOfObjects = books.sort((a, b) => b.title.localeCompare(a.title));
        setBooks([...sortedArrayOfObjects]);
    }books.sort((a, b) => a.publishedYear - b.publishedYear);
    if (sort_name==='year_asc'){
        sortedArrayOfObjects = books.sort((a, b) => a.publishedYear - b.publishedYear);
        setBooks([...sortedArrayOfObjects]);
    }
    if (sort_name==='year_desc'){
        sortedArrayOfObjects = books.sort((a, b) => b.publishedYear - a.publishedYear);
        setBooks([...sortedArrayOfObjects]);
    }
    
    
  }

  return (
    <main className="my-10 lg:my-14">
      <Filtering sortSelectBooks={sortingBooks} handleSearch={searchBook} />

      <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => (
          <>
            <SingleBook singleBook={book} />
          </>
        ))}
      </div>
    </main>
  );
}
