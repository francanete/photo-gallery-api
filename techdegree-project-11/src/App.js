import Header from './components/Header'
import Home from './components/Home';
import apiKey from "./config.js"

const api = apiKey;

function App() {



  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
