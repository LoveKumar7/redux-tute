import './App.css';
import User from './User';

function App() {
  return (
    <div className="App">
      <h1>App componnt</h1>
      <User data={{name:'Vikas', age:46}}/>
    </div>
  );
}

export default App;
