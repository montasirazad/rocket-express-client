import './App.css';
import useFirebase from './Components/Hooks/Firebase/useFirebase';

function App() {
  const { signedInUser, handleGoogleSignIn } = useFirebase()
  return (
    <div className="App">
      <h1>Rocket Express</h1>
      <button onClick={handleGoogleSignIn}>LOg in</button>
    </div>
  );
}

export default App;
