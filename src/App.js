import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Header from './components/Header';
function App() {
  return (
    <div className="main-website">
      <div className="container">
        <BrowserRouter>
         
          <Header />

        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
