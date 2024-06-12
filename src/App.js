import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddReview from './components/AddReview';
import ViewReview from './components/ViewReview';
import Search from './components/Search';
import Delete from './components/Delete';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/add' element={<AddReview/>}/>
        <Route path='/' element={<ViewReview/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/delete' element={<Delete/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
