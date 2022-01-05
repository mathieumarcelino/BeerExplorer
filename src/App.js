import './App.css';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import Search from './Components/Search/Search';
import Nav from './Components/Nav/Nav';
import {AppProvider} from "./Context/AppContext"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <AppProvider>
      <Header/>
      <Search/>
      <List/>
      <Nav/>
    </AppProvider>
  );
}

export default App;
