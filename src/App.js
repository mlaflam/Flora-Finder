import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './style.css';

import ExplorePage from './pages/ExplorePage';
import AboutPage from './pages/AboutPage';
import SignInPage from './pages/SignInPage';
import ErrorPage from './pages/ErrorPage';


function App() {
  return (

      <BrowserRouter>
        <Routes>
        <Route index element={<ExplorePage />} />
        <Route path='/Explore' element={<ExplorePage />} />
        <Route path='/About' element={<AboutPage />} />
        <Route path='/SignIn' element={<SignInPage />} />
        <Route path='*' element={<ErrorPage />} />

        </Routes>
      
      </BrowserRouter>
      



  );
}

export default App;
