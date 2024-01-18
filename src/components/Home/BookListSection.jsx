import Filtering from "./Filtering";
import SingleBook from "./SingleBook";
import books from '../../assets/books.json'; 
export default function BookListSection(){
    return (
        <main className="my-10 lg:my-14">
      
        <Filtering />
     
        <div
          className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
        {
            books.map((book) => (
                <>
                    <SingleBook singleBook={book}/>
                </>
                
            ))
        }
          
          
          
        </div>
        
      </main>
    );
}