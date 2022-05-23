import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import LogIn from './Components/LogIn/LogIn';

function App() {


  return (
    <AuthProvider>
      <div className="App">
        <h1>Rocket Express</h1>
        <LogIn />
      </div>
    </AuthProvider>
  );
}

export default App;
