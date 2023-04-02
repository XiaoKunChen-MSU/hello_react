import { useState } from 'react';
import { supabase } from './supabaseClient';
import logo from './logo.svg';
import './App.css';
import { set } from 'lodash';

const liblogo = {
  title: 'library',
  image: logo,
  width: '150',
  height: '100'
};

const books = [
  { id: 1, title: 'Old Man and the Sea', author: 'Ernest Hemingway', isbn: '9780743237307', isStock: true},
  { id: 2, title: 'Jane Eyre', author: 'Charlotte Brontë', isbn: '9781596881976', isStock: true},
  { id: 3, title: 'Harry Potter and the Chamber of Secrets', author: 'Joanne Rowling', isbn: '9780439064873', isStock: false},
  { id: 4, title: 'Harry Potter and the Philosophers Stone', author: 'Joanne Rowling', isbn: '9780747532743', isStock: true},
];

function Library(){
  const [myBooks, setMyBooks] = useState([]);
  async function getBooks(){
    let { data: books, error } = await supabase
    .from('books')
    .select('*')
  setMyBooks(books);
  }
  getBooks();
  return (
    <table>
      {
        myBooks.map(b => (
          <tr>
            <td>{b.title}</td>
            <td>{b.isbn}</td>
            <td>{b.description}</td>
          </tr>
        ))
      }
    </table>
  );
}

function Lib(){
  return (
    <>
    <h1>Welcome to the miniest library in Michigan</h1>
    <p>These are all books in our library: </p>
    </>
  );
}

function BookDetails(){
  return (
    <>
    <h2>These are the deatils of all books:</h2>
    </>
  )
}

function BookShelf() {
  const listBooks = books.map (book =>
    <li
      key = {book.id}
      style = {{
        color: book.isStock ? 'green' : 'red'
      }}
    >
      {book.title} ({book.author})
    </li>
    
  );
  return (
    <ul>
      {listBooks}
    </ul>
  );
}

function DisplayLogo(){
  return(
    <img
      className="libraryLogo"
      src={liblogo.image}
      alt={liblogo.title}
      style={{
        width: liblogo.width,
        height: liblogo.height
      }}
    />
  );
}

function PushButton(){
  const [count, setCount] = useState(0);
  function workHard(){
    setCount(count + 1);
  }
  return (
    <>
    <h5>Push me to update the latest book shelfs</h5>
    <button onClick={workHard}>You've pushed me {count} times</button>
    </>
  )
}

function App(){
  return (
    <div className="App">
      <header className="App-header">
        <Lib />
        <BookShelf />
        <BookDetails />
        <Library />
        <DisplayLogo />
        <PushButton />
      </header>
    </div>
  );
}


export default App;
