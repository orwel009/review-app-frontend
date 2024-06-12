import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddReview from './components/AddReview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddReview/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
