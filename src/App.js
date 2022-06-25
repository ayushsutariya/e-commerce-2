import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Containers/Home/Home';

function App() {
  return (
    <Home />
    // <Switch>
    //   <Route exact path={"/home"} component={Home} />
    // </Switch>
  );
}

export default App;
