import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import Dashboard from './Components/DashBoard/Dashboard';
import LogIn from './Components/LogIn/LogIn';
import HomePage from './Components/Pages/HomePage/HomePage';
import PlaceOrderForm from './Components/Pages/PlaceOrderForm/PlaceOrderForm';
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
        <Route path='/place-order-form' element={<PlaceOrderForm />} />
        <Route path='/track-order' element={<TrackOrder />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>

    </AuthProvider>
  );
}

export default App;
