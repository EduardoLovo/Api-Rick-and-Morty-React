import './App.css';
import Home from './pages/Home/Home';
import { Switch, Route } from "react-router-dom";
import ViewCharacter from './pages/ViewCharacter/ViewCharacter';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/viewCharacter/:id"  component={ViewCharacter}/>
      </Switch>
    </div>
  );
}

export default App;
