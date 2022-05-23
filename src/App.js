import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import LogIn from './Components/LogIn/LogIn';
import HomePage from './Components/Pages/HomePage/HomePage';

function App() {


  return (
    <AuthProvider>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LogIn />} />
      </Routes>

    </AuthProvider>
  );
}

export default App;
