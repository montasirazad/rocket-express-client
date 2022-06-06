import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import Dashboard from './Components/DashBoard/Dashboard';
import AllOrder from './Components/DashboardOutlet/AllOrder/AllOrder';
import FeedBack from './Components/DashboardOutlet/FeedBack/FeedBack';
import MakeAdmin from './Components/DashboardOutlet/MakeAdmin/MakeAdmin';
import OrderDetailsAndUpdate from './Components/DashboardOutlet/OrderDetailsAndUpdate/OrderDetailsAndUpdate';
import SingleClientOrder from './Components/DashboardOutlet/SingleClientOrder/SingleClientOrder';
import LogIn from './Components/LogIn/LogIn';
import HomePage from './Components/Pages/HomePage/HomePage';
import PlaceOrderForm from './Components/Pages/PlaceOrderForm/PlaceOrderForm';
import Services from './Components/Pages/Services/Services';
import TrackOrder from './Components/Pages/TrackOrder/TrackOrder';
import AdminRoute from './Components/Shared/AdminRote/AdminRoute';
import PrivateRoute from './Components/Shared/PrivateRoute/PrivateRoute';

function App() {


  return (
    <AuthProvider>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/services' element={<Services />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LogIn />} />

        <Route path='/place-order-form' element={<PrivateRoute>
          <PlaceOrderForm />
        </PrivateRoute>} />

        <Route path='/track-order' element={<TrackOrder />} />


        {/* Nested Route */}
        <Route path='/dashboard' element={<PrivateRoute>
          <Dashboard />
        </PrivateRoute>}>

          <Route path='/dashboard/all-order' element={<AdminRoute>
            <AllOrder />
          </AdminRoute>} />

          <Route path='/dashboard/make-admin' element={<AdminRoute>
            <MakeAdmin />
          </AdminRoute>} />
          <Route path='/dashboard/feedback' element={<FeedBack />} />
          <Route path='/dashboard/order/details/:id' element={<AdminRoute>
            <OrderDetailsAndUpdate />
          </AdminRoute>} />
          <Route path='/dashboard/Single/client/order/details/:email' element={<SingleClientOrder />} />
        </Route>

      </Routes >

    </AuthProvider >
  );
}

export default App;
