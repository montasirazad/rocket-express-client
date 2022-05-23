import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import LogIn from './Components/LogIn/LogIn';
import HomePage from './Components/Pages/HomePage/HomePage';
import Services from './Components/Pages/Services/Services';
import TrackOrder from './Components/Pages/TrackOrder/TrackOrder';

function App() {


  return (
    <AuthProvider>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/services' element={<Services />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/track-order' element={<TrackOrder />} />
      </Routes>

    </AuthProvider>
  );
}

export default App;
