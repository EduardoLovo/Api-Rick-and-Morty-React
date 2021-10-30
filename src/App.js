import './App.css';
import Home from './pages/Home/Home';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
