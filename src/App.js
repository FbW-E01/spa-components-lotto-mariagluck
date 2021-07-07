import './App.css';
import CreateLotto from './components/CreateLotto';

function App() {
  return (
    <div className="App">
     <h1>LOTTO  6/49</h1>
     <p>Generating lucky numbers</p>
     <CreateLotto />
     </div>
  );
}

export default App;
