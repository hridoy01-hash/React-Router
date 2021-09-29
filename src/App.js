import './App.css';
import Home from './components/Home/Home';
import Friend from './components/Friends/Friend';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router,Switch,Route,} from 'react-router-dom';
import Header from './components/Header/Header';
import FriendDeatils from './components/FriendDetails/FriendDeatils';
import Calture from './components/Caltural/Calture';
function App() {
  return (
    <div className="App">

      
    
    <Router>
     <Header></Header>

      <Switch>
        <Route exact path="/">
           <Home></Home>
        </Route>
        <Route path="/friends">
           <Friend></Friend>
        </Route>
        <Route path="/friend/:friendId">
          <FriendDeatils></FriendDeatils>
        </Route>
        <Route path="/about">
           <About></About>
        </Route>
        <Route path="/home">
           <Home></Home>
        </Route>
        <Route path="/calture">
          <Calture></Calture>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>

    </Router>

    </div>
  );
}

export default App;
