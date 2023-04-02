import { useState } from 'react';
import { supabase } from './supabaseClient';
import logo from './logo.svg';
import './App.css';

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

function MagicButton(){
  const [count, setCount] = useState(0);
  function doMagic(){
    setCount(count + 1);
  }
  return (
    <>
      <h3>This is a magic button</h3>
      <button onClick={doMagic}>Magic {count}</button>
    </>
  );
}

function Lib(){
  return (
    <>
    <h1>Welcome to the miniest library in Michigan</h1>
    <p>Theses are all books in our library: </p>
    </>
  );
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



function App(){
  return (
    <div className="App">
      <header className="App-header">
        <Lib />
        <BookShelf />
        <DisplayLogo />
        <MagicButton />
      </header>
    </div>
  );
}


export default App;
