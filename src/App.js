// ----- IMPORT -----
import './App.css';
import Home from './Components/Home/Home';
import Page from './Components/Page/Page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// ------------------

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/page/:id" element={<Page />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
