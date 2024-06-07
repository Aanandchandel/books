import './App.css';
import ErrorBoundary from './comp/ErrorBoundary';
import Header from './comp/header/Header';
import Main from './comp/Main/Main';
import Shelf from './comp/shelf/Shelf';
import {BooksProvider} from "./context.js"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
<BooksProvider>

<ErrorBoundary>
    <div className="App">
 <Routes>

  <Route path='/' element={<><Header/>
  <Main/></>} />
  <Route path='/books' element={<><Header/>
  <Main/></>} />
  <Route path='/shelf' element={<Shelf/>}/>
  
  <Route path='*' element={<h1>not found</h1>}/>
  


  </Routes> 
      
    </div>
</ErrorBoundary>
</BooksProvider>
    </BrowserRouter>
  );
}

export default App;
