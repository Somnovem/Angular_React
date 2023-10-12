import './App.css';
import Book from "./Components/book";
import Band from "./Components/band";
import Recipe from "./Components/recipe";

function App() {
    let book = {
        coverUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.macmillan.com%2Ffolio-assets%2Fmacmillan_us_frontbookcovers_1000H%2F9780765326379.jpg&f=1&nofb=1&ipt=6f56e3cc5cd3b59212b8340adf4df9ffcbf30227392a4a7fb2095d3258639a88&ipo=images',
        title: 'Oathbringer',
        author: 'Brandon Sanderson',
        genre: 'Fantasy',
        pageCount: '2117',
        reviews: [
        {
            author: 'User1235123',
            text: 'Loved it! 10/10! Understood nothing tho.'
        },
        {
            author: 'User1212',
            text: '2k pages, 0 things understood. Keep it up!'
        },
        {
            author: 'User1356',
            text: 'New favourite fandom unlocked'
        }
        ]
    }
  return (
    <>
      <Book book={book}/>
      <Band/>
      <Recipe/>
    </>
  );
}

export default App;
