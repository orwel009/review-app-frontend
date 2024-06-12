import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddReview from './components/AddReview';
import ViewReview from './components/ViewReview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/add' element={<AddReview/>}/>
        <Route path='/' element={<ViewReview/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
