import './App.css';
import Nav from './components/Nav';
import Task from './components/Task';
import Home from './components/Home';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Nav />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/Tasks" exact component={Task} />
      </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
