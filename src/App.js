import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav.jsx';
import Home from "./screens/Home.jsx"
import Quotes from "./screens/Quotes.jsx"
import QuoteCreate from "./screens/QuoteCreate.jsx"
import QuoteEdit from "./screens/QuoteEdit.jsx"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/quotes" element={<Quotes/>}/>
        <Route path="/addquote" element={<QuoteCreate/>}/>
        <Route path="/:id/edit" element={<QuoteEdit/>}/>
      </Routes>
     <Nav/>
    </div>
  );
}

export default App;
